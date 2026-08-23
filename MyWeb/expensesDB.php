<!DOCTYPE html>

<html>
    <head>
        <title>User Personal Details</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <h2 class="title">User Personal Details</h2>     
        <div class="details_container">

            <div class="details_container2">
                <h3>*** Personal Details ***</h3>
                <a href="personal_details.html" class="back">form</a>
                <?php
                // DB connect
                $conn = new mysqli("localhost", "root", "", "expensesmanagement");

                if($conn->connect_error){
                    die("Connection failed: " . $conn->connect_error);
                }

                // Catch data
                $sql = "SELECT FullName,DateOfBirth,Age,Email,PhoneNumber,Gender,Address FROM personal_details ORDER BY Age ASC";
                $result = $conn->query($sql);

                // create Table
                if($result->num_rows>0){
                    echo "<table border='solid' class='table'>";
                    echo "<tr><th>Full Name</th><th>Date of Birth</th><th>Age</th><th>Email</th><th>Phone Number</th><th>Gender</th><th>Address</th></tr>";// Header

                    while($row = $result->fetch_assoc()){
                        echo "<tr>";
                        echo "<td>".$row["Full Name"]."</td>";
                        echo "<td>".$row["DateOfBirth"]."</td>";
                        echo "<td>".$row["Age"]."</td>";
                        echo "<td>".$row["Email"]."</td>";
                        echo "<td>".$row["PhoneNumber"]."</td>";
                        echo "<td>".$row["Gender"]."</td>";
                        echo "<td>".$row["Address"]."</td>";
                        echo "</tr>";
                    }
                    echo "</table>";
                } else{
                    echo "<p style='text-align:center;'>No personal details found in DB </p>";
                }

                $conn->close();
                ?>
                
            </div>
        </div>
    </body>
</html>