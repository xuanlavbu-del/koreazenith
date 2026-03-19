<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">

    <title>Thanh toán</title>

<link rel="stylesheet" href="css/style.css">

</head>

<body>

<h1>Thanh toán đơn hàng</h1>

<h2>Thông tin khách hàng</h2>

<form id="checkout-form">

    <input type="text" id="name" placeholder="Họ tên" required>

        <input type="text" id="phone" placeholder="Số điện thoại" required>

            <input type="text" id="address" placeholder="Địa chỉ" required>

                <button type="submit">Thanh toán</button>

</form>

<h2>Sản phẩm đã chọn</h2>

<ul id="cart-list"></ul>

<script src="js/checkout.js"></script>

</body>

</html>