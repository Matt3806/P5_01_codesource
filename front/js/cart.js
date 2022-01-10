

  let basket = getBasket()

    for(let product of basket){

      document.querySelector("#cart__items").innerHTML +=
  
                   `<article class="cart__item" data-id="${product.id}" data-color="${product.color} ">
                      <div class="cart__item__img">
                        <img src="${product.image}" alt="${product.altTxt} ">
                      </div>
                      <div class="cart__item__content">
                        <div class="cart__item__content__description">
                          <h2>${product.name} </h2>
                          <p>${product.color}</p>
                          <p>${product.price}€</p>
                        </div>
                        <div class="cart__item__content__settings">
                          <div class="cart__item__content__settings__quantity">
                            <p>Qté :  </p>
                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
                          </div>
                          <div class="cart__item__content__settings__delete">
                            <p class="deleteItem">Supprimer</p>
                          </div>
                        </div>
                      </div>
                    </article>`
                    
                    console.log(product)
                    document.querySelector(".deleteItem").addEventListener("click", function(){
                    removeFromBasket(product)
                    window.location.assign("cart.html")
                    })

                  
    }



    function removeFromBasket (product) {
      let basket = getBasket()
      basket = basket.filter( p => p.id != product.id)
      saveBasket(basket)
  }

    document.querySelector("#totalQuantity").insertAdjacentHTML("afterbegin",`${getNumberProduct()} `);
    document.querySelector("#totalPrice").insertAdjacentHTML("afterbegin",`${getTotalPrice()} `);

