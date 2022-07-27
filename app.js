const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index];

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
    })
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex";
});

close.addEventListener("click",()=>{
    payment.style.display = "none";
});