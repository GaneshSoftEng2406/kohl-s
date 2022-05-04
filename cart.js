var sum = 0;
    let parent = document.getElementById("lists");
    let product_des = document.getElementById("product_des");

    let cart = JSON.parse(localStorage.getItem("cart"));

    function showProducts() {
      cart.forEach(function (product) {
        cart.innerHTML = null;
        let item_div = document.createElement("div");

        let img = document.createElement("img");
        img.src = product.img;
        let product_price = document.createElement("p");
        product_price.textContent = "$" + product.price;

        let product_name = document.createElement("p");
        product_name.textContent = product.name;

        //console.log(product.name)

        let removetocart_btn = document.createElement("button");
        removetocart_btn.innerHTML = "Save for later";
        // removetocart_btn.style.margin = "20px 6px";

        removetocart_btn.addEventListener("click", removeItem);

        function removeItem() {
          parent.style.display = none;
        }

        item_div.append(img, product_price, removetocart_btn);
        let prod_des_para = document.createElement("p");
        let Expected_devivery = document.createElement("p");
        Expected_devivery.innerText = "Expected devivery";

        let devivery = document.createElement("P");
        devivery.innerText = " Wed Oct 6 - Fri Oct 15";
        let product_des = document.createElement("div");
        prod_des_para.textContent = product.name;

        let devivery_details = document.createElement("div");
        devivery_details.append(Expected_devivery, devivery);

        product_des.append(prod_des_para, devivery_details);

        parent.append(item_div, product_des);

        //  prod_des_para.append(product_name);
        //  product_des.append(prod_des_para);

        sum = sum + Number(product.price);
      });
      // console.log(sum);
      // console.log(cart.length);

      //  if(coupn.value == "WELCOMETOKOLI50"){
      //         total_amount = total_amount * (50 / 100);
      //  }

      let total_items = cart.length;
      let total_amount = sum + 10 + 8;
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
      let coupn;
      // let total = document.createElement("p")
      // l2.textContent = sum;
      d1.textContent = total_items;
      d2.textContent = "$10";
      d3.textContent = "$8";
      d4.textContent = "$" + total_amount;
      checkout_valu.textContent = " " + "$" + total_amount;
      checkout_valu.style.color = "#FFF176";
      //     coupn.value = null;

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

      function removetoCart(product) {
        alert("remove");
      }

      //  check & apply promocode

      // list.append(l1,l2,l3,coupn,line,l5);
      // parent.append("list");
    }
    function checkcode() {
      // alert("check code")
      let code = document.getElementById("promocode").value;
      if (code == "WEL60") {
        alert("Coupon Applied sucessfully");
        let cart = JSON.parse(localStorage.getItem("cart"));
        sum = 0;
        cart.forEach(function (product) {
          sum = sum + Number(product.price);
        });
        var mainsum = (sum * (60 / 100)).toFixed(2);
        dis = (sum - mainsum).toFixed(2);
        // console.log(mainsum)
        // console.log(dis)                     //pay after discount <--- this is after discount price

        let promo_btn = document.getElementById("promo_btn");
            promo_btn.innerText = "Applied";

        let checkout_valu = document.getElementById("checkout_valu");
        checkout_valu.textContent = " " + "$" + mainsum;

        d4.textContent = mainsum;

        let discount = document.getElementById("discount");
        discount.textContent = " " + "$" + dis;
        discount.style.color = "#00796B"

        let your_saving = document.getElementById("your_saving");
        your_saving.style.color = "#00796B"


      } else if (code == "") {
        alert("You have'nt apply any code");
      } else {
        alert("Invalid Coupon code Please Check Carefully");
      }
    }

    showProducts();