

function addCart(name, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

// kiểm tra nếu đã có sản phẩm
    let found = cart.find(item => item.name === name);

    if(found){
        found.quantity++;
    }else{
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Đã thêm vào giỏ hàng");

}
// Lấy tất cả nút chi tiết
const detailBtns = document.querySelectorAll(".detail");

detailBtns.forEach(btn => {
    btn.onclick = function () {

        // Lấy sản phẩm cha
        const product = this.closest(".product");

        // Lấy dữ liệu
        const name = product.querySelector(".name").innerText;
        const price = product.querySelector(".price").innerText;
        const img = product.querySelector(".p-img").src;

        // Chuyển trang + truyền dữ liệu
        window.location.href =
            `chitiet.html?name=${name}&price=${price}&img=${img}`;
    }
});
