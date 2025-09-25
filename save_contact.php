<?php
$servername = "localhost";
$username = "root"; // default in XAMPP
$password = ""; // leave empty unless you set one
$dbname = "my_website";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form values
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

// Insert into database
$sql = "INSERT INTO contact_form (name, phone, email, message) 
        VALUES ('$name', '$phone', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Message submitted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
