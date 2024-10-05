// const imgBaner = document.querySelectorAll(".img__baner");
// const prevBtn = document.querySelector(".baner__left");
// const nextBtn = document.querySelector(".baner__right");

// let n = 0;
// function slider(n) {
//     for (let i = 0; i < imgBaner.length; i++) {
//         imgBaner[i].style.display = "none";
//     }
//     imgBaner[n].style.display = "block";

//     for (let i = 0; i < imgBaner.length; i++) {
//         if (i === 0) {
//             setTimeout(function () {
//                 nextBtn.click();
//             }, 5000);
//         }
//     }
// }

// nextBtn.addEventListener("click", function () {
//     if (n < imgBaner.length - 1) {
//         n++;
//         slider(n);
//     } else {
//         n = 0;
//         slider(n);
//     }
// });

// prevBtn.addEventListener("click", function () {
//     if (n <= 0) {
//         n = imgBaner.length - 1;
//         slider(n);
//     } else {
//         n--;
//         slider(n);
//     }
// });

// setTimeout(function () {
//     let k = 0;
//     if (k === 0) {
//         nextBtn.click();
//         k++;
//     } else if (k === 1) {
//         return;
//     }
// }, 3000);

// Xu li baner
const imgBaners = document.querySelectorAll(".img__baner");
const prevBtn = document.querySelector(".baner__left");
const nextBtn = document.querySelector(".baner__right");

let currentIndex = 0;
let isSlideTransitioning = false;

function showSlide(index) {
    if (isSlideTransitioning) return;
    isSlideTransitioning = true;

    imgBaners.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
    });

    isSlideTransitioning = false;
}

function goToPrevSlide() {
    if (isSlideTransitioning) return;
    currentIndex = currentIndex === 0 ? imgBaners.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
}

function goToNextSlide() {
    if (isSlideTransitioning) return;
    currentIndex = currentIndex === imgBaners.length - 1 ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}

prevBtn.addEventListener("click", goToPrevSlide);
nextBtn.addEventListener("click", goToNextSlide);

function startAutoSlide() {
    setInterval(() => {
        goToNextSlide();
    }, 5000);
}

startAutoSlide();
// Xu li img product
const imgTopic = document.querySelector(".img__bestsell--topic");
const imgTopics = document.querySelectorAll(".bestsell__topic");
const topicName = document.querySelector(".topic__name");
const topicPrice = document.querySelector(".topic__price");
const listInfoImg = [
    {
        img: "./assets/image/gaming-img1.1.jpg",
        title: "Shirt",
        price: "$50",
    },
    {
        img: "./assets/image/gaming-img1.2.jpg",
        title: "Hat",
        price: "$40",
    },
    {
        img: "./assets/image/gaming-img1.3.jpg",
        title: "Spider man",
        price: "$30",
    },
    {
        img: "./assets/image/gaming-img1.4.jpg",
        title: "Glass",
        price: "$20",
    },
];

function handleImg(imgs) {
    imgTopics.forEach((topic, index) => {
        topic.addEventListener("click", () => {
            document
                .querySelector(".bestsell__topic.active")
                .classList.remove("active");
            imgTopic.src = imgs[index].img;
            topicName.innerText = imgs[index].title;
            topicPrice.innerText = imgs[index].price;
            topic.classList.add("active");
        });
    });
}

handleImg(listInfoImg);

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

// xu li tim kiem san pham va icon tim kiem
const inputSearch = document.querySelector(".input__search");
const clear = document.querySelector(".fa__close");
const searchProduct = document.querySelector(".seacrh__product");
const searchContent = document.querySelector(".search__product--content");

const listProduct = [
    {
        img: "http://127.0.0.1:5500/assets/image/product-img1.1.jpg",
        name: "Earphone",
    },
    {
        img: "http://127.0.0.1:5500/assets/image/product-img1.2.jpg",
        name: "Keyboards",
    },
    {
        img: "http://127.0.0.1:5500/assets/image/product-img1.3.jpg",
        name: "Computer mice",
    },
    {
        img: "http://127.0.0.1:5500/assets/image/product-img1.4.jpg",
        name: "Chairs",
    },
    {
        img: "http://127.0.0.1:5500/assets/image/product-img1.5.jpg",
        name: "Jeans under",
    },
    {
        img: "http://127.0.0.1:5500/assets/image/product-img1.6.jpg",
        name: "Top under",
    },
    {
        img: "http://127.0.0.1:5500/assets/image/product-img1.7.jpg",
        name: "Dresses under",
    },
    {
        img: "http://127.0.0.1:5500/assets/image/product-img1.8.jpg",
        name: "Shoes under",
    },
];
function validText(value) {
    if (value.trim() === "") {
        clear.style.visibility = "";
        searchProduct.style.display = "";
    } else {
        clear.style.visibility = "visible";
        searchProduct.style.display = "block";
    }
}

function genderProduct(value) {
    const matchingProduct = listProduct.find(
        (item) => item.name === value.trim()
    );
    const suggestions = listProduct.filter((item) =>
        item.name.includes(value.slice(0, 1))
    );
    if (matchingProduct) {
        searchContent.innerHTML = `
        <div class="search__row">
          <img src="${matchingProduct.img}" alt="" class="img__seacrh--product" />
          <p class="search__product--title">${matchingProduct.name}</p>
          <i class="fa-solid fa-circle-xmark close__product"></i>
        </div>
      `;
    } else if (suggestions.length > 0) {
        const htmls = suggestions.map((item) => {
            return `
            <div class="search__row">
              <i class="fa-solid fa-magnifying-glass"></i>
              <p class="search__product--title" style="margin-left: 10px;">${item.name.slice(
                  0,
                  4
              )}</p>
              <i class="fa-solid fa-circle-xmark close__product"></i>
            </div>
          `;
        });
        searchContent.innerHTML = htmls.join("");
    } else {
        searchContent.innerHTML = `<p class="search__product--title" style="margin-top: 4px;">Không tìm thấy sản phẩm phù hợp</p> `;
    }
    //
    const deletes = document.querySelectorAll(".close__product");
    const searchRow = document.querySelectorAll(".search__row");
    deletes.forEach((item, index) => {
        item.addEventListener("click", () => {
            searchRow[index].remove();
            // inputSearch.value = "";
            // clear.style.visibility = "";
        });
    });
}

inputSearch.addEventListener("input", (evt) => {
    validText(evt.target.value);
    genderProduct(evt.target.value);
});

clear.addEventListener("click", () => {
    inputSearch.value = "";
    clear.style.visibility = "";
    searchProduct.style.display = "";
});
