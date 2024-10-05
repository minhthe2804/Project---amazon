// Xu li deail - img
const dealImgSmall = document.querySelectorAll(".img__info--smail");
const deailImgZoom = document.querySelector(".img__zoom");
const itemEarPhone = document.querySelectorAll(".earphone__item");
const optionColor = document.querySelectorAll(".option__form");
const textColor = document.querySelector(".info__color");
const prices = document.querySelector(".info__money");
const buy = document.querySelector(".buy");
const bangoColor = document.querySelector(".bango__color");
const listImgZoom = [
    {
        image: [
            "https://m.media-amazon.com/images/I/61eKXr+DYvL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71qMnRvuK4L._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71oOlrL05TL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71cOu1QqyuL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71WoH67C9iL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71SGh03UkuL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71lxYJIdpWL._AC_SL1000_.jpg",
        ],
    },
    {
        image: [
            "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SX425_.jpg",
            "https://m.media-amazon.com/images/I/71z2WmHMtZL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71UAwQgt-cL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71Ie8vokMuL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71rxKLsCxqL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71dybzbdO9L._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71sOPtDbN7L._AC_SL1000_.jpg",
        ],
    },
    {
        image: [
            "https://m.media-amazon.com/images/I/61mP9vPVqAL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/713PtV1LBbL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71TDA7nitYL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71IYlK62DtL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71nxhh2StaL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71lrROXPrLL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/714IljeDjiL._AC_SL1000_.jpg",
        ],
    },
    {
        image: [
            "https://m.media-amazon.com/images/I/616vlLLgL6L._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71TRFGTL6NL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71qMx5kpUeL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71T9EyvWIVL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71dV1DGl05L._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/7175J4V2raL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71i5JgHRlsL._AC_SL1000_.jpg",
        ],
    },
    {
        image: [
            "https://m.media-amazon.com/images/I/51nedLybRJL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71mgioeBO6L._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61nOlGi+izL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/715kmfjUOrL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71HJA9jprML._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71roS7z83sL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71aLSmQ28gL._AC_SL1000_.jpg",
        ],
    },
    {
        image: [
            "https://m.media-amazon.com/images/I/61OUmq3QsXL._AC_SL1301_.jpg",
            "https://m.media-amazon.com/images/I/71LWm-IhsoL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71dO2AWJ-hL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71bBjButwXL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71-z8VGGBxL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71zfCW8TeJL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/715HUN4ScAL._AC_SL1000_.jpg",
        ],
    },
    {
        image: [
            "https://m.media-amazon.com/images/I/61fE+nB3ZdS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71i-J0l9pjL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71uA3QaBCyL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71639P8uwTL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71VWOXLByGL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/7155ZqVa7jL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71dfX6NDOJL._AC_SL1000_.jpg",
        ],
    },
    {
        image: [
            "https://m.media-amazon.com/images/I/61R6Fk-HeIS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71PLocaQ+iL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71p-FA7m2tL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71h-ZiCg5gL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/718xt7XkWCL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/712jT3lpLfL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71TDrQprA5S._AC_SL1000_.jpg",
        ],
    },
];

const money = [
    {
        money: "$33.99",
        text: "Dark-Green",
        color: "#08493c",
    },
    {
        money: "$19.02",
        text: "Blue",
        color: "#288798",
    },
    {
        money: "$23.72",
        text: "Green",
        color: "#005602",
    },
    {
        money: "$25.06",
        text: "Orange",
        color: "#dc6425",
    },
    {
        money: "$35.99",
        text: "Pink",
        color: "#ebb6d5",
    },
    {
        money: "$34.99",
        text: "Purple",
        color: "#5b41a2",
    },
    {
        money: "$24.36",
        text: "Red",
        color: "#891016",
    },
    {
        money: "$31.33",
        text: "White",
        color: "#ccc",
    },
];
const listGreenZoom = [
    "https://m.media-amazon.com/images/I/61eKXr+DYvL._AC_SL1000_.jpg",
    "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SX425_.jpg",
    "https://m.media-amazon.com/images/I/61mP9vPVqAL._AC_SL1000_.jpg",
    "https://m.media-amazon.com/images/I/616vlLLgL6L._AC_SL1000_.jpg",
    "https://m.media-amazon.com/images/I/51nedLybRJL._AC_SL1000_.jpg",
    "https://m.media-amazon.com/images/I/61OUmq3QsXL._AC_SL1301_.jpg",
    "https://m.media-amazon.com/images/I/61fE+nB3ZdS._AC_SL1000_.jpg",
    "https://m.media-amazon.com/images/I/61R6Fk-HeIS._AC_SL1000_.jpg",
];
function clickImgSmall(number) {
    dealImgSmall.forEach((img, index) => {
        img.addEventListener("click", () => {
            document
                .querySelector(".img__info--smail.active")
                .classList.remove("active");
            deailImgZoom.src = listImgZoom[number].image[index];
            img.classList.add("active");
        });
    });
}

function genderImgSmall(index) {
    for (let i = 0; i < listImgZoom[index].image.length; i++) {
        dealImgSmall[i].src = listImgZoom[index].image[i];
    }
}

function genderImgZoom(index) {
    deailImgZoom.src = listGreenZoom[index];
}

function colorText(index) {
    textColor.innerHTML = ` <p class="info__color">
                                    Color: <span>${money[index].text}</span>
                        </p>`;
    const color = document.querySelector(".info__color span");
    color.style.color = `${money[index].color}`;
}

