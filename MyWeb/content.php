<!DOCTYPE html>

<html>
    <head>
        <title>Daily Expenses overview</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <h2 class="overview">Daily Overview</h2>
        <div class="notice_container">
            

            <div class="notice_2">
                <h3>*** 2026/08/06 ***</h3>
                <?php
                // DB connect
                $conn = new mysqli("localhost", "root", "", "expensesmanagement");

                if($conn->connect_error){
                    die("Connection failed: " . $conn->connect_error);
                }

                // Catch data
                $sql = "SELECT Item,Price FROM expenses ORDER BY Item ASC";
                $result = $conn->query($sql);

                // create Table
                if($result->num_rows>0){
                    echo "<table border='solid' class='table'>";
                    echo "<tr><th>Item</th><th>Price</th></tr>";// Header

                    while($row = $result->fetch_assoc()){
                        echo "<tr>";
                        echo "<td>".$row["Item"]."</td>";
                        echo "<td>Rs. ".$row["Price"]."</td>";
                        echo "</tr>";
                    }
                    echo "</table>";
                } else{
                    echo "<p style='text-align:center;'>No expenses found in DB </p>";
                }

                $conn->close();
                ?>
                
            </div>
        </div>
    </body>
</html>