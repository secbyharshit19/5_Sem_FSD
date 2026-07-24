const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const rollNo = document.getElementById("rollno").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(username);
    console.log(rollNo);
    console.log(email);
    console.log(password);
    alert("🎉 Registration Successful!");

    form.reset();
});