function price(index) {
    prices.innerText = money[index].money;
    buy.innerHTML = `<p class="buy"><b>Buy used:</b> ${money[index].money}</p>`;
    const euro = document.querySelector(".buy");
    euro.style.marginLeft = "0";
    bangoColor.innerText = money[index].text;
}
clickImgSmall(1);
itemEarPhone.forEach((item, index) => {
    item.addEventListener("click", () => {
        document
            .querySelector(".earphone__item.active")
            .classList.remove("active");
        document
            .querySelector(".option__form.active")
            .classList.remove("active");
        clickImgSmall(index);
        genderImgSmall(index);
        genderImgZoom(index);
        colorText(index);
        price(index);
        item.classList.add("active");
        optionColor[index].classList.add("active");
    });
});

// Xu li deail - img

// Xu li bestsell
const scrollBestSell = document.querySelectorAll(".bestsell__row");
const prevBestSell = document.querySelectorAll(".bestsell__btn--left");
const nextBestSell = document.querySelectorAll(".bestsell__btn--right");

// xu li su kien lan chuot
function slipBestSell() {
    for (const item of scrollBestSell) {
        item.addEventListener("wheel", (evt) => {
            // Ngăn chặn hành vi cuộn mặc định của trình duyệt
            evt.preventDefault();
            // Tính toán khoảng cách cuộn ngang dựa trên sự kiện lăn con chuột
            const scrollDistance = evt.deltaX !== 0 ? evt.deltaX : evt.deltaY;
            // Cập nhật thanh cuộn ngang của phần tử
            item.scrollLeft += scrollDistance * 8;
            item.style.webkitScrollLeft = `${item.scrollLeft}px`;
        });
    }
}

slipBestSell();
// Xu li nut next va prev cua san pham bestsell and bestbook

function scrollNextBest() {
    nextBestSell.forEach((button, index) => {
        button.addEventListener("click", () => {
            scrollBestSell[index].scrollLeft +=
                scrollBestSell[index].offsetWidth;
        });
    });
}

function scrollPrevBest() {
    prevBestSell.forEach((button, index) => {
        button.addEventListener("click", () => {
            scrollBestSell[index].scrollLeft +=
                -scrollBestSell[index].offsetWidth;
        });
    });
}

scrollNextBest();
scrollPrevBest();

//Xu li notify va them san pham
const addCart = document.querySelector(".add__cart");
const notifi = document.querySelector(".cart__notify");
const notifyNumber = document.querySelector(".notify__number");

let number = 0;
let i = 0;
addCart.addEventListener("click", () => {
    addProduct(notify);
});
const listProduct = []; // lấy dữ liệu từ localStorage hoặc khởi tạo mảng mới nếu chưa có

function addProduct(notify) {
    const itemActive = document.querySelector(".earphone__item.active");
    if (itemActive) {
        const infoProduct = {
            img: itemActive.children[0].getAttribute("href"),
            color: itemActive.children[0].getAttribute("color"),
            money: itemActive.children[1].innerText,
        };
        const valid = listProduct.some(
            (product) =>
                product.img === infoProduct.img &&
                product.color === infoProduct.color &&
                product.money === infoProduct.money
        );
        if (!valid) {
            listProduct.push(infoProduct); // Thêm sản phẩm mới vào mảng
            localStorage.setItem("List", JSON.stringify(listProduct));
            notify(valid);
            addSucces();
        } else {
        }
    }
}

function addSucces() {
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

        toast.classList.add("toast", `toast--success`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s 5s forwards`;

        toast.innerHTML = `
                        <div class="toast__icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="toast__body">
                            <h3 class="toast__title">Thành công!</h3>
                            <p class="toast__msg">Bạn đã thêm sản phẩm thành công</p>
                        </div>
                        <div class="toast__close">
                            <i class="fas fa-times"></i>
                        </div>
                    `;
        main.appendChild(toast);
    }
}
function notify(valid) {
    if (!valid) {
        notifi.style.display = "block";
        number++;
        notifyNumber.innerText = number;
    } else {
    }
}

// xu li khi user dang nhap va hien ten
const logOut = document.querySelector(".navbar__signin");
const userName = document.querySelector(".signin");
const textLogout = document.querySelector(".account");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const modal = document.querySelector(".modal");

function handerLogout(logOut, userName, textLogout, currentUser, modal) {
    if (currentUser) {
        // Hiển thị tên người dùng lên giao diện
        userName.textContent = `Hello, ${currentUser.username}`;
        textLogout.textContent = "Accout, Log Out";
        textLogout.style.fontSize = "1.4rem";
        logOut.addEventListener("click", (evt) => {
            confirmLogOut(modal);
            evt.preventDefault();
        });
    }
}

function agree() {
    localStorage.removeItem("currentUser");
    window.location.href = "./index.html";
}

function confirmLogOut(modal) {
    modal.innerHTML = `<div class="modal__blog">
                <div class="modal__content">
                    <p class="modal__title">
                        Bạn có chắc chắn muốn đăng xuất không
                    </p>
                    <div class="modal__row">
                        <button
                            class="btn__modal btn__modal--left"
                            type="button"
                        >
                            Có
                        </button>
                        <button
                            class="btn__modal btn__modal--right"
                            type="button"
                        >
                            Không
                        </button>
                    </div>
                </div>
            </div>`;
    const btnAgree = document.querySelector(".btn__modal--left");
    const btnClose = document.querySelector(".btn__modal--right");
    const modalBlog = document.querySelector(".modal__blog");
    btnAgree.addEventListener("click", () => {
        agree();
    });
    btnClose.addEventListener("click", () => {
        modalBlog.remove();
    });
}

handerLogout(logOut, userName, textLogout, currentUser, modal);

// Xu li them gio hang
