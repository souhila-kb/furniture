<?php
session_start();
include "db_conn.php";
if(isset($_POST['mail'])&& isset($_POST['password'])){
  function validate($data){
    $data = trim($data);
    $data = striplashes($data);
    $data = htmlspecialchars($data);
    return data;
  }
}
$mail = validate ($_POST['mail']);
$pass = validate ($_POST['password']);
if(empty($mail)){
  header ("location : home.html?error=User mail is requered");
  exit();
}
elseif(empty($pass)){
  header ("location : home.html?error=Password is requered");
  exit();
}
$sql = "SELECT * FROM users WHERE email='$mail' And password='$pass'";
$result = mysqli_query($conn,$sql);
if(mysqli_num_rows($result) === 1){
  $row=mysqli_fetch_assoc($result);
  if($row['email']===$mail && $row['password']===$pass){
    echo"Loged In!";
    $_SESSION['email']=row['email'];
    $_SESSION['name']=row['name'];
    _SESSION['password']=row['password'];
    $_SESSION['id']=row['id'];
    header("Location: home.html");
    exit();
  }
  else{
    header("Location: home.html?error=Incorrect Email or Password");
    exit();
  }
}
else{
  header("Location: home.html");
  exit();
}
?>