<?php
include_once 'head.php';
?>

<section class = "signup-form">
<h2>Login </h2>
<form action = "includes/signup.inc.php" method = "post"> 
    <input type = "text" name = "name" placeholder = "Username/Email ..">
    <input type = "password" name = "pwd" placeholder = "Password ..">
    <button type = "submit" name = "submit">Log In </button>
</form>
</section>