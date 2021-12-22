function getItems(){
    db.collection("items").get().them((queruSnapshot)=>{
        let items=[];
        queruSnapshot.forEach((doc)=>{
            items.push({
                id:doc.id,
                Image:doc.data().image,
                name : doc.data().name,
                price:doc.data().price,
                make:doc.data().make,
                rating:doc.data().rating
            })
            });
            generateItems(items);
        });
}
function generateItems(items){
    let itemsHTML="";
    items.forEach((item)=>{
        itemsHTML+=`
        <div class="main-product ">
        <div class="product-image rounded-lg w-48 h-52 bg-gray-300">
          
          <img class="w-full h-full object-contian p-4" src="img-mackbook.jpg" alt="img-mackbook.jpg">
          ${items.image}
        </div>
        <div class="product-name font-bold">
          Mackbook Pro ${items.name}
        </div>
        <div class="product-make font-bold">
          Apple ${items.make}
        </div>
        <div class="product-rating font-bold">
          ⭐⭐⭐⭐⭐ ${items.rating}
        </div>
        <div class="product-price font-bold">
         Price: $15000 ${items.price}
        </div>
        <div class=" text-md add-to-cart h-8 w-28 bg-yellow-500 cursor-pointer font-bold flex items-center justify-center hover:bg-yellow-600 rounded">
          Add to cart
        </div>
      </div>     
        `
    })
    document.querySelector(".main-section-products").innerHTML=itemsHTML;
}

getItems();