"use strict";

const body = document.body;
const div = document.createElement("div");
const div2 = document.createElement("div");
const text1 = document.createElement("p");
const text2 = document.createElement("p");
const usernameInput = document.createElement("input");
const emailInput = document.createElement("input");
const button = document.createElement("button");

// form content styles

usernameInput.placeholder = "enter username";
emailInput.placeholder = "enter email";
usernameInput.style.cssText = `background-color: blue; border: none; padding: .5rem; font-size: 1rem; margin-left: 1rem; `;
emailInput.style.cssText = `background-color: blue; border: none; padding: .5rem; font-size: 1rem; margin-left: 1rem; margin-top: 1rem `;
button.innerText = "submit";
div2.style.cssText = `width: 100%; height: 80vh; background-color: darkorange; `;
div.style.cssText = `width: 50%; height: 80vh; margin: 0 auto; background-color: orange; display: flex; justify-content: center; align-items: center; flex-direction: column`;

text1.innerText = "User Name :";
text2.innerText = "Email :";

// appending elements
const userValue = usernameInput.textContent = {};
const emailValue = emailInput.textContent = {};

console.log(userValue);
console.log(emailValue);

body.append(div2);
div2.append(div);
div.append(text1, usernameInput, text2, emailInput, button);
console.log(div2.innerHTML);
// text1.append(usernameInput);
// text2.append(emailInput);
// console.log(div.textContent);
// console.log(text1.innerHTML);
// div.append(text1, text2);

// form content function

const submit = button.addEventListener("click", function (e) {
  e.preventDefault;
  if (usernameInput.length && emailInput.length < 4) {
      alert("declined");
    } else {
        alert("success");
        console.log(div);
  }
});



// somethings else here 

// this prints even numbers 

for(let i = 2 ;i < 10; i += 2){
    const  even = `even numbers : ${i}`
    // console.log(even);
}

// this prints odd numbers 

for(let i = 1 ;i < 10; i += 2){
    const odd = `odd numbers : ${i}`
    // console.log(odd);

}

// prime numbers 

