<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../HtmlFiles/personal_form.html');
    exit();
}

function field(string $name): string {
    return htmlspecialchars(trim($_POST[$name] ?? ''), ENT_QUOTES, 'UTF-8');
}

$fullName = field('full_name');
$dateOfBirth = field('DOB');
$age = filter_input(INPUT_POST, 'age', FILTER_VALIDATE_INT, ['options' => ['min_range' => 0, 'max_range' => 130]]);
$email = filter_input(INPUT_POST, 'Email', FILTER_VALIDATE_EMAIL);
$phone = field('Number');
$gender = field('gender_dropdown');
$address = field('address');

if ($fullName === '' || $dateOfBirth === '' || $age === false || $email === false || $phone === '' || $gender === '' || $address === '') {
    http_response_code(422);
    exit('Please return to the form and complete every field with valid information.');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Details Submitted</title>
    <link rel="stylesheet" href="../CSSFiles/personal_form.css">
</head>
<body>
    <h1>Personal Details Submitted</h1>
    <p>Thank you, <?= $fullName ?>. Your form was received.</p>
    <p><a href="../HtmlFiles/personal_form.html">Return to the form</a></p>
</body>
</html>
