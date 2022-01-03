fetch ("http://localhost:3000/api/products")
.then (data => data.json())
.then (jsonListKanap => {
    //console.log(jsonListKanap);
    for (let jsonKanap of jsonListKanap){
        document.querySelector(".items").innerHTML += ` <a href="./product.html?id=${jsonKanap._id}">
                                                            <article>
                                                            <img src="${jsonKanap.imageUrl}" alt="${jsonKanap.altTxt}">
                                                            <h3 class="productName">${jsonKanap.name}</h3>
                                                            <p class="productDescription">${jsonKanap.description}</p>
                                                            </article>
                                                        </a> `
    }
});