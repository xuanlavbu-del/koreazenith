let cart = JSON.parse(localStorage.getItem("cart")) || [];

let list = document.getElementById("cart-list");
let totalElement = document.getElementById("total");

function renderCart(){

    list.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {

        let row = document.createElement("tr");

        let itemTotal = item.price * item.quantity;
        total += itemTotal;

        row.innerHTML = `
<div id="cart"></div>

<script>
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let html = "";

cart.forEach(item => {
    html += \`
        <div>
            <img src="${item.img}" width="100">
            <p>${item.name}</p>
            <p>${item.price} VND</p>
        </div>
    \`;
});

document.getElementById("cart").innerHTML = html;
</script>
<td>${item.name}</td>
<td>${item.price}</td>
<td>
<button onclick="decrease(${index})">-</button>
${item.quantity}
<button onclick="increase(${index})">+</button>
</td>
<td>${itemTotal}</td>
<td>
<button onclick="removeItem(${index})">Xóa</button>
</td>
`;

        list.appendChild(row);

    });

    totalElement.innerText = total;

}

function increase(index){
    cart[index].quantity++;
    saveCart();
}

function decrease(index){
    if(cart[index].quantity > 1){
        cart[index].quantity--;
        saveCart();
    }
}

function removeItem(index){
    cart.splice(index,1);
    saveCart();
}

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();
