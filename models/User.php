<?php
namespace models;
use controller\Database;

require_once $_SERVER['DOCUMENT_ROOT']."\controller\Database.php";


class User
{
    private $id;
    public $firstName;
    public $lastName;
    public $middleName;
    public $userName;
    public $email;
    public $phoneNo;
    private $password;
    public $bvn;
    private $queries;

    /**
     * User constructor.
     * @param $firstName
     * @param $lastName
     * @param $middleName
     * @param $userName
     * @param $email
     * @param $phoneNo
     * @param $password
     * @param $bvn
     */
    public function __construct($firstName, $lastName, $middleName, $userName, $email, $phoneNo, $password,$bvn)
    {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->middleName = $middleName;
        $this->userName = $userName;
        $this->email = $email;
        $this->phoneNo = $phoneNo;
        $this->password = $password;
        $this->bvn = $bvn;
        $this->queries =[];
    }

    /**
     * @return mixed
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * @param mixed $firstName
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;
    }

    /**
     * @return mixed
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * @param mixed $lastName
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;
    }

    /**
     * @return mixed
     */
    public function getMiddleName()
    {
        return $this->middleName;
    }

    /**
     * @param mixed $middleName
     */
    public function setMiddleName($middleName)
    {
        $this->middleName = $middleName;
    }

    /**
     * @return mixed
     */
    public function getUserName()
    {
        return $this->userName;
    }

    /**
     * @param mixed $userName
     */
    public function setUserName($userName)
    {
        $this->userName = $userName;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    public function passwordMatch($password){
        return password_verify($password ,trim($this->password));
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    public static function fromJson($content){
        $user = new User($content["firstName"],$content["lastName"],"",
            $content["username"],$content["email"],$content["phone"],
            password_hash($content["password"],PASSWORD_BCRYPT,['cost'=>12]),$content["bvn"]);
        return $user;
    }

    /**
     * @param $username
     * @param $password
     * @return User
     * @throws \Exception
     */
    public static function fromDatabase($username,$password){
        $sql = "SELECT username,firstname,lastname,password,email,middlename,bvn,phoneno FROM users  
WHERE (username = '$username')";
        $result = Database::select($sql);
        if(count($result) == 1){
            $row = $result[0];
            $user = new User($row['firstname'],$row['lastname'],$row['middlename'],
                $row['username'],$row['email'],$row['phoneno'],$row['password'],$row['bvn']
            );
            if($user->passwordMatch($password)){
                return $user;
            }
            else{
                throw new \Exception("Password Mismatch");
            }
        }
        else{
            throw new \Exception("No User Found");
        }

    }

    public static function createTable(){
        $firstName = Database::formatColumn(["firstname VARCHAR(30) ","NOT NULL"]);
        $lastName = Database::formatColumn(["lastname VARCHAR(30) ","NOT NULL"]);
        $middleName = Database::formatColumn(["middlename VARCHAR(30) ","NOT NULL"]);
        $userName = Database::formatColumn(["username VARCHAR(30) ","NOT NULL"]);
        $email = Database::formatColumn(["email VARCHAR(50) ","NOT NULL"]);
        $phoneNo = Database::formatColumn(["phoneno VARCHAR(30) ","NOT NULL"]);
        $password = Database::formatColumn(["password VARCHAR(255) ","NOT NULL"]);
        $bvn = Database::formatColumn(["bvn VARCHAR(30) ","NOT NULL"]);
        $date = Database::formatColumn(["reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"]);
        Database::createTable("users",[$firstName,$lastName,$middleName,$userName,$email,$phoneNo,$password,$bvn,$date]);

    }

    public function persist()
    {
        array_push($this->queries, "INSERT INTO users (firstname, lastname, username,email,phoneNo,password,bvn) 
VALUES ('$this->firstName','$this->lastName','$this->userName','$this->email','$this->phoneNo','$this->password','$this->bvn')");
    }

    /**
     * @param {Field}$field
     */
    public static function isExists($field){
        $sql = "SELECT $field->fieldName FROM users  
WHERE ($field->fieldName ='$field->value')";
        if(count(Database::select($sql)) > 0)
            return true;
        else
            return false;

    }


    public function flush(){
        try{
            foreach ($this->queries as $query)
            Database::executeQuery($query);

        }
        catch(\PDOException $e){
            throw $e;
        }



    }
}