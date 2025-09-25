<?php
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "my_website"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form values safely
$name = $conn->real_escape_string($_POST['name']);
$phone = $conn->real_escape_string($_POST['phone']);
$email = $conn->real_escape_string($_POST['email']);
$message = $conn->real_escape_string($_POST['message']);

// Insert
$sql = "INSERT INTO contact_form (name, phone, email, message) 
        VALUES ('$name', '$phone', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "✅ Message submitted successfully!";
} else {
    echo "❌ Error: " . $conn->error;
}

$conn->close();
?>
