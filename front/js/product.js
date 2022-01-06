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
    
    const colors = document.getElementById('colors').value
    const quantity = document.getElementById('quantity').value
    const quantityNumber = parseInt(quantity)
    const warning = document.querySelector(".item__content__settings").insertAdjacentHTML("afterbegin",`<style>
    .item__content__settings{
        background-color:red;
    }
       `)
    
    const product = {
        id: id,
        color : colors,
        quantity : quantityNumber,
    }
    if(product.color == ""){
        warning
    }else if(product.quantity <= 0 ) {
        warning
        } else if(product.quantity > 100 ) {
        warning
    }else{
        addBasket(product)  
        window.location.assign("cart.html")
    }
})

