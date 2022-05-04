
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

    let data = [
    {
        id:101,
      name: "Men's Ultra Soft Fleece Hoodie",
      price: 17.59,
      producttype:"hoodies",
      type:"mens",
      img: "https://media.kohlsimg.com/is/image/kohls/4950860_Black?wid=600&hei=600&op_sharpen=1",
    },
    {
        id:102,
      name: "Men's Tek Gear® Ultra Soft Fleece Hoodie",
      price: 18.59,
      producttype:"hoodies",
      type:"mens",
      img: "https://media.kohlsimg.com/is/image/kohls/4243232_Game_Royal?wid=240&hei=240&op_sharpen=1",
    },
    {
        id:103, 
      name: "Men's Tek Gear®  Hoodie[yellow]",
      price: 14.59,
      producttype:"hoodies",
      type:"mens",
      img: "https://media.kohlsimg.com/is/image/kohls/4950959_Green_Gables?wid=240&hei=240&op_sharpen=1",
    },
    {
        id:104,
      name: "Men's Ultra Soft Fleece Hoodie",
      price: 21.59,
      producttype:"hoodies",
      type:"mens",
      img: "https://media.kohlsimg.com/is/image/kohls/4993370_Navy_Teal_Fairisle?wid=240&hei=240&op_sharpen=1",
    },
    {
      id:123,
    name: "Junior(Boys) Thermal Tshirt ",
    price: 11.99,
    producttype:"Boys",
    type:"Junior",
    img:"https://media.kohlsimg.com/is/image/kohls/5215710_Spiked_Dino_Blue?wid=240&hei=240&op_sharpen=1"
  },
  {
      id:124,
    name: "Junior(boy) cotton Tshirt (Dark Gray)", 
    price: 8.80,
    producttype:"Boys",
    type:"Junior",
    img:"https://media.kohlsimg.com/is/image/kohls/4980517_Murky_Gray?wid=240&hei=240&op_sharpen=1"
  },
  {
      id:125,
    name: "Junior(Girl) snug fit cotton Tshirt ",
    price: 15.80,
    producttype:"girls",
    type:"Junior",
    img:"https://media.kohlsimg.com/is/image/kohls/5015752_Light_Blue_Mountain?wid=240&hei=240&op_sharpen=1"
  },
  {
      id:126,
    name: "Junior(Girl) snug fit cotton shirt ",
    price: 21.80,
    producttype:"Boys",
    type:"Junior",
    img:"https://media.kohlsimg.com/is/image/kohls/5037359_Red_Black_Buffalo?wid=240&hei=240&op_sharpen=1"
  },




    {
        id:105,
      name: "Men's Ultra Soft Fleece Hoodie",
      price: 15.99,
      producttype:"hoodies",
      type:"mens",
      img: "https://media.kohlsimg.com/is/image/kohls/3874879?wid=240&hei=240&op_sharpen=1",
    },

// womens
    {
        id:106,
      name: "Women's Sonoma Goods For Essentials",
      price: 7.99,
      producttype:"women",
      type:"women",
      img: "https://media.kohlsimg.com/is/image/kohls/5222601_Pink_Heather?wid=240&hei=240&op_sharpen=1",
    },
    {
        id:107,
      name: "Women's NineWest Essential soft",
      price: 8.99,
      producttype:"women",
      type:"women",
      img: "https://media.kohlsimg.com/is/image/kohls/4942292_ALT?wid=240&hei=240&op_sharpen=1",
    },
    {
        id:108,
      name: "Junior SO Favorite Long laggings",
      price: 5.99,
      producttype:"women",
      type:"women",
      img: "https://media.kohlsimg.com/is/image/kohls/5481690_Ventana_Khaki?wid=240&hei=240&op_sharpen=1",
    },
    {
        id:109,
      name: "Women'sCroft and Borrow",
      price: 8.99,
      producttype:"women",
      type:"women",
      img: "https://media.kohlsimg.com/is/image/kohls/5145653_Neutral_Fairisle?wid=240&hei=240&op_sharpen=1",
    },
    {
        id:110,
      name: "Junior's SO Long Sleeve shirt",
      price: 15.99,
      producttype:"women",
      type:"women",
      img: "https://media.kohlsimg.com/is/image/kohls/2889261_Natural?wid=240&hei=240&op_sharpen=1",
    },
    {
      id:109,
    name: "Women'sCroft and Borrow",
    price: 8.99,
    producttype:"women",
    type:"women",
    img: "https://media.kohlsimg.com/is/image/kohls/3657989_White_Black?wid=240&hei=240&op_sharpen=1",
  },
  {
    id:109,
  name: "Women'sCroft and Borrow",
  price: 8.99,
  producttype:"women",
  type:"women",
  img: "https://media.kohlsimg.com/is/image/kohls/5161118_ALT?wid=240&hei=240&op_sharpen=1",
},

    {
        id:111,
      name: "Skechers Delcon 3.0 shoes",
      price: 69.99,
      producttype:"shoes",
      type:"men",
      img: "https://media.kohlsimg.com/is/image/kohls/3856276_Cognac?wid=240&hei=240&op_sharpen=1",
    },
    {
        id:112,
      name: "Skechers Delcon 2.1 shoes",
      price: 79.99,
      producttype:"shoes",
      type:"men",
      img: "https://media.kohlsimg.com/is/image/kohls/2729785_ALT?wid=240&hei=240&op_sharpen=1",
    },
    {
        id:113,
      name: "Skechers Delcon 4.2 shoes",
      price: 49.99,
      producttype:"shoes",
      type:"men",
      img: "https://media.kohlsimg.com/is/image/kohls/4222228_ALT?wid=240&hei=240&op_sharpen=1",
      
    },
    {
        id:114,
      name: "Skechers Delcon shoes (white)",
      price: 55.99,
      producttype:"shoes",
      type:"men",
      img: "https://media.kohlsimg.com/is/image/kohls/4321364_White_Silver?wid=240&hei=240&op_sharpen=1",
    },
    {
        id:115,
      name: "Skechers Delcon shoes(black)",
      price: 45.99,
      producttype:"shoes",
      type:"men",
      img: "https://media.kohlsimg.com/is/image/kohls/4468523_Black_White?wid=240&hei=240&op_sharpen=1",
    },


    {
        id:116,
      name: "Skechers Delcon shoes (black)",
      price: 46.99,
      producttype:"shoes",
      type:"men",
      img: "https://media.kohlsimg.com/is/image/kohls/4553498_Gray?wid=240&hei=240&op_sharpen=1",
   
    },

    {
        id:117,
      name: "reebok casual shoes (White Color)",
      price: 46.99,
      producttype:"shoes",
      type:"All",
      img:"https://media.kohlsimg.com/is/image/kohls/436526_ALT?wid=240&hei=240&op_sharpen=1"
    },
    
    {
      id:118,
      name: "adidas Marshal shoes(White Color)",
      price: 99.99,
      producttype:"shoes",
      type:"All",
      img:"https://media.kohlsimg.com/is/image/kohls/859106_Optic_White?wid=240&hei=240&op_sharpen=1"
    },
    {
        id:119,
      name: "adidas grant court shoes",
      price: 48.99,
      producttype:"shoes",
      type:"All",
      img:"https://media.kohlsimg.com/is/image/kohls/3509951_White_Black?wid=240&hei=240&op_sharpen=1"
    },
    {
        id:130,
      name: "Nike AD comfort sport shoes",
      price: 46.99,
      producttype:"shoes",
      type:"All",
      img:"https://media.kohlsimg.com/is/image/kohls/4990192_ALT?wid=240&hei=240&op_sharpen=1"
    },
    {
        id:121,
      name: "crocs literide peasers sneakers",
      price: 46.99,
      producttype:"shoes",
      type:"All",
      img:"https://media.kohlsimg.com/is/image/kohls/3436547_Navy_White?wid=240&hei=240&op_sharpen=1"
    },
    {
        id:122,
      name: "Junior(Girl) snug fit sandel",
      price: 30.80,
      producttype:"girls",
      type:"Junior",
      img:"https://media.kohlsimg.com/is/image/kohls/4303417_ALT?wid=240&hei=240&op_sharpen=1"
    },
 

  
    
    {
        id:127,
      name: "Fitbit Versa 2 Smartwatch",
      price: 179.99,
      producttype:"Electronics",
      type:"Electronics",
      img:"https://media.kohlsimg.com/is/image/kohls/5243682_ALT?wid=240&hei=240&op_sharpen=1"
    },

    {
        id:128,
      name: "Apple AirPods Pro with Wireless Case ",
      price: 249.99,
      producttype:"Electronics",
      type:"Electronics",
      img:"https://media.kohlsimg.com/is/image/kohls/4493990_Black?wid=240&hei=240&op_sharpen=1"
    },

    {
        id:129,
      name: "Amazon Fire 7 16 GB Tablet with 7-in. Display",
      price: 249.99,
      producttype:"Electronics",
      type:"Electronics",
      img:"https://media.kohlsimg.com/is/image/kohls/4508511_Blue?wid=125&hei=125&op_sharpen=1"
    },

    {
        id:130,
      name: "Ring Video Doorbell 3 New Edition",
      price: 179.99,
      producttype:"Electronics",
      type:"Electronics",
      img:"https://media.kohlsimg.com/is/image/kohls/4471170_Purple?wid=240&hei=240&op_sharpen=1"
    },

    {
        id:131,
      name: "iTouch Sport 3 Fitness Smart Watch",
      price: 79.99,
      producttype:"Electronics",
      type:"Electronics",
      img:"https://media.kohlsimg.com/is/image/kohls/2725349_Espresso?wid=240&hei=240&op_sharpen=1"
    },

    {
        id:132,
      name: "Amazon (4th Gen) Alexa",
      price: 49.99,
      producttype:"Electronics",
      type:"Electronics",
      img:"https://media.kohlsimg.com/is/image/kohls/4605524?wid=240&hei=240&op_sharpen=1"
    },

    {
        id:133,
      name: "Ring Indoor Camera Latest Edition",
      price: 59.99,
      producttype:"Electronics",
      type:"Electronics",
      img:"https://media.kohlsimg.com/is/image/kohls/2487667_White?wid=240&hei=240&op_sharpen=1"
    },

    {
        id:134,
      name: "Amazon Fire  Tablet with Kid-Proof Case - 32 GB",
      price: 210.99,
      producttype:"Electronics",
      type:"Electronics",
      img:"https://media.kohlsimg.com/is/image/kohls/5217474_Blue?wid=240&hei=240&op_sharpen=1"
    },

    
    // homedecor
    {
        id:135,
      name: "Regular white Pillow(Neck Pain relief)",
      price: 13.05,
      producttype:"home",
      type:"home",
      img:"https://media.kohlsimg.com/is/image/kohls/2650685_White?wid=240&hei=240&op_sharpen=1"
    },
    {
        id:136,
      name: "INK +IVY camilasham pillow",
      price: 21.80,
      producttype:"home",
      type:"home",
      img:"https://media.kohlsimg.com/is/image/kohls/2149306_Gray?wid=240&hei=240&op_sharpen=1"
    },
    {
        id:137,
      name: "Nue Novaform plush comfort pillow ",
      price: 15.99,
      producttype:"home",
      type:"home",
      img:"https://media.kohlsimg.com/is/image/kohls/4950385?wid=240&hei=240&op_sharpen=1"
    },
    {
        id:138,
      name: "form Travel Neak pillow(pain relief) ",
      price: 6.69,
      producttype:"home",
      type:"home",
      img:"https://media.kohlsimg.com/is/image/kohls/4473842_ALT?wid=240&hei=240&op_sharpen=1"
    },
    {
        id:139,
      name: "comfort revoluation neck pillow",
      price: 12.19,
      producttype:"home",
      type:"home",
      img:"https://media.kohlsimg.com/is/image/kohls/4807247_ALT?wid=240&hei=240&op_sharpen=1"
    },

    //bed & Bath
    {
        id:140,
      name: "Somona chair(Back pain relief) ",
      price: 12.19,
      producttype:"bed",
      type:"bed",
      img:"https://media.kohlsimg.com/is/image/kohls/1280534_Brown_Faux_Leather?wid=240&hei=240&op_sharpen=1"
    },
    {
        id:141,
      name: "foam matrice",
      price:800.19,
      producttype:"bed",
      type:"bed",
      img:"https://media.kohlsimg.com/is/image/kohls/4936838?wid=240&hei=240&op_sharpen=1"
    },
    {
        id:142,
      name: "Queen Air Matrice",
      price: 167.79,
      producttype:"bed",
      type:"bed",
      img:"https://media.kohlsimg.com/is/image/kohls/4807247_ALT?wid=240&hei=240&op_sharpen=1"
    },
    {
        id:143,
      name: "Arm Accent chair",
      price: 309.99,
      producttype:"bed",
      type:"bed",
      img:"https://media.kohlsimg.com/is/image/kohls/3266517_Suri_Blue?wid=240&hei=240&op_sharpen=1"
    },
    {
        id:144,
      name: "Glider patio chair",
      price: 419.99,
      producttype:"bed",
      type:"bed",
      img:"https://media.kohlsimg.com/is/image/kohls/4599993_ALT?wid=240&hei=240&op_sharpen=1"
    },
    {
        id:145,
      name: "Adjustable  bed matriccess",
      price: 1899.99,
      producttype:"bed",
      type:"bed",
      img:"https://media.kohlsimg.com/is/image/kohls/4230103?wid=240&hei=240&op_sharpen=1"
    },
    {
        id:146,
      name: "Classic Anti dust coated-bed Drawer",
      price: 376.19,
      producttype:"bed",
      type:"bed",
      img:"https://media.kohlsimg.com/is/image/kohls/3705602?wid=240&hei=240&op_sharpen=1"
    },




    {
        id:147,
      name: "NARS Light Reflecting Advanced Skincare Foundation",
      price: 12.10,
      producttype:"beauty",
      type:"beauty",
      img:"https://media.kohlsimg.com/is/image/kohls/5499841_Moorea?wid=240&hei=240&op_sharpen=1"
    },
    {
      id:147,
    name: "Olaplex No. 4 Bond Maintenance Shampoo",
    price: 12.10,
    producttype:"beauty",
    type:"beauty",
    img:"https://media.kohlsimg.com/is/image/kohls/5050005?wid=240&hei=240&op_sharpen=1"
  },
  {
    id:147,
  name: "Charlotte Tilbury Hollywood Flawless Filter",
  price: 12.10,
  producttype:"beauty",
  type:"beauty",
  img:"https://media.kohlsimg.com/is/image/kohls/5061195_7_Dark?wid=240&hei=240&op_sharpen=1"
},
{
  id:147,
name: "amika Start to Finish Blow Dryer Brush Set",
price:12.10,
producttype:"beauty",
type:"beauty",
img:"https://media.kohlsimg.com/is/image/kohls/5532710?wid=240&hei=240&op_sharpen=1"
},
    

    

    ];

    np=[
    {
        name:" product not available",
        price:0000,
        producttype:"none",
        type:"N/A",
        img:"https://www.indiaspora.org/wp-content/uploads/3018/10/image-not-available.jpg"
    }
    ]

    let parent=document.getElementById("products");
  function showProducts(data){
      console.log(data)
    parent.innerHTML="";
     data.forEach(function(product){
      console.log(product.name)
      console.log(product.price)

      let div=document.createElement("div");

      let img=document.createElement("img");

      img.src=product.img;

      let prod_price=document.createElement("p");
      prod_price.textContent= "Regular"+" "+"$"+product.price;

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
showProducts(data);

if(localStorage.getItem("cart")===null){
    localStorage.setItem("cart", JSON.stringify([]));
}
let sum=0;
var counter=0;
function addtoCart(p){
    console.log(p)
    let kohl_cart=JSON.parse(localStorage.getItem("cart"));
    kohl_cart.push(p);
    localStorage.setItem("cart",JSON.stringify(kohl_cart)); 
    // console.log(kohl_cart) 
    alert("Product Added into Cart")
    
        kohl_cart.forEach(function(product){
            // console.log(typeof product.price)
            sum=sum+Number(product.price)
            counter++;
        });
     
}
let mcounter=0;
function mens(){
    
    if(mcounter==0){
        mcounter++;
        console.log("mens")
    console.log(data.length)
    var arr=[];
    for(var i=0;i<data.length;i++){
        if(data[i].type=="mens"){
            arr.push(data[i])
        }
    }
    showProducts(arr)
    }else{
        
        showProducts(data)
        mcounter=0;
        
    }
    
}
mcounter=0;


let wcounter=0;
function womens(){
    
    if(wcounter==0){
        wcounter++;
        console.log("womens")
    console.log(data.length)
    var arr=[];
    for(var i=0;i<data.length;i++){
        if(data[i].type=="women"){
            arr.push(data[i])
        }
    }
    showProducts(arr)
    }else{
        
        showProducts(data)
        wcounter=0;
    }
}

//y

function Electronics(){
    let kcounter=0;
    if(kcounter==0){
        kcounter++;
        console.log("Electronics")
    console.log(data.length)
    var arr=[];
    for(var i=0;i<data.length;i++){
        if(data[i].type=="Electronics"){
            arr.push(data[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(data)
        kcounter=0;
        
    }

}

//y

wcounter=0;


let ucounter=0;
function All(){
       
    if(ucounter==0){
        ucounter++;
        console.log("All")
    console.log(data.length)
    var arr=[];
    for(var i=0;i<data.length;i++){
        if(data[i].type=="All"){
            arr.push(data[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(data)
        ucounter=0;
        
    }

}
ucounter=0;



function Junior(){
    let kcounter=0;
    if(kcounter==0){
        kcounter++;
        console.log("Junior")
    console.log(data.length)
    var arr=[];
    for(var i=0;i<data.length;i++){
        if(data[i].type=="Junior"){
            arr.push(data[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(data)
        kcounter=0;
        
    }

}
kcounter=0;


function shoes(){
    let scounter=0;
    if(scounter==0){
        scounter++;
        console.log("shoes")
    console.log(data.length)
    var arr=[];
    for(var i=0;i<data.length;i++){
        if(data[i].producttype=="shoes"){
            arr.push(data[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(data)
        scounter=0;
        
    }
    

}
scounter=0;
let hcounter=0;
function home(){
    
    if(hcounter==0){
        hcounter++;
        console.log("home")
    console.log(data.length)
    var arr=[];
    for(var i=0;i<data.length;i++){
        if(data[i].producttype=="home"){
            arr.push(data[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(data)
       hcounter=0;
        
    }

}

let bbcounter=0;
function beauty(){
    
    if(bbcounter==0){
        bbcounter++;
        console.log("beauty")
    console.log(data.length)
    var arr=[];
    for(var i=0;i<data.length;i++){
        if(data[i].producttype=="beauty"){
            arr.push(data[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(data)
       bbounter=0;
        
    }

}



let bcounter=0;
function bed(){
    
    if(bcounter==0){
        bcounter++;
        console.log("bed")
    console.log(data.length)
    var arr=[];
    for(var i=0;i<data.length;i++){
        if(data[i].producttype=="bed"){
            arr.push(data[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(data)
       bounter=0;
        
    }

}

let tscounter=0;
function tshirt(){
    
    if(tscounter==0){
        tscounter++;
        console.log("tshirt")
    console.log(np.length)
    var arr=[];
    for(var i=0;i<np.length;i++){
        if(np[i].producttype=="none"){
            arr.push(data[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(data)
       tsounter=0;
        
    }

}

function LtoH() {
    let arr=data.sort(function(a,b) {
        return a.price - b.price;
    });
    showProducts(arr);
     }

function HtoL() {
    let arr=data.sort(function(a,b){
           return b.price - a.price;
        });
        showProducts(arr);
         }

function relevent() {
        showProducts(data);
         }


let up=0;
function upto30(){
    
    if(up==0){
        up++;
        console.log("upto 30")
    console.log(data.length)
    var arr=[];
    for(var i=0;i<data.length;i++){
        if((data[i].price>=1) && (data[i].price<=30) ){
            arr.push(data[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(data)
       up=0;
        
    }

}

let up1=0;
function upto99(){
    
    if(up1==0){
        up1++;
        console.log("upto 99")
    console.log(data.length)
    var arr=[];
    for(var i=0;i<data.length;i++){
        if((data[i].price>=21) && (data[i].price<=100) ){
            arr.push(data[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(data)
       up1=0;
        
    }

}


let up2=0;
function above100(){
    
    if(up2==0){
        up2++;
        console.log("above 100")
    console.log(data.length)
    var arr=[];
    for(var i=0;i<data.length;i++){
        if((data[i].price>=100) ){
            arr.push(data[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(data)
       up1=0;
        
    }

}

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
