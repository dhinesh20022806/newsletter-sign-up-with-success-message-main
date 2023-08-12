const form = document.querySelector(".form");
const email = document.querySelector("input[type=email]");
const pattern = /^[a-zA-Z0-9]*@gmail\.com$/;
const error = document.querySelector(".error");
const emailMessage = document.querySelector("span");
const signup = document.querySelector("#sign-up");
const popup = document.querySelector("#pop-up");
const dismiss = document.querySelector(".pop-up button");

function valudiation(result) {
    if (result) {
      error.textContent = "";
      signup.classList.add("hidden");
      popup.classList.remove("hidden");
      emailMessage.textContent = form.email1.value;
      form.email1.value = "";
      email.setAttribute("id", "");
    } else {
      error.textContent = "valid email required";
      email.setAttribute("id", "errorbox");
    }
    
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  valudiation(pattern.test(form.email1.value));
  
});

console.log(signup.classList);

dismiss.addEventListener("click", () => {
  signup.classList.remove("hidden");
  popup.classList.add("hidden");
});

form.email1.addEventListener("keyup", (e) => {
  if (pattern.test(e.target.value)){
      error.textContent = " ";
      email.setAttribute("id", "");
      
}
else{
      error.textContent = "valid email required";
      email.setAttribute("id", "errorbox");

  }
});

// window resize image
var img = document.getElementById("image");
window.addEventListener("resize", function () {
  if (window.innerWidth <= 500) {
    img.setAttribute("src", "./assets/images/illustration-sign-up-mobile.svg");
  } else {
    img.setAttribute("src", "./assets/images/illustration-sign-up-desktop.svg");
  }
});
