// Lấy ra các phần tử cần thiết
const qtySelect = document.querySelectorAll(".qty__select");
const qtyList = document.querySelectorAll(".qty__list");
const qtyOptionHover = document.querySelectorAll(".qty__option__hover");

// Định nghĩa các tùy chọn text và number
const textOptions = ["Qty: ", "Qty: ", "Qty: ", "Qty: ", "Qty: ", "Qty: "];
const numberOptions = ["1", "2", "3", "4", "5", "6"];

// Tạo hàm xử lý sự kiện click trên qtySelect
function handleQtySelectClick(index) {
    // Ẩn tất cả các qtyList
    qtyList.forEach((list) => list.classList.remove("display"));
    // Hiển thị chỉ qtyList tương ứng
    qtyList[index].classList.add("display");
    // Thêm/xóa lớp qty__select__radius
    qtySelect.forEach((select) =>
        select.classList.remove("qty__select__radius")
    );
    qtySelect[index].classList.add("qty__select__radius");
}

// Gán sự kiện click cho các qtySelect
qtySelect.forEach((select, index) => {
    select.addEventListener("click", () => handleQtySelectClick(index));
});

// Tạo hàm xử lý sự kiện click trên các qtyOptionHover
function handleQtyOptionHover(index, selectedIndex) {
    qtySelect[index].innerHTML = `
    <p>
      <span>${textOptions[selectedIndex]}</span>
      <b>${numberOptions[selectedIndex]}</b>
      <i class="fa-solid fa-caret-down cart__caret"></i>
    </p>
  `;
    // Ẩn qtyList và xóa lớp qty__select__radius
    qtyList[index].classList.remove("display");
    qtySelect[index].classList.remove("qty__select__radius");
}

// Gán sự kiện click cho các qtyOptionHover
qtyOptionHover.forEach((option, index) => {
    option.addEventListener("click", () =>
        handleQtyOptionHover(Math.floor(index / 6), index % 6)
    );
});

// xu li cart storage
const storageColumn = document.querySelectorAll(".cart__storage--column");
const storageTitle = document.querySelectorAll(".storage__title");
const storageLine = document.querySelector(".storage__line");
const storageNoitem = document.querySelectorAll(".noitem");
storageTitle.forEach((title, index) => {
    title.addEventListener("click", () => {
        document.querySelector(".noitem.display").classList.remove("display");
        document
            .querySelector(".storage__title.active")
            .classList.remove("active");
        title.classList.add("active");
        storageNoitem[index].classList.add("display");
        // storageLine.classList.remove("line");
        // storageLine.style.left = title.offsetLeft + "px";
        // storageLine.style.width = title.offsetWidth + "px";
    });
});

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

