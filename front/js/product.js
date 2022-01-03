let id = (new URL(window.location).searchParams.get("id"));

fetch ("http://localhost:3000/api/products/" + id)
.then (data => data.json())
.then (kanap => {
    //console.log(kanap)
        document.querySelector(".item__img").insertAdjacentHTML("afterbegin",`<img src="${kanap.imageUrl}" alt="${kanap.altTxt}">`);
        document.querySelector("#title").insertAdjacentHTML("afterbegin",`${kanap.name}`);
        document.querySelector("#price").insertAdjacentHTML("afterbegin",`${kanap.price}`);
        document.querySelector("#description").insertAdjacentHTML("afterbegin",`${kanap.description}`);
        for (let kanapSelectColor of kanap.colors){
            document.querySelector("#colors").innerHTML += `<option value="${kanapSelectColor}">${kanapSelectColor}</option>`
        };

        document.querySelector("#addToCart").addEventListener("click", function(){
            localStorage.setItem('id', id)
            let quantityStorage = document.getElementById('quantity').value
            localStorage.setItem('quantity', quantityStorage)
            let colorsStorage = document.getElementById('colors').value
            localStorage.setItem('colors', colorsStorage)
            window.location.assign("cart.html")
        })
});