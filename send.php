<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$date = date('Y-m-d');

$name = $email = $message = "";

htmlspecialchars($_SERVER["PHP_SELF"]);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = test_input($_POST['name']);
	$email = test_input($_POST['email']);
	$message = test_input($_POST['message']);
}

function test_input($data) {
	$data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
});

$formcontent= "From: $name \n Email: $email \n Message: $message \n";
$recipient = "nick@anandascience.com";
$subject = "Client Message from Webpage Contact Form";
$mailheader = "From: $email \r\n Date: $date \r\n";

echo "Thank you for reaching out, ASC will be in touch with you soon!";

if(!empty($_POST['botCatfish'])) {
	// it's spam
} else {
	// it's human
}

?>