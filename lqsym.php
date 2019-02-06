<?php
function connect(){
    $config = parse_ini_file('/var/www/vhosts/ebeccoimbra.pt/db.ini');
    $con = mysqli_connect("db.deec.uc.pt",$config['username'],$config['password'],$config['db']);
    if(!$con){
        die("Failed to connect to Database"); 
    }
    return $con;
}

?>