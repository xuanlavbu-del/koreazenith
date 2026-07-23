function addCart(name, price, img) {
    let product = {
        name: name,
        price: price,
        img: img,
        quantity: 1
    };

    // Lấy giỏ hàng từ localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let found = cart.find(item => item.name === name);

    if(found){
        found.quantity++;
    }else{
        cart.push({
            name: name,
            price: price,
            img: img,
            quantity: 1
        });
    }

    // Lưu lại
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Đã thêm vào giỏ hàng!");
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
