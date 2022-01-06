
    getBasket()

      for(let product of getBasket()){

        document.querySelector("#cart__items").innerHTML +=

                     `<article class="cart__item" data-id="${product.id}" "{product-ID}" data-color="${product.color} ">
                        <div class="cart__item__img">
                          <img src="${product.imageUrl}">
                        </div>
                        <div class="cart__item__content">
                          <div class="cart__item__content__description">
                            <h2>Nom du produit</h2>
                            <p>${product.color}</p>
                            <p>42,00 €</p>
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
    }
  
    document.querySelector(".deleteItem").addEventListener("click", function(){
      removeFromBasket()
    })












