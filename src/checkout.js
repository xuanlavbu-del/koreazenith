// Lấy giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartList = document.getElementById("cart-list");

// Hiển thị sản phẩm
function renderCart() {

    if(cart.length === 0){
        cartList.innerHTML = "<li>Giỏ hàng trống</li>";
        return;
    }

    cartList.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ${item.price} x ${item.quantity}
        `;
        cartList.appendChild(li);
    });
}

renderCart();


// Xử lý form thanh toán
document.getElementById("checkout-form").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    if(cart.length === 0){
        alert("Giỏ hàng đang trống!");
        return;
    }

    // Lưu đơn hàng (có thể nâng cấp sau)
    let order = {
        customer: {
            name,
            phone,
            address
        },
        cart: cart
    };

    console.log(order);

    alert("Đặt hàng thành công!");

    // Xóa giỏ hàng sau khi thanh toán
    localStorage.removeItem("cart");

    // Reload lại
    location.reload();
});