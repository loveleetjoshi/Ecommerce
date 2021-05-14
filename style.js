fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    // .then(json=>console.log(json[productId - 1]));
    .then(json=>console.log(json));

function productDescription(clickedid){
    // lj = document.querySelectorAll(".product-js")[0].id;
    productId= clickedid;
    console.log(productId);

    
}