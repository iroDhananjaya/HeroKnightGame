<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../HtmlFiles/main.html');
    exit();
}

$item = trim($_POST['item'] ?? '');
$amount = filter_input(INPUT_POST, 'price', FILTER_VALIDATE_FLOAT);

if ($item === '' || $amount === false || $amount < 0) {
    http_response_code(422);
    exit('Please provide an item and a valid, non-negative amount.');
}

//DB connection
$conn = new mysqli("localhost","root","","expensesmanagement");

// check connection
if($conn->connect_error){
    die("connection failed: ".$conn->connect_error);
}

// Data insert
$statement = $conn->prepare('INSERT INTO expenses (Item, Price) VALUES (?, ?)');
if ($statement && $statement->bind_param('sd', $item, $amount) && $statement->execute()) {
    $statement->close();
    $conn->close();
    header("Location: content.php");
    exit();
}
if ($statement) {
    $statement->close();
}
$conn->close();
http_response_code(500);
exit('Unable to save the expense. Please try again later.');
?>


