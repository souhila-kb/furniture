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
$name = validate ($_POST['name']);
if(empty($mail)){
  header ("location : C:\Users\user\Desktop\VScode\HTML-CSS\furniture website?error=User mail is requered");
  exit();
}
elseif(empty($pass)){
  header ("location : C:\Users\user\Desktop\VScode\HTML-CSS\furniture website?error=Password is requered");
  exit();
}
elseif(empty(name)){
    header ("location : C:\Users\user\Desktop\VScode\HTML-CSS\furniture website?error=Name is requered");
    exit();
  }
$sql = "INSERT INTO users(id,email,password,name) Values ('$id','$mail','$pass','$name');";
$result = mysqli_query($conn,$sql);
if(mysqli_num_rows($result) === 1){
  $row=mysqli_fetch_assoc($result);
    echo"Loged In!";
    $_SESSION['email']=row['email'];
    _SESSION['password']=row['password'];
    $_SESSION['name']=row['name'];
    $_SESSION['id']=row['id'];
    header("Location: C:\Users\user\Desktop\VScode\HTML-CSS\furniture website");
    exit();
  }
  else{
    header("Location: C:\Users\user\Desktop\VScode\HTML-CSS\furniture website?error=Incorrect Email or Password");
    exit();
  }
?>