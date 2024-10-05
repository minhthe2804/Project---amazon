// xu li hien password
const iconEyes = document.querySelectorAll(".fa-eye");
const lineEyes = document.querySelectorAll(".line__eye");

function showPassword(index) {
    if (inputPassword.type === "password") {
        inputPassword.type = "text";
        lineEyes[index].classList.add("active");
    } else {
        inputPassword.type = "password";
        lineEyes[index].classList.remove("active");
    }
}

function showConfirm(index) {
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        lineEyes[index].classList.add("active");
    } else {
        confirmPassword.type = "password";
        lineEyes[index].classList.remove("active");
    }
}

iconEyes.forEach((icon, index) => {
    if (index % 2 === 0) {
        icon.addEventListener("click", () => {
            showPassword(index);
        });
    } else {
        icon.addEventListener("click", () => {
            showConfirm(index);
        });
    }
});

// Xu li khi nguoi dung dang nhap
const api = "http://localhost:3000/user";
const inputEmail = document.querySelector(".signin__emailphone");
const btnSigUp = document.querySelector(".signin__btn");
const inputPassword = document.querySelector(".signup__password");

function login(api, email, password) {
    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let foundUser = false;
            for (let i = 0; i < data.length; i++) {
                if (data[i].email === email && data[i].password === password) {
                    localStorage.setItem(
                        "currentUser",
                        JSON.stringify(data[i])
                    );
                    window.location.href = "./index.html";
                    foundUser = true;
                    break;
                }
            }
            if (!foundUser) {
                alert("Invalid email or password");
            }
        })
        .catch(function (error) {
            console.error("Error:", error);
            alert(
                "An error occurred while logging in. Please try again later."
            );
        });
}
btnSigUp.addEventListener("click", function (event) {
    login(api, inputEmail.value, inputPassword.value);
});

//
