<?php

namespace controller;

class Database
{

    public static $DATABASE_NAME = "ammilmf1_ammilmfi";
    public static $DATABASE_SERVER = "localhost";
    public static $DATABASE_PASSWORD= "websiteisgood1@";
    public static $DATABASE_USERNAME= "ammilmf1_website";

    private static function connectToDB(){
        $servername =Database::$DATABASE_SERVER;
        $databaseName =Database::$DATABASE_NAME;
        $username = Database::$DATABASE_USERNAME;
        $password =Database::$DATABASE_PASSWORD;
        try {
            $conn = new \PDO("mysql:host=$servername;dbname=$databaseName", $username, $password);
            // set the PDO error mode to exception
            $conn->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch(\PDOException $e) {
            echo "Internal Server Error";
            return null;
            //echo "Connection failed: " . $e->getMessage();
        }
    }

    /**
     * @param $name
     * @param $columns
     */
    public static function createTable($name, $columns){
        try{
            $conn = Database::connectToDB();
            $sql = "CREATE TABLE $name (id INT(9) UNSIGNED AUTO_INCREMENT PRIMARY KEY,";
            foreach ($columns as $column) {
                $sql.= $column.",";
            }
            $sql= substr($sql,0,strlen($sql)-1).")";
            $conn->exec($sql);
        }
        catch (\PDOException $e){
            echo "Internal Server Error";
        }
    }

    public static function formatColumn($parameters){
        $sql="";
        foreach ($parameters as $parameter) {
            $sql.=$parameter." ";
        }
        $name =substr($sql,0,strlen($sql));
        $conn = null;
        return $name;
    }
    public static function executeQuery($sql) {
        $conn = Database::connectToDB();
        try{
            $conn->exec($sql);
            $conn = null;
        }
        catch (\PDOException $e){
            $conn = null;
            throw $e;
        }
    }

    public static function select($sql){
        $conn = Database::connectToDB();
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $stmt->setFetchMode(\PDO::FETCH_ASSOC);
        return $stmt->fetchAll();
    }


}