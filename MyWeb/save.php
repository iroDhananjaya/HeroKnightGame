<?php
$item = $_POST['item'];
$amount = $_POST['price'];

echo "<h2>Data Received!</h2>";
echo "Item: ". $item ."<br>";
echo "Amount: Rs." . $amount ." <br>";

//DB connection
$conn = new mysqli("localhost","root","","expensesmanagement");

// check connection
if($conn->connect_error){
    die("connection failed: ".$conn->connect_error);
}

// Data insert
$sql = "INSERT INTO expenses (Item,Price) VALUES ('$item','$amount')";
if($conn->query($sql) == TRUE){
    echo "Data saved Successfully!";
    header("Location: content.php");
    exit();
} 
else{
    echo "Error: " .$sql . "<br>" . $conn->error;
}
$conn->close();
?>


