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

  let data = [{
      name: "Kohl's Cares The Rainbow Fish by Marcus Pfister Children's Book",
      price: "100",
      img: "https://media.kohlsimg.com/is/image/kohls/5060078?wid=240&hei=240&op_sharpen=1",
  }, {
      name: "Kohl's Cares Biscuit by Alyssa Satin Capucilli Children's Book",
      price: "220",
      img: "https://media.kohlsimg.com/is/image/kohls/5060145?wid=240&hei=240&op_sharpen=1",
      para:"SEPHORA COLLECTION Best Skin Ever Liquid Foundation",
  }, {
      name: "Kohl's Cares® Ready-To-Read Angelina Ballerina Children's Book Collection",
      price: "340",
      img: "https://media.kohlsimg.com/is/image/kohls/5060085?wid=240&hei=240&op_sharpen=1",
      para:"SEPHORA COLLECTION Best Skin Ever Liquid Foundation",
  }, {
      name: "Kohl's Cares® Ready-To-Read Angelina Ballerina Children's Book Collection",
      price: "324",
      img: "https://media.kohlsimg.com/is/image/kohls/4585091?wid=240&hei=240&op_sharpen=1",
      para:"SEPHORA COLLECTION Best Skin Ever Liquid Foundation",
  }, {
      name: "Kohl's Cares Little Critter All By Myself by Mercer Mayer Children's Book",
      price: "250",
      img: "https://media.kohlsimg.com/is/image/kohls/5060138?wid=240&hei=240&op_sharpen=1",
      para:"SEPHORA COLLECTION Best Skin Ever Liquid Foundation",
  }, {
      name: "Kohl's Cares® Wheels on the Bus Children's Book Mercer Mayer Children's Book",
      price: "600",
      img: "https://media.kohlsimg.com/is/image/kohls/3882564?wid=240&hei=240&op_sharpen=1",
      para:"SEPHORA COLLECTION Best Skin Ever Liquid Foundation",
  }, 
  {
      name: "Kohl's Cares The Rainbow Fish by Marcus Pfister Children's Book",
      price: "300",
      img: "https://media.kohlsimg.com/is/image/kohls/5060078?wid=240&hei=240&op_sharpen=1",
  }, {
      name: "Kohl's Cares Biscuit by Alyssa Satin Capucilli Children's Book",
      price: "160",
      img: "https://media.kohlsimg.com/is/image/kohls/5060145?wid=240&hei=240&op_sharpen=1",
      para:"SEPHORA COLLECTION Best Skin Ever Liquid Foundation",
  }, {
      name: "Kohl's Cares® Ready-To-Read Angelina Ballerina Children's Book Collection",
      price: "199",
      img: "https://media.kohlsimg.com/is/image/kohls/5060085?wid=240&hei=240&op_sharpen=1",
      para:"SEPHORA COLLECTION Best Skin Ever Liquid Foundation",
  }, {
      name: "Kohl's Cares® Ready-To-Read Angelina Ballerina Children's Book Collection",
      price: "180",
      img: "https://media.kohlsimg.com/is/image/kohls/4585091?wid=240&hei=240&op_sharpen=1",
      para:"SEPHORA COLLECTION Best Skin Ever Liquid Foundation",
  }, {
      name: "Kohl's Cares Little Critter All By Myself by Mercer Mayer Children's Book",
      price: "520",
      img: "https://media.kohlsimg.com/is/image/kohls/5060138?wid=240&hei=240&op_sharpen=1",
      para:"SEPHORA COLLECTION Best Skin Ever Liquid Foundation",
  }, {
      name: "Kohl's Cares® Wheels on the Bus Children's Book Mercer Mayer Children's Book",
      price: "260.",
      img: "https://media.kohlsimg.com/is/image/kohls/3882564?wid=240&hei=240&op_sharpen=1",
      para:"SEPHORA COLLECTION Best Skin Ever Liquid Foundation",
  }, ];


  let parent = document.getElementById('products');

  function showproduct(product) {
      parent.innerHTML = null;
      data.forEach(function(product) {

          let div = document.createElement("div");

          let img = document.createElement("img");
          img.src = product.img;

          let product_price = document.createElement("p");
          product_price.textContent = product.price;

          let product_name = document.createElement("p");

          product_name.textContent = product.name;

          let addtocart_btn = document.createElement("button");
          addtocart_btn.innerText = "Add to Cart";

          addtocart_btn.onclick = function() {
              addtocart(product);
          };

          div.append(img, product_name, product_price, addtocart_btn);
          parent.append(div);
      });
  }
  showproduct();

  if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([]));
  }

  function addtocart(p) {
      let products_cart = JSON.parse(localStorage.getItem("cart"));

      products_cart.push(p);

      localStorage.setItem("cart", JSON.stringify(products_cart));

      console.log("product_cart:", products_cart);
  }


  function sortLH() {

let arr = data.sort(function(a, b) {
  return a.price - b.price;
})
showproduct(arr);
}

  function sortHL() {
      let arr = data.sort(function(a, b) {
          return b.price - a.price;
      })
      showproduct(arr);
  }

  // sidebar script

  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
});
}

//back to top button js code

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}