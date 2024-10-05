// xu li nhap du lieu cua sign up
const inputName = document.querySelector(".signup__name");
const inputEmail = document.querySelector(".signin__emailphone");
const inputPassword = document.querySelector(".signup__password");
const confirmPassword = document.querySelector(".confirm__password");
const btnSigUp = document.querySelector(".signin__btn");
const textNovalid = document.querySelectorAll(".text__novalid");
const signupLink = document.querySelector(".signup__link");
const api = "http://localhost:3000/user";
function ivalidName() {
    const name = inputName.value.trim();
    return name.length >= 3;
}

function invalidEmail() {
    const email = inputEmail.value.trim();
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    return validEmail.test(email) || regexPhoneNumber.test(email);
}

function invalidPassword() {
    const password = inputPassword.value.trim();
    return password.length >= 8;
}

function invalidConfirm() {
    const password = inputPassword.value.trim();
    const confirm = confirmPassword.value.trim();
    return confirm === password;
}

function validateForm() {
    return (
        ivalidName() && invalidEmail() && invalidPassword() && invalidConfirm()
    );
}

function create(data, api) {
    var option = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(api, option).then(function (response) {
        return response.json();
    });
}

function handerSigup(event) {
    if (validateForm()) {
        textNovalid.forEach((text) => {
            text.style.visibility = "";
        });
        //
        const name = inputName.value.trim();
        const email = inputEmail.value.trim();
        const password = inputPassword.value.trim();
        var formData = {
            username: name,
            email: email,
            password: password,
        };
        create(formData, api);
    } else {
        textNovalid.forEach((text) => {
            text.style.visibility = "visible";
        });
        registerError();
        event.preventDefault();
    }
}

function registerError() {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, 5000 + 1000);

        toast.addEventListener("click", (e) => {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        });

        toast.classList.add("toast", `toast--error`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s 5s forwards`;

        toast.innerHTML = `
                        <div class="toast__icon">
                            <i class="fas fa-exclamation-circle"></i>
                        </div>
                        <div class="toast__body">
                            <h3 class="toast__title">Thất bại!</h3>
                            <p class="toast__msg">Bạn đã đăng kí thất bại</p>
                        </div>
                        <div class="toast__close">
                            <i class="fas fa-times"></i>
                        </div>
                    `;
        main.appendChild(toast);
    }
}
btnSigUp.addEventListener("click", handerSigup);

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

//
