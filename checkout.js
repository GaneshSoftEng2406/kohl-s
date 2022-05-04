let parent = document.getElementById("lists");

    let credit_card = document.getElementById("credi_card");
    let card_details = document.getElementById("card_details")

    let kohlcard = document.getElementById("kohlcard");
    let Kohls_card = document.getElementById("Kohls_card")


    let congratulation = document.getElementById("congratulation");
    let address = document.getElementById("address");
    let container = document.getElementById("container")

    let payment_done = document.getElementById("payment_done");
    let order_cancel = document.getElementById("order_cancel");
              

 
    let cart = JSON.parse(localStorage.getItem("cart"));

    var sum = 0;
    function showProducts(){
    cart.forEach(function (product){
        cart.innerHTML= null;
        let item_div = document.createElement("div");
        let prod_des_para = document.createElement("p")
        var product_des = document.createElement("div")
        let img = document.createElement("img")
        img.src = product.img;
        let product_price = document.createElement("p");
        product_price.textContent = product.price;

            

        let product_name = document.createElement("p");
        product_name.textContent = product.name;

        
        
        let addtocart_btn = document.createElement("button");
        addtocart_btn.innerHTML = "Add to cart";

        addtocart_btn.onclick = function (){
            addtoCart(product)
        };
            
        // item_div.append(img,product_price);

        // parent.append(item_div);

         prod_des_para.append(product_name);
         product_des.append(prod_des_para);
 
        

      
    
   
       sum = sum + Number(product.price);
     
    })
    // console.log(sum);
    // console.log(cart.length);

    //  if(coupn.value == "WELCOMETOKOLI50"){
    //         total_amount = total_amount * (50 / 100);
    //  }


        let sumamount=sum.toFixed(2)
    let total_items = cart.length;
    let total_amount = (((sum * (60/100))) + 10 + 8).toFixed(2); 
    
    // let final_value = total_amount;
    

    // let amount = document.getElementById("amount");
    // let list = document.getElementById("list")
        let d1 = document.getElementById("d1");
        let d2 = document.getElementById("d2");
        let d3 = document.getElementById("d3"); 
        // let coupn = document.createElement("input");
        // let line = document.createElement("hr")
        let d4 = document.getElementById("d4");
        let checkout_valu = document.getElementById("checkout_valu");
        let disc=document.getElementById("disc");
        let pay=document.getElementById("pay")

        // let total = document.createElement("p")
        // l2.textContent = sum;
        discountprice=(sum - total_amount).toFixed(2);
        d1.textContent = total_items;
        d2.textContent = "$10";
        d3.textContent = "$8"
        d4.textContent = "$"+ sumamount ;
        disc.textContent = "-"+"$"+ discountprice ;
        pay.textContent="$"+total_amount;
        checkout_valu.textContent = " " +"$"+ total_amount;
        checkout_valu.style.color = "#FFF176"
        // coupn.value = null;
       

    //     if(coupn.value == "WELCOMETOKOLI50"){
    //         final_value = total_amount * (50 / 100);
    //  }else{
    //      final_value = total_amount;
    //  }
    

    //  function checkCouponCopde(){
    //      if(coupn.value == "WELCOMETOKOLI50"){
    //          alert("Coupon Applied sucessfully")
    //      }else{
    //         alert("Invallied Coupon code")  
    //      }
    //  }

     function showtotal(){
         var sum=0;
    cart.forEach(function (product){
        cart.innerHTML= null;
       // console.log("product prices",product.price)
        sum = sum + Number(product.price);
        
    });
    console.log(sum.toFixed(2))

}
showtotal()

}

showProducts();






    
    // let card_number = document.getElementById("card_number").value

    // console.log(card_number.value)


    // function checkCardNumber(){
    //         if(card_number.value.length < 12){
    //             alert("Enter a valid card Number")
    //         }

            
    // }
      

    //  function addressDone(){
    //     let address_input = document.getElementsByClassName("address_input").value;
    //     if(address_input.length < 1){
    //         alert("You are not filling the form")
           
    //     }
    //       else{

    //      alert("Address added sucessusfully")
    //     }
    //  }

    function payMent(){
        credit_card.style.fontWeight= "900";
        credit_card.style.color= "red";
        // credit_card.textContent = card_details;
        card_details.style.display = "block";


    }
   

    function kohlPayment(){
    kohlcard.style.fontWeight= "900";
    kohlcard.style.color= "red";
 // credit_card.textContent = card_details;
    Kohls_card.style.display = "block";


}
     