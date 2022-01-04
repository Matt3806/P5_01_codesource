let id = (new URL(window.location).searchParams.get("id"));

fetch ("http://localhost:3000/api/products/" + id)
.then (data => data.json())
.then (product => {
    //console.log(kanap)
        document.querySelector(".item__img").insertAdjacentHTML("afterbegin",`<img src="${product.imageUrl}" alt="${product.altTxt}">`);
        document.querySelector("#title").insertAdjacentHTML("afterbegin",`${product.name}`);
        document.querySelector("#price").insertAdjacentHTML("afterbegin",`${product.price}`);
        document.querySelector("#description").insertAdjacentHTML("afterbegin",`${product.description}`);
        for (let productSelectColor of product.colors){
            document.querySelector("#colors").innerHTML += `<option value="${productSelectColor}">${productSelectColor}</option>`
        };
});



document.querySelector("#addToCart").addEventListener("click", function(){

    const productLinea = JSON.parse(localStorage.getItem('product')) || []
    
    
    

    let colors = document.getElementById('colors').value
    let quantity = document.getElementById('quantity').value

    const product = {
        idProduct : id,
        colorProct : colors,
        quantityProduct : quantity,
    }
    
        productLinea.push(product)
    

    localStorage.setItem("product", JSON.stringify(productLinea))
    window.location.assign("cart.html")
})