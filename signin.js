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

  function signin(e){
    e.preventDefault();
    let myForm = document.getElementById("myform");
    let email = myForm.email.value;
    let password = myForm.password.value;

    let all_users = JSON.parse(localStorage.getItem("users"))

    all_users.forEach(function (user) {
          if(email === user.email && password === user.password){
            alert("Sign In Succesful")
                window.location.href = "index.html"
                
          } else if (email !== user.email && password === user.password) {
                alert("Incorrect email!")
          } else if (email === user.email && password !== user.password) {
             alert("Incorrect password")
          } else {
            alert("Not yet register!")
          }
    })

    alert("Sign in completed")
  }