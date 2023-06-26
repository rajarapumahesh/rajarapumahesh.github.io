<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Send an email with the form data
    $to = 'your-email@example.com';
    $subject = 'New Contact Form Submission';
    $body = "Name: $name\n\nEmail: $email\n\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Thank you for your message. We will get back to you soon!';
    } else {
        echo 'There was a problem sending your message. Please try again later.';
    }
}
?>
