// Declaring Variables
var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");
var regBtn = document.getElementById("register");
var signinBtn = document.getElementById("signin");

// A Function on the Resgister button
regBtn && regBtn.addEventListener('click', function(){

    console.log(userName.value, userEmail.value, userPassword.value);

    var users = [];
    var userObj = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value
    }
 console.log(userObj);

//  Gets the Array of Objects if it has a value, if not, then it gets the empty Array back
 users = JSON.parse(localStorage.getItem('users')) || [];
// Pushing the user's data in the "userObj" object
 users.push(userObj);
//  Saving the user's data in the Local Storage 
 localStorage.setItem('users', JSON.stringify(users));
// Resetting the form for another user to enter their data
 document.getElementById("signupForm").reset();
 
//  alert('User signed up successfully!');
Swal.fire({
    position: "center",
    icon: "success",
    title: "Sign up successful!",
    showConfirmButton: false,
    timer: 1500
  });
 console.log(users);
 window.location.href = "../Pages/sign-in.html";
})

signinBtn.addEventListener('click', function(e){
    // e.preventDefault();

    var signinEmail = userEmail;
    var signinPassword = userPassword;

    var storedData = JSON.parse(localStorage.getItem('users'));

    if (storedData && storedData.email === signinEmail && storedData.password === signinPassword) {
        alert('Login successful');
        displayUserInfo(storedData); 
        window.location.href = '../Pages/dashboard.html'; // Redirect to dashboard page
    }
    else {
        alert('Invalid credentials, please try again');
    }
});

function displayUserInfo(user) {
    const userInfoDiv = document.getElementById('userInfo');
    if (userInfoDiv) {
        userInfoDiv.innerHTML = `
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
        `;
    }
}

// Logout functionality
document.getElementById('logout')?.addEventListener('click', function() {
    localStorage.removeItem('user'); // Clear user data
    window.location.href = 'index.html'; // Redirect to sign up page
});






