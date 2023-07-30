"use  strict";

// login form

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Check if username and password are valid
    if (username === "admin" && password === "password") {
      // Successful login
      alert("Login Successful");
    } else {
      // Invalid login
      alert("Invalid username or password");
    }
  });

// Registration form

document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("regUsername").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("regConfirmPassword").value;
    const errorMsg = document.querySelectorAll("#errorMsg");
    console.log(errorMsg);
    const userError = document.querySelector('#usernameError').value;
    const emailError = document.getElementById('emailError').value;
    console.log(userError, emailError);

    // first check 
    if (username && email <= 3){
      Array.from(errorMsg).forEach(function (error){
        showdis = error.innerHTML = ' <h5> input cannot be less than 3 </h5> '
        console.log(showdis);
      })
    }else {
      console.log('nothing')
    }

    // Check if all fields are filled
    if (username && email && password && confirmPassword) {
      // Check if passwords match
      if (password === confirmPassword) {
        // Successful registration
        alert("Registration Successful");
        // Reset the form
        document.getElementById('registrationForm').reset();
      } else if(password && confirmPassword !== true ){
        // when password is empty 
        Array.from(errorMsg).forEach(function (error){
          showdis = error.textContent = 'This field cannot be empty'
          console.log(showdis);
        })

      } else {
        // Passwords don't match
        Array.from(errorMsg).forEach(function (error){
          showdis = error.textContent = 'passwords do not match'
          console.log(showdis);
        })
      }
    } else if(username && email ) {
      // Missing fields
      alert("Please fill in all fields");
      Array.from(errorMsg).forEach(function (error){
        showdis = error.innerHTML = ' <h5> input the fields </h5> '
        console.log(showdis);
      })
     
    }

  });
