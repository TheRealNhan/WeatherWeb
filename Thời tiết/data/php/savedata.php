<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="refresh" content="0; url='../../../index.html'" />
        <title>Redirecting...</title>
    </head>
    <body>
        <?php
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
        // Cấu hình thông tin kết nối
        $serverName = "localhost"; // hoặc tên máy chủ SQL Server của bạn
        $connectionOptions = array(
            "Database" => "data", // tên cơ sở dữ liệu
            "Uid" => "", // để trống vì dùng Windows Authentication
            "PWD" => "", // để trống vì dùng Windows Authentication
            "CharacterSet" => "UTF-8"
        );

        // Kết nối tới SQL Server
        $conn = sqlsrv_connect(serverName: $serverName, connectionInfo: $connectionOptions);

        // Kiểm tra kết nối
        if ($conn === false) {
            die(print_r(value: sqlsrv_errors(), return: true));
        }

        // Kiểm tra xem form có được submit không
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Lấy dữ liệu từ form và bảo vệ chống XSS
            $name = htmlspecialchars(string: $_POST['name']);
            $details = htmlspecialchars(string: $_POST['details']);
            $i = 1;
            // Tạo truy vấn SQL để chèn dữ liệu
            $data = "ID " . $i . "Tên: " . $name . "\nNội dung" . $details;
            $sql = "INSERT INTO Submitted_forms (id,name,details) VALUES ($i,$name,$details)"; 
            $i++;
            $params = array($name, $details);

            // Thực thi truy vấn
            $stmt = sqlsrv_query(conn: $conn, sql: $sql, params: $params);

            if ($stmt === false) {
                die(print_r(value: sqlsrv_errors(), return: true));
            } else {
                echo "<p>Dữ liệu đã được tải lên thành công!</p>";
                
            }

            // Giải phóng bộ nhớ và đóng kết nối
            sqlsrv_free_stmt(stmt: $stmt);
            sqlsrv_close(conn: $conn);
        }
        ?>
    </body>
</html>