<?php

$servername = "localhost";
$username = "root"; 
$password = "";       
$dbname = "contact_db"; 
// Connect
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Collect form data
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

// Insert into table
$sql = "INSERT INTO contacts (name, phone, email, message) 
        VALUES ('$name', '$phone', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
  echo "✅ Inquiry sent successfully! We’ll contact you soon.";
} else {
  echo "❌ Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
