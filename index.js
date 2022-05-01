/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    }
  
    function accFunction(){
      let y = document.getElementById("accLink");
      if(y.style.display === "block"){
            y.style.display = "none";
      } else {
            y.style.display = "block"
      }
  }
  
  
    // product for front pages
  
    let data = [
  {
    id:"1001",
  name: "Men's Ultra Soft Fleece Hoodie",
  price: 17.59,
  img: "https://media.kohlsimg.com/is/image/kohls/4972082_ALT?wid=240&hei=240&op_sharpen=1",
  },
  {
    id:"1002",
  name: "Men's Tek Gear® Ultra Soft Fleece Hoodie",
  price: 17.59,
  img: "https://media.kohlsimg.com/is/image/kohls/4972228_Grey_Dark?wid=240&hei=240&op_sharpen=1",
  },
  {
    id:"1003",
  name: "Men's Tek Gear®  Hoodie[yellow]",
  price: 17.59,
  img: "https://media.kohlsimg.com/is/image/kohls/4952267_Gold_Glory?wid=300&hei=300&op_sharpen=1",
  },
  {
    id:"1004",
  name: "Men's Ultra Soft Fleece Hoodie",
  price: 21.59,
  img: "https://media.kohlsimg.com/is/image/kohls/4952267_ALT?wid=240&hei=240&op_sharpen=1",
  },
  {
    id:"1005",
  name: "Men's Ultra Soft Fleece Hoodie",
  price: 15.99,
  img: "https://media.kohlsimg.com/is/image/kohls/4972082_Rustic_Berry?wid=600&hei=600&op_sharpen=1",
  },
  
  ];
  let parent=document.getElementById("products");
  function showProducts(){
  data.forEach(function(product){
  console.log(product.name)
  console.log(product.price)
  
  let div=document.createElement("div");
  
  let img=document.createElement("img");
  
  img.src=product.img;
  
  let prod_price=document.createElement("p");
  prod_price.textContent=product.price;
  
  let prod_name=document.createElement("p");
  prod_name.textContent=product.name;
  
    let addtocart_btn=document.createElement("button");
    addtocart_btn.innerText="Add to Cart";
  
    addtocart_btn.onclick=function(){
        
        addtoCart(product)
        // console.log(product)
  
    }
  
  div.append(img,prod_name,prod_price,addtocart_btn);
  
  parent.append(div)
  });
  }
  showProducts();
  
  if(localStorage.getItem("cart")===null){
  localStorage.setItem("cart", JSON.stringify([]));
  }
  let sum=0;
  var counter=0;
  function addtoCart(p){
  let kohl_cart=JSON.parse(localStorage.getItem("cart"));
  kohl_cart.push(p);
  localStorage.setItem("cart",JSON.stringify(kohl_cart)); 
  // console.log(kohl_cart) 
  alert("Product Added into Cart")
  
    // kohl_cart.forEach(function(product){
    //     // console.log(typeof product.price)
    //     sum=sum+Number(product.price)
    //     counter++;
    // });
    // console.log((Math.floor(sum)))
    // let par=document.getElementById("products");
    // let sum1=document.createElement("p");
    // // sum1.textContent=sum;
    // par.append(sum1)
  }
  
  