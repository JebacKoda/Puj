<?php
// Check for empty fields
if(empty($_POST['form34']) || empty($_POST['form29']) || empty($_POST['form25']) || empty($_POST['form32']) || empty($_POST['form5035']) || !filter_var($_POST['form29'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(500);
    exit();
}

$name = strip_tags(htmlspecialchars($_POST['form34']));
$email = strip_tags(htmlspecialchars($_POST['form29']));
$phone = strip_tags(htmlspecialchars($_POST['form25']));
$subject = strip_tags(htmlspecialchars($_POST['form32']));
$message = strip_tags(htmlspecialchars($_POST['form5035']));

// Create the email and send the message
$to = "info@arte-pujcovna.cz"; // Add your email address in between the "" replacing yourform34@yourdomain.com - This is where the form will send a message to.
$body = "Email z půjčovny.\n\n"."Detaily:\n\nJméno: $name\n\nEmail: $email\n\nTelefon: $phone\n\nZpráva:\n$message";
$header = "od: arte-pujcovna@active24.cz\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$header .= "Reply-To: $email";

if(!mail($to, $subject, $body, $header))
    http_response_code(500);
?>