let id = (new URL(window.location).searchParams.get("id"));

fetch("http://localhost:3000/api/products/" + id)
    .then(data => data.json())
    .then(product => {
        //console.log(kanap)
        document.querySelector(".item__img").insertAdjacentHTML("afterbegin", `<img src="${product.imageUrl}" alt="${product.altTxt}">`);
        document.querySelector("#title").insertAdjacentHTML("afterbegin", `${product.name}`);
        document.querySelector("#price").insertAdjacentHTML("afterbegin", `${product.price}`);
        document.querySelector("#description").insertAdjacentHTML("afterbegin", `${product.description}`);
        for (let productSelectColor of product.colors) {
            document.querySelector("#colors").innerHTML += `<option value="${productSelectColor}">${productSelectColor}</option>`
        };
        document.querySelector("#addToCart").addEventListener("click", function () {

            const colors = document.getElementById('colors').value
            const quantity = document.getElementById('quantity').value
            const quantityNumber = parseInt(quantity)

            const productId = {
                id: id + colors,
                name: product.name,
                color: colors,
                quantity: quantityNumber,
                price: product.price,
                image: product.imageUrl,
                altTxt: product.altTxt,
            }

            if (productId.color == "") {
                const warning = document.querySelector(".item__content__settings").insertAdjacentHTML("afterbegin", `<style>
                .item__content__settings{
                    background-color:red;
                }
                   `)
                alert('merci de choisir une couleur')

            } else if (productId.quantity <= 0) {
                const warning = document.querySelector(".item__content__settings").insertAdjacentHTML("afterbegin", `<style>
                .item__content__settings{
                    background-color:red;
                }
                   `)
                alert('merci de choisir une quantitée entre 1 et 100')
            } else if (productId.quantity > 100) {
                const warning = document.querySelector(".item__content__settings").insertAdjacentHTML("afterbegin", `<style>
                    .item__content__settings{
                        background-color:red;
                    }
                       `)
                alert('merci de choisir une quantitée entre 1 et 100')
            } else {
                addBasket(productId)
                window.location.assign("cart.html")
            }
        })
    });




