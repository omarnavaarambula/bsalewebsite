const listProducts = async () => {
    const response = await fetch('https://bsale-app-js.herokuapp.com/api/v1/products');
    const products = await response.json();
    
    
    let productsAll = ``;
    products.forEach((products, index)=>{
        productsAll += `
        <div class="productos" > <h2>${products.name}</h2>
        <img class="poster" src= "${products.url_image} "
        <h2>De</h2>
        <h2">$${products.price} </h2>
        <div class = "price"> 
        <h2> A solo  </h2>
        <h1>$${Math.round (products.price-products.discount/100*products.price)} </h1>
        <h3 > Con el ${products.discount}%</h3>       
        <h3 > De Descuento </h3>
        <h4>Usted Ahorra</h4>
        $${Math.round(products.discount/100*products.price)} 
        </div>
        </div>`;
    });
    document.getElementById("productsbody").innerHTML = productsAll;
};
window.addEventListener("load", function(){
    listProducts();
});



// Search Products


document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
        if (e.key ==="Escape")e.target.value = ""
        document.querySelectorAll(".productos").forEach(productsSearch =>{
            productsSearch.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?productsSearch.classList.remove("filtro")
            :productsSearch.classList.add("filtro")
        })
    }
})