// Xu li them gio hang
const listProduct = JSON.parse(localStorage.getItem("List"));
const addProduct = document.querySelector(".cart__list--product");
const subTotal = document.querySelectorAll(".subtotal");
function gederProduct() {
    if (listProduct) {
        var htmls = listProduct.map((item) => {
            return ` <div class="cart__line"></div>
            <div class="cart__row">
               <!-- cart image -->
           <div class="cart__image">
               <div class="cart__checkbox">
                   <label
                       class="checkbox"
                       for="cart__checkimg"
                   >
                       <input
                           type="checkbox"
                           name="checkbox"
                           id="cart__checkimg"
                           value="check"
                           hidden
                       />
                   </label>
               </div>
               <a href="./detail.html">
                   <img
                       src="${item.img}"
                       alt=""
                       class="img__cart"
                   />
               </a>
           </div>
           <!-- cart describe -->
           <div class="cart__describe">
               <p class="cart__bengo">
                   BENGOO G9000 Stereo Gaming
                   Headset for PS4 PC Xbox One,
                   <br />PS5 Controller, Noise
                   Cancelling Over Ear Headphones
                   with Mic, LED....
               </p>
               <p class="byfachixi">by Fachixy</p>
               <p class="electronics">
                   Electronics
               </p>
               <p class="instock">In Stock</p>
               <div class="cart__this--row">
                   <input
                       type="checkbox"
                       name=""
                       id=""
                       class="this__check"
                   />
                   <p class="this__desc">
                       This is a gift
                       <span>Learn more</span>
                   </p>
               </div>
               <p class="properties">
                   <b>Color:</b> ${item.color}
               </p>
               <p class="properties">
                   <b>Style:</b> Standard
               </p>
               <div class="cart__qty--row">
                   <!--  -->
                   <div class="qty__blog">
                       <div class="qty__select">
                           <p>
                               <span>Qty:</span>
                               <b>1</b>
                               <i
                                   class="fa-solid fa-caret-down cart__caret"
                               ></i>
                           </p>
                       </div>
                       <ul class="qty__list">
                           <div
                               class="qty__option__hover"
                           >
                               <li
                                   class="qty__option"
                               >
                                   Qty:<span>
                                       1</span
                                   >
                               </li>
                           </div>
                           <div
                               class="qty__option__hover"
                           >
                               <li
                                   class="qty__option"
                               >
                                   Qty:<span>
                                       2</span
                                   >
                               </li>
                           </div>
                           <div
                               class="qty__option__hover"
                           >
                               <li
                                   class="qty__option"
                               >
                                   Qty:<span>
                                       3</span
                                   >
                               </li>
                           </div>
                           <div
                               class="qty__option__hover"
                           >
                               <li
                                   class="qty__option"
                               >
                                   Qty:<span>
                                       4</span
                                   >
                               </li>
                           </div>
                           <div
                               class="qty__option__hover"
                           >
                               <li
                                   class="qty__option"
                               >
                                   Qty:<span>
                                       5</span
                                   >
                               </li>
                           </div>
                           <div
                               class="qty__option__hover"
                           >
                               <li
                                   class="qty__option"
                               >
                                   Qty:<span>
                                       6</span
                                   >
                               </li>
                           </div>
                       </ul>
                   </div>
                   <!--  -->
                   <div
                       class="cart__line--rotate"
                   ></div>
                   <p class="function delete">Delete</p>
                   <div
                       class="cart__line--rotate"
                   ></div>
                   <p class="function save">
                       Save for later
                   </p>
                   <div
                       class="cart__line--rotate"
                   ></div>
                   <p class="function">
                       Compare with similar items
                   </p>
                   <div
                       class="cart__line--rotate"
                   ></div>
                   <p class="function">Share</p>
               </div>
           </div>
           <p class="cart__money">${item.money}</p>
       </div>  
`;
        });
        addProduct.innerHTML = htmls.join("");
        //
        function subtotal() {
            for (let i = 0; i < string.split(",").map(Number).length; i++) {
                total += Math.round(string.split(",").map(Number)[i]);
            }
            for (let i = 0; i < subTotal.length; i++) {
                subTotal[i].innerHTML = ` <p class="subtotal">
                                        Subtotal (${
                                            string.split(",").map(Number)
                                                .length - 1
                                        } item):<b>$${total}</b>
                                    </p>`;
            }
            subTotal[1].innerHTML = ` <p class="subtotal subtotal__top">
            Subtotal (${
                string.split(",").map(Number).length - 1
            } item):<b>$${total}</b>
        </p>`;
        }
        // Tạo hàm xử lý sự kiện click trên qtySelect
        function handleQtySelectClick(index) {
            qtyList[index].classList.add("display");
            qtySelect[index].classList.add("qty__select__radius");
        }
        // Tạo hàm xử lý sự kiện click trên các qtyOptionHover
        function handleQtyOptionHover(index, selectedIndex) {
            qtySelect[
                index
            ].innerHTML = `<p><span>${textOptions[selectedIndex]}</span>
                                                        <b>${numberOptions[selectedIndex]}</b>
                                                        <i class="fa-solid fa-caret-down cart__caret"></i>
                                                    </p>`;
            // Ẩn qtyList và xóa lớp qty__select__radius
            qtyList[index].classList.remove("display");
            qtySelect[index].classList.remove("qty__select__radius");
        }
        //
        function handelSave(index) {
            listSave.push(listProduct[index]);
            const htmls = listSave.map((item) => {
                return ` <div class="cart__line lines"></div>
            <div class="cart__row">
               <!-- cart image -->
           <div class="cart__image">
               <div class="cart__checkbox">
                   <label
                       class="checkbox"
                       for="cart__checkimg"
                   >
                       <input
                           type="checkbox"
                           name="checkbox"
                           id="cart__checkimg"
                           value="check"
                           hidden
                       />
                   </label>
               </div>
               <a href="./detail.html">
                   <img
                       src="${item.img}"
                       alt=""
                       class="img__cart"
                   />
               </a>
           </div>
           <!-- cart describe -->
           <div class="cart__describe">
               <p class="cart__bengo">
                   BENGOO G9000 Stereo Gaming
                   Headset for PS4 PC Xbox One,
                   <br />PS5 Controller, Noise
                   Cancelling Over Ear Headphones
                   with Mic, LED....
               </p>
               <p class="byfachixi">by Fachixy</p>
               <p class="electronics">
                   Electronics
               </p>
               <p class="instock">In Stock</p>
               <div class="cart__this--row">
                   <input
                       type="checkbox"
                       name=""
                       id=""
                       class="this__check"
                   />
                   <p class="this__desc">
                       This is a gift
                       <span>Learn more</span>
                   </p>
               </div>
               <p class="properties">
                   <b>Color:</b> ${item.color}
               </p>
               <p class="properties">
                   <b>Style:</b> Standard
               </p>
               <div class="cart__qty--row">
                   <!--  -->
                   <div class="qty__blog">
                       <div class="qty__select">
                           <p>
                               <span>Qty:</span>
                               <b>1</b>
                               <i
                                   class="fa-solid fa-caret-down cart__caret"
                               ></i>
                           </p>
                       </div>
                       <ul class="qty__list">
                           <div
                               class="qty__option__hover"
                           >
                               <li
                                   class="qty__option"
                               >
                                   Qty:<span>
                                       1</span
                                   >
                               </li>
                           </div>
                           <div
                               class="qty__option__hover"
                           >
                               <li
                                   class="qty__option"
                               >
                                   Qty:<span>
                                       2</span
                                   >
                               </li>
                           </div>
                           <div
                               class="qty__option__hover"
                           >
                               <li
                                   class="qty__option"
                               >
                                   Qty:<span>
                                       3</span
                                   >
                               </li>
                           </div>
                           <div
                               class="qty__option__hover"
                           >
                               <li
                                   class="qty__option"
                               >
                                   Qty:<span>
                                       4</span
                                   >
                               </li>
                           </div>
                           <div
                               class="qty__option__hover"
                           >
                               <li
                                   class="qty__option"
                               >
                                   Qty:<span>
                                       5</span
                                   >
                               </li>
                           </div>
                           <div
                               class="qty__option__hover"
                           >
                               <li
                                   class="qty__option"
                               >
                                   Qty:<span>
                                       6</span
                                   >
                               </li>
                           </div>
                       </ul>
                   </div>
                   <!--  -->
                   <div
                       class="cart__line--rotate"
                   ></div>
                   <p class="function delete">Delete</p>
                   <div
                       class="cart__line--rotate"
                   ></div>
                   <p class="function save">
                       Save for later
                   </p>
                   <div
                       class="cart__line--rotate"
                   ></div>
                   <p class="function">
                       Compare with similar items
                   </p>
                   <div
                       class="cart__line--rotate"
                   ></div>
                   <p class="function">Share</p>
               </div>
           </div>
           <p class="cart__money">${item.money}</p>
       </div>  
`;
            });
            storageNoitem[0].innerHTML = htmls;
            //
            const lines = document.querySelectorAll(".lines");
            lines.forEach((line) => {
                line.style.width = "956px";
            });
        }
        function notifi() {
            notify.style.display = "block";
            notify.innerText = listProduct.length;
            notify.style.color = "#fff";
        }
        // lay DOM
        const qtySelect = document.querySelectorAll(".qty__select");
        const qtyList = document.querySelectorAll(".qty__list");
        const qtyOptionHover = document.querySelectorAll(".qty__option__hover");
        const destroy = document.querySelectorAll(".delete");
        const line = document.querySelectorAll(".cart__line");
        const row = document.querySelectorAll(".cart__row");
        const save = document.querySelectorAll(".save");
        const notify = document.querySelector(".cart__notify");
        const listSave = [];
        const money = document.querySelectorAll(".cart__money");
        let string = "";
        let total = 0;

        // Gán sự kiện click cho các qtySelect
        qtySelect.forEach((select, index) => {
            select.addEventListener("click", () => handleQtySelectClick(index));
        });

        // Gán sự kiện click cho các qtyOptionHover
        qtyOptionHover.forEach((option, index) => {
            option.addEventListener("click", () =>
                handleQtyOptionHover(Math.floor(index / 6), index % 6)
            );
        });
        //
        destroy.forEach((item, index) => {
            item.addEventListener("click", () => {
                line[index].remove();
                row[index].remove();
                listProduct.splice(index, 1);
                notifi();
                localStorage.setItem("List", JSON.stringify(listProduct));
            });
        });
        //
        save.forEach((item, index) => {
            item.addEventListener("click", () => {
                handelSave(index);
            });
        });
        //
        money.forEach((money) => {
            string += money.innerText.slice(1) + ",";
        });
        subtotal();
        notifi();
    }
}

gederProduct(subTotal);

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
