<?php
include("../admin/connection/connection.inc.php");

function error422($message)
{

    $data = [
        'status' => 422,
        'message' => $message,

    ];

    header("HTTP/1.0 422 Unproccessable Entity ");
    echo json_encode($data);
    exit();
}


function storeCustomer($customerInput)
{
    global $con;

    $username = mysqli_real_escape_string($con, $customerInput['username']);
    $email = mysqli_real_escape_string($con, $customerInput['email']);
    $user_password = mysqli_real_escape_string($con, $customerInput['user_password']);
    $contact_number = mysqli_real_escape_string($con, $customerInput['contact_number']);


    if (empty(trim($username))) {

        return error422("Enter Your Name");

    } elseif (empty(trim($email))) {
        return error422("Enter Your email");

    } elseif (empty(trim($contact_number))) {
        return error422("Enter Your contact number");

    } elseif (empty(trim($user_password))) {
        return error422("Enter Your user password");

    } else {
        $query = "INSERT INTO `users`( `username`, `email`, `user_password`, `contact_number`) VALUES ('$username','$email','$user_password','$contact_number')";

        $result = mysqli_query($con, $query);

        if ($result) {
            $data = [
                'status' => 201,
                'message' => 'Customer Created Successfully',

            ];

            header("HTTP/1.0 201 Created");
            return json_encode($data);
        } else {
            $data = [
                'status' => 500,
                'message' => 'Method Not Allowed',

            ];

            header("HTTP/1.0 500 Internal Server Error");
            return json_encode($data);
        }
    }

}




function getCustomerList()
{
    global $con;

    $query = "SELECT * FROM users";

    $query_run = mysqli_query($con, $query);

    if ($query_run) {
        if (mysqli_num_rows($query_run) > 0) {

            $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC); // Corrected constant name
            $data = [
                'status' => 200,
                'message' => 'Customer List Fetched Successfully',
                'data' => $res

            ];

            header("HTTP/1.0 200 Success");
            return json_encode($data);
        } else {
            $data = [
                'status' => 404,
                'message' => 'No Customer Found',

            ];

            header("HTTP/1.0 404 No Customer Found");
            return json_encode($data);
        }

    } else {
        $data = [
            'status' => 500,
            'message' => 'Method Not Allowed',

        ];

        header("HTTP/1.0 500 Internal Server Error");
        return json_encode($data);
    }
}



?>