<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

    $mail = new PHPMailer;
    $mail->isSMTP();
    //for debugging
    $mail->SMTPDebug = 2;
    $mail->Host = 'smtp.hostinger.com';
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->Username = 'nick@anandascience.com';
    $mail->Password = 'Nm008168';
    $mail->setFrom('nick@anandascience.com', 'Nick');
    $mail->addReplyTo('nick@anandascience.com', 'Nick');
    //$mail->addAddress('example@email.com', 'Receiver Name');
    $mail->Subject = 'Testing PHPMailer';
    $mail->msgHTML(file_get_contents('msg_format.html'), __DIR__);
    //$mail->Body = 'This is a plain text message body - This is a test...';
    //$mail->addAttachment('test.txt');
    $mail->AltBody = 'HTML format not used, this is the alt body';

if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'The email message was sent.';
}

    $mail->IsHTML(true);



    //below code might not be needed
    $mail->Subject = "Subject Text";
    $mail->Body = "<i>Mail body in HTML</i>";
    $mail->AltBody = "This is the plain text version of the email content";

    $headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";

    if(empty($_POST['name'])  || 
       empty($_POST['email']) || 
       empty($_POST['message']))
    {
    $errors .= "\n Error: all fields are required";
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $date = date('Y-m-d');

    $formcontent= "From: $name \n Email: $email \n Message: $message \n";
    $recipient = "nick@anandascience.com";
    $subject = "Client Message from Webpage Contact Form";
    $mailheader = "From: $email \r\n Date: $date \r\n";

    //first code to verify email format input
    function shapeSpace_check_email($email) {
        return preg_match('#^[a-z0-9.!\#$%&\'*+-/=?^_`{|}~]+@([0-9.]+|([^\s]+\.+[a-z]{2,6}))$#si', $email);
    }
    //second code to verify email format input
    filter_var($email, FILTER_VALIDATE_EMAIL);
    //third email field verification
    if (!preg_match(
        "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
        $email_address))
        {
            $errors .= "\n Error: Invalid email address";
        }
    //check for new line - injection attack security
    function shapeSpace_check_newlines($string) {
        if (preg_match("/(%0A|%0D|\\n+|\\r+)/i", $string) != 0) {
            return false;
        }
        return true;
    }
    // Protect against header injection attacks
    function check_header_injection($fields) {
	    $injection = false;
	    for ($n = 0; $n < count($fields); $n++) {
		if (eregi("%0A", $fields[$n]) || eregi("%0D", $fields[$n]) || eregi("\r", $fields[$n]) || eregi("\n", $fields[$n])) {
			$injection = true;
		    }
	    }
	    return $injection;
    }
	
$from    = $_POST['from'];
$email   = $_POST['email'];
$subject = $_POST['subject'];

$result = check_header_injection(array($from, $email, $subject));

if ($result == true) die();

    //verify POST method for sending
    function shapeSpace_check_post_request() {
        if ($_SERVER['REQUEST_METHOD'] != 'POST'){
            return false;
        }
        return true;
    }
    // Strip HTML entities
function strip_html_entities($str) {
	return preg_replace("/&[a-z0-9]{2,6}+;/i", '', $str);
}

    if (stristr($str, '&'))) $str = strip_html_entities($str);

    try {
        $mail->send();
        echo "Message has been sent successfully";
    } catch (Exception $e) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }

    //security measure against spamBots
    if(!empty($_POST['botCatfish'])) {
        // it's spam
    } else {
        // it's human
    }

    //NEEDS MORE WORK BELOW
    echo "Thank You!" . " -" . "<a href='form.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";

return mail($recipient, $subject, $message, $headers);

?>