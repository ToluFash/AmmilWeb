<?php
namespace models\website;
use controller\Database;

require_once $_SERVER['DOCUMENT_ROOT']."/controller/Database.php";

/**
 * Created by PhpStorm.
 * User: ToluFash-Ammil
 * Date: 6/16/2021
 * Time: 1:09 PM
 */


class Profile{

    private $image;
    private $position;
    private $content;
    private $education;
    private $experience;
    private $certifications;

    public static function getProfiles(){
        $sql = "SELECT * FROM profilez";
        $result = Database::select($sql);
        for ($x = 0; $x< count($result); $x++){

            $id = $result[$x]["id"];
            $eduQ = "SELECT * FROM education WHERE (ownerI = '$id')";
            $expQ = "SELECT * FROM experience WHERE (ownerI = '$id')";
            $cerQ = "SELECT * FROM certifications WHERE (ownerI = '$id')";
            $edu = Database::select($eduQ);
            $exp = Database::select($expQ);
            $cer = Database::select($cerQ);
            $result[$x]['edu'] =$edu;
            $result[$x]['exp'] =$exp;
            $result[$x]['certs'] =$cer;

        }

        return json_encode(["profiles" =>$result]);

    }


}