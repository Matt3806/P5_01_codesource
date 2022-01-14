fetch ("http://localhost:3000/api/products")
.then (data => data.json())
.then (jsonListProduct => {
    //console.log(jsonListProduct);
    for (let jsonProduct of jsonListProduct){
        document.querySelector("#items").innerHTML += ` <a href="./product.html?id=${jsonProduct._id}">
                                                            <article>
                                                            <img src="${jsonProduct.imageUrl}" alt="${jsonProduct.altTxt}">
                                                            <h3 class="productName">${jsonProduct.name}</h3>
                                                            <p class="productDescription">${jsonProduct.description}</p>
                                                            </article>
                                                        </a> `
    }
});