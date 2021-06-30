<?php

use controller\Database;
require_once "models/website/Profile.php";
require_once "models/User.php";
require_once 'models/Field.php';
require_once 'controller/Encrypt.php';
use models\User;
use models\website\Profile;
function getRandomWord($len = 10) {
    $word = array_merge(range('a', 'z'), range('A', 'Z'));
    shuffle($word);
    return substr(implode($word), 0, $len);
}
function logP($string){
    $log = fopen("print.print","a");
    fwrite($log,$string."\n");
    fclose($log);
}

 $url = $_SERVER['REQUEST_URI'];

 switch ($url){
     case "/":
     case "/services":
     case "/aboutus":
     case "/resourcecentre":
     case "/contactus":
     case "/services/agbajowo":
     case "/services/agriculturallending":
     case "/services/assetfinancing":
     case "/services/basiri":
     case "/services/kajolaloanscheme":
     case "/services/dca":
     case "/services/lpo(localpurchaseorder)financing":
     case "/services/overdrafts":
     case "/services/projectfinancing":
     case "/services/stockfinance":
     case "/services/termloans":
         header("Cache-Control: public");
         header("Content-Type: text/html");
         session_start();
         $microTime = microtime();
         $rand = mt_rand(10,10000);;
         $pkrystoken= password_hash("@9jdokshf0(0h%pdhfoo"."$microTime"."$rand"
             ,PASSWORD_BCRYPT,['cost'=>12]);
         $_SESSION['csrfijirToken'] = $pkrystoken;
         $randomWord = getRandomWord(8);
         $_SESSION['csrfijirTag'] = $randomWord;
         $log = fopen("log.log","a");
         fwrite($log,"Request Sender: ".$_SERVER['REQUEST_URI'].", Token: ". $pkrystoken."\n");
         fclose($log);
         $html= file_get_contents("ammilweb/views/index.html");
         $html = str_replace("jfpkskkf","<$randomWord style='display:none'>$pkrystoken</$randomWord>",$html
             );
         echo $html;
         //readfile("ammilweb/views/index.html");
         break;
     //
     case "/getProfiles":
             header("Cache-Control: public");
             header("Content-Type: application/json;charset=utf-8");
             echo Profile::getProfiles();
         break;


     case "/core":
         {
             if($_SERVER['HTTP_ORIGIN'] == "https://ammilmfi.com"){
                 header("Cache-Control: public");
                 header("Content-Type: application/json;charset=utf-8");
                 switch($_POST['type']){
                     case "register":{
                         session_start();
                         logP($_SESSION['csrfijirTag']);
                         $content = \controller\Encrypt::encrypt($_SESSION['csrfijirToken'],utf8_decode($_POST['content']));
                         $decoded =[];
                         try{
                             $decoded  = json_decode($content,true);
                         }
                         catch (Exception $e){
                             $msg =$e->getMessage();
                             echo json_encode(["status"=>500,"message"=>"$msg"]);
                             break;
                         }

                         if(array_key_exists($_SESSION['csrfijirTag'], $decoded)){
                             if($decoded[$_SESSION['csrfijirTag']] === $_SESSION['csrfijirToken']){
                         try{
                             $user = User::fromJson($decoded);
                             $user->persist();
                             $user->flush();
                             echo json_encode(["status"=>200,"message"=>"okay"]);
                         }
                         catch (Exception $e){
                             $msg =$e->getMessage();
                             echo json_encode(["status"=>500,"message"=>"$msg"]);
                         }

                         break;

                             }

                         }
                     }
                     case "checkUsername":{
                         session_start();
                         logP($_SESSION['csrfijirTag']);
                         $content = \controller\Encrypt::encrypt($_SESSION['csrfijirToken'],utf8_decode($_POST['content']));
                         $decoded =[];
                         try{
                             $decoded  = json_decode($content,true);
                         }
                         catch (Exception $e){
                             $msg =$e->getMessage();
                             echo json_encode(["status"=>500,"message"=>"$msg"]);
                             break;
                         }

                         if(array_key_exists($_SESSION['csrfijirTag'], $decoded)){
                             if($decoded[$_SESSION['csrfijirTag']] === $_SESSION['csrfijirToken']){
                         try{

                             if(User::isExists(new \models\Field('username',$decoded['username']))){
                                 echo json_encode(["status"=>500,"message"=>"username exists"]);
                             }
                             else{

                                 echo json_encode(["status"=>200,"message"=>"okay"]);
                             }
                         }
                         catch (Exception $e){
                             $msg =$e->getMessage();
                             echo json_encode(["status"=>500,"message"=>"$msg"]);
                         }
                         break;

                             }

                         }
                     }
                     case "checkEmail":{
                         session_start();
                         logP($_SESSION['csrfijirTag']);
                         $content = \controller\Encrypt::encrypt($_SESSION['csrfijirToken'],utf8_decode($_POST['content']));
                         $decoded =[];
                         try{
                             $decoded  = json_decode($content,true);
                         }
                         catch (Exception $e){
                             $msg =$e->getMessage();
                             echo json_encode(["status"=>500,"message"=>"$msg"]);
                             break;
                         }

                         if(array_key_exists($_SESSION['csrfijirTag'], $decoded)){
                             if($decoded[$_SESSION['csrfijirTag']] === $_SESSION['csrfijirToken']){
                         try{

                             if(User::isExists(new \models\Field('email',$decoded['email']))){
                                 echo json_encode(["status"=>500,"message"=>"email exists"]);
                             }
                             else{

                                 echo json_encode(["status"=>200,"message"=>"okay"]);
                             }
                         }
                         catch (Exception $e){
                             $msg =$e->getMessage();
                             echo json_encode(["status"=>500,"message"=>"$msg"]);
                         }
                         break;

                                     }

                                 }
                     }
                     case "checkBVN":{
                         session_start();
                         logP($_SESSION['csrfijirTag']);
                         $content = \controller\Encrypt::encrypt($_SESSION['csrfijirToken'],utf8_decode($_POST['content']));
                         $decoded =[];
                         try{
                             $decoded  = json_decode($content,true);
                         }
                         catch (Exception $e){
                             $msg =$e->getMessage();
                             echo json_encode(["status"=>500,"message"=>"$msg"]);
                             break;
                         }

                         if(array_key_exists($_SESSION['csrfijirTag'], $decoded)){
                             if($decoded[$_SESSION['csrfijirTag']] === $_SESSION['csrfijirToken']){
                         try{

                             if(User::isExists(new \models\Field('bvn',$decoded['bvn']))){
                                 echo json_encode(["status"=>500,"message"=>"bvn exists"]);
                             }
                             else{

                                 echo json_encode(["status"=>200,"message"=>"okay"]);
                             }
                         }
                         catch (Exception $e){
                             $msg =$e->getMessage();
                             echo json_encode(["status"=>500,"message"=>"$msg"]);
                         }
                         break;


                         }

                         }
                     }
                     case "login":{
                         session_start();
                             logP($_SESSION['csrfijirTag']);
                             $content = \controller\Encrypt::encrypt($_SESSION['csrfijirToken'],utf8_decode($_POST['content']));
                             $decoded =[];
                             try{
                                 $decoded  = json_decode($content,true);
                             }
                             catch (Exception $e){
                                 $msg =$e->getMessage();
                                 echo json_encode(["status"=>500,"message"=>"$msg"]);
                                 break;
                             }

                         if(array_key_exists($_SESSION['csrfijirTag'], $decoded)){
                             if($decoded[$_SESSION['csrfijirTag']] === $_SESSION['csrfijirToken']){
                                 try{
                                     $content = $decoded;
                                     $user = User::fromDatabase($content['username'],$content['password']);
                                     $microTime = microtime();
                                     $rand = mt_rand(10,10000);;
                                     $secureKey = password_hash($user->getUserName()."$microTime"."$rand"
                                         ,PASSWORD_BCRYPT,['cost'=>12]);
                                     $_SESSION[$secureKey] = $user;
                                     echo json_encode(["status"=>200,"message"=>"login successful","sk"=> $secureKey]);
                                 }
                                 catch (Exception $e){
                                     $msg =$e->getMessage();
                                     echo json_encode(["status"=>500,"message"=>"$msg"]);
                                 }
                             }
                         }
                         break;
                     }
                     case "retrieveUser":{
                         try{
                             session_start();
                             $content = json_decode($_POST['content'],true);
                             //error_reporting(0);
                             if(array_key_exists($content['sk'], $_SESSION)){
                                 $user = $_SESSION[$content['sk']];
                                 echo json_encode(["status"=>200,"message"=>"","content"=> json_encode($user)]);
                             }
                             else{
                                 echo json_encode(["status"=>500,"message"=>"access denied"]);
                             }
                         }
                         catch(Exception $e){
                             $msg =$e->getMessage();
                             echo json_encode(["status"=>500,"message"=>"$msg"]);

                         }
                     }
                     case "default":{
                         try{

                         }
                         catch(Exception $e){

                         }
                     }
                 }
                 break;
             }
         }
     case "/webapp":
         header("Cache-Control: public");
         header("Content-Type: text/html");
         header("Content-Type: text/html");
         readfile("ammilweb/views/webapp.html");
         break;
     case "/webappHM":
         header("Cache-Control: public");
         header("Content-Type: text/html");
         readfile("ammilweb/views/webappHM.html");
         break;
     case "/webappCSU":
         header("Cache-Control: public");
         header("Content-Type: text/html");
         readfile("ammilweb/views/webappCSU.html");
         break;
     case "/webappCO":
         header("Cache-Control: public");
         header("Content-Type: text/html");
         readfile("ammilweb/views/webappCO.html");
         break;
     //Resources
     case "/lib.js":
         header("Cache-Control: public");
         header("Content-Type: text/javascript");
         readfile("ammilweb/lib/awc.js");
         break;
     case "/main.js":
         header("Cache-Control: public");
         header("Content-Type: text/javascript");
         readfile("ammilweb/views/index.js");
         break;
     case "/webapp.js":
         header("Cache-Control: public");
         header("Content-Type: text/javascript");
         readfile("ammilweb/lib/webapp.js");
         break;
     case "/webappHM.js":
         header("Cache-Control: public");
         header("Content-Type: text/javascript");
         readfile("ammilweb/lib/webappHM.js");
         break;
     case "/webappCSU.js":
         header("Cache-Control: public");
         header("Content-Type: text/javascript");
         readfile("ammilweb/lib/webappCSU.js");
         break;
     case "/webappCO.js":
         header("Cache-Control: public");
         header("Content-Type: text/javascript");
         readfile("ammilweb/lib/webappCO.js");
         break;
     case "/icons.js":
         header("Cache-Control: public");
         header("Content-Type: text/javascript");
         session_start();
         if(array_key_exists('csrfijirToken', $_SESSION)){
             $html= file_get_contents("ammilweb/views/icons.js");
             $html = str_replace("ifjsgisjf",$_SESSION['csrfijirTag'],$html);
             echo $html;
         }
         break;
     case "/icons2.js":
         header("Cache-Control: public");
         header("Content-Type: text/javascript");
         readfile("ammilweb/views/icons2.js");
         break;
     case "/getCharts.js":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: text/javascript");
         readfile("assets/js/chart.min.js");
         break;
         //Fonts
     case "/fgwo.woff":
         header("Cache-Control: public");
         header("Content-Type: font/woff");
         readfile("ammilweb/views/fonts/fgwo.woff");
         break;
     case "/frankgo.woff":
         header("Cache-Control: public");
         header("Content-Type: font/woff");
         readfile("ammilweb/views/fonts/frankgo.woff");
         break;
     case "/fgc.woff":
         header("Cache-Control: public");
         header("Content-Type: font/woff");
         readfile("ammilweb/views/fonts/fgc.woff");
         break;
     case "/fg.woff":
         header("Cache-Control: public");
         header("Content-Type: font/woff");
         readfile("ammilweb/views/fonts/fg.woff");
         break;
     case "/fgi.woff":
         header("Cache-Control: public");
         header("Content-Type: font/woff");
         readfile("ammilweb/views/fonts/fgi.woff");
         break;
         //Images
     case "/getLogo":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpeg");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/logo.jpg"));
         header("Content-Disposition: attachment; filename=logo.jpg");
         readfile("assets/images/logo.jpg");
         break;
     case "/getBackground.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/png");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/b1.png"));
         header("Content-Disposition: attachment; filename=b1.png");
         readfile("assets/images/b1.png");
         break;
     case "/getBackground2.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/png");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/b2.png"));
         header("Content-Disposition: attachment; filename=b2.png");
         readfile("assets/images/b2.png");
         break;
     case "/getWebAppBG":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/webappbg.png"));
         header("Content-Disposition: attachment; filename=webappbg.png");
         readfile("assets/images/webappbg.png");
         break;
     case "/get1stImage":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/png");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/banner1.png"));
         header("Content-Disposition: attachment; filename=p1.png");
         readfile("assets/images/banner1.png");
         break;
     case "/get2ndImage":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/png");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/banner2.png"));
         header("Content-Disposition: attachment; filename=p2.png");
         readfile("assets/images/banner2.png");
         break;
     case "/get3rdImage.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/png");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/ioe.png"));
         header("Content-Disposition: attachment; filename=iOe.png");
         readfile("assets/images/ioE.png");
         break;
     case "/getVm.png":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/png");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/vm.png"));
         header("Content-Disposition: attachment; filename=vm.png");
         readfile("assets/images/vm.png");
         break;
     case "/getCValues.png":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/png");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/cvalues.png"));
         header("Content-Disposition: attachment; filename=cvalues.png");
         readfile("assets/images/cvalues.png");
         break;
     case "/getServiceBannerSF1.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         readfile("assets/images/stockFinance1.jpg");
         break;
     case "/getServiceBannerAF1.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         readfile("assets/images/assetFinance1.jpg");
         break;
     case "/getServiceBannerBS1.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         readfile("assets/images/basiri1.jpg");
         break;
     case "/getServiceBannerPF1.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         readfile("assets/images/projectFinance1.jpg");
         break;
     case "/getServiceBannerKW1.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         readfile("assets/images/kowope1.jpg");
         break;
     case "/getServiceBannerAG1.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         readfile("assets/images/agbajowo1.jpg");
         break;
     case "/getServiceBannerAGLS1.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         readfile("assets/images/agricLoanScheme1.jpg");
         break;
     case "/getServiceBannerLPO1.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         readfile("assets/images/lpoFinancing1.jpg");
         break;
         //2

     case "/getServiceBannerSF2.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         readfile("assets/images/stockFinance2.jpg");
         break;
     case "/getServiceBannerAF2.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         readfile("assets/images/assetFinance2.jpg");
         break;
     case "/getServiceBannerBS2.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         readfile("assets/images/basiri2.jpg");
         break;
     case "/getServiceBannerPF2.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         readfile("assets/images/projectFinance2.jpg");
         break;
     case "/getServiceBannerKW2.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         readfile("assets/images/kowope2.jpg");
         break;
     case "/getServiceBannerAG2.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         readfile("assets/images/agbajowo2.jpg");
         break;
     case "/getServiceBannerAGLS2.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         readfile("assets/images/agricLoanScheme2.jpg");
         break;
     case "/getServiceBannerLPO2.jpg":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/jpg");
         header("Content-Transfer-Encoding: Binary");
         readfile("assets/images/lpoFinancing2.jpg");
         break;

     case "/getSFIcon":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/png");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/sf.png"));
         header("Content-Disposition: attachment; filename=sf.png");
         readfile("assets/images/sf.png");
         break;
     case "/getPFIcon":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/png");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/pF.png"));
         header("Content-Disposition: attachment; filename=pF.png");
         readfile("assets/images/pF.png");
         break;
     case "/getAFIcon":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/png");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/aF.png"));
         header("Content-Disposition: attachment; filename=aF.png");
         readfile("assets/images/aF.png");
         break;
     case "/getALIcon":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/png");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/aL.png"));
         header("Content-Disposition: attachment; filename=aL.png");
         readfile("assets/images/aL.png");
         break;
     case "/getAJIcon":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/png");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/aJ.png"));
         header("Content-Disposition: attachment; filename=aJ.png");
         readfile("assets/images/aJ.png");
         break;
     case "/getKWIcon":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/png");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/kW.png"));
         header("Content-Disposition: attachment; filename=kW.png");
         readfile("assets/images/kW.png");
         break;
     case "/getBSIcon":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/png");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/bS.png"));
         header("Content-Disposition: attachment; filename=bS.png");
         readfile("assets/images/bS.png");
         break;
     case "/getLPOIcon":
         header("Cache-Control: public"); // needed for internet explorer
         header("Content-Type: image/png");
         header("Content-Transfer-Encoding: Binary");
         header("Content-Length:".filesize("assets/images/lpo.png"));
         header("Content-Disposition: attachment; filename=lpo.png");
         readfile("assets/images/lpo.png");
         break;

     default:
         if( substr($url, 0, 8) == "/profile"){
             header("Cache-Control: public");
             header("Content-Type: text/html");
             session_start();
             $microTime = microtime();
             $rand = mt_rand(10,10000);;
             $pkrystoken= password_hash("@9jdokshf0(0h%pdhfoo"."$microTime"."$rand"
                 ,PASSWORD_BCRYPT,['cost'=>12]);
             $_SESSION['csrfijirToken'] = $pkrystoken;
             $randomWord = getRandomWord(8);
             $_SESSION['csrfijirTag'] = $randomWord;
             $log = fopen("log.log","a");
             fwrite($log,"Request Sender: ".$_SERVER['REQUEST_URI'].", Token: ". $pkrystoken."\n");
             fclose($log);
             $html= file_get_contents("ammilweb/views/index.html");
             $html = str_replace("jfpkskkf","<$randomWord style='display:none'>$pkrystoken</$randomWord>",$html
             );
             echo $html;
             //readfile("ammilweb/views/index.html");
             break;
         }
         readfile("ammilweb/views/404.html");
         break;

 }