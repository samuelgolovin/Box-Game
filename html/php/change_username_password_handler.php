<?php
$to_email = "samuel.samyco@gmail.com";
$subject = "Test email";
$body = "Hello. Good day.";
$headers = "From: sender email";

if (mail($to_email, $subject, $body, $headers)) {
    echo "Email successfully send to $to_email...";
} else {
    echo "Email sending failed!";
}
?>