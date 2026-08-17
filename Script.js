const btnIcon1 = document.querySelector("#first");
const textbtn = document.querySelector("#text-btn");
const emailbtn = document.querySelector("#email-btn");
const passbtn = document.querySelector("#pass-btn");;
const container = document.querySelector(".Container");
const btnIcon2 = document.querySelector("#second");
const btnIcon3 = document.querySelector(".first1");
const btnIcon4 = document.querySelector(".second1");
const btnIcon5 = document.querySelector(".third");
const loginBtn = document.querySelector(".Pri-btn");
const regtrBtn = document.querySelector(".Register-btn");
let inputs = document.querySelectorAll(".Form-inputs");
const heroCont = document.querySelector(".hero-cont1");
let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
const formText = document.querySelector(".Form-text");
const regstrtext = document.querySelector(".registar-form");
const formText1 = document.querySelector(".Form-text1");
const regBtn = document.querySelector("#reg-btn");
const icon3 = document.querySelector(".icon3");
const icon4 = document.querySelector(".icon4");
const loginBtn2 = document.querySelector(".Reg-btn");
const regPassword = document.querySelector(
    '.registar-form input[type="password"]'
);

btnIcon1.addEventListener("click", () => {
    btnIcon1.classList.toggle("black");
    inp1.focus();
});

textbtn.addEventListener("click", () => {
    btnIcon1.classList.toggle("black");
    btnIcon3.focus();
});


btnIcon2.addEventListener("click", () => {
    btnIcon2.classList.toggle("black");
    inp2.type = inp2.type === "password" ? "text" : "password";
});

btnIcon5.addEventListener("click", () => {
    btnIcon5.classList.toggle("black");
    inp2.type = inp2.type === "password" ? "text" : "password";
});

icon3.addEventListener("click" , (e) => {
    e.preventDefault();
    icon3.type = icon3.type === "password" ? "text" : "password";
    icon3.classList.toggle("black");
});

icon4.addEventListener("click" , (e) => {
    e.preventDefault();
    icon4.type = icon4.type === "password" ? "text" : "password";
    icon4.classList.toggle("black");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (inp1.value.trim() === "" || inp2.value.trim() === "") {
        alert("Please fill all the fields");
    }
});

regtrBtn.addEventListener("click", () => {
    container.classList.add("register-active");
    formText.style.zIndex ="1";
    setTimeout(() => {
        heroCont.classList.add("hide");
    }, 560);
    setTimeout(() => {
        formText.style.display = "none";
        container.classList.add("shrink");
        regstrtext.style.display = "block";
    }, 800);
    setTimeout(() => {
        heroCont.style.display = "block";
        requestAnimationFrame(() => {
            heroCont.classList.add("show");
        });
    }, 1600);
    setTimeout(() => {
        formText1.style.zIndex = "4";
    },1700);
    
});

loginBtn2.addEventListener("click", () => {
    if (!container.classList.contains("register-active")) {
        return;
    }
    setTimeout(() => {
        heroCont.classList.remove("show");
    },500);
    setTimeout(() => {
        container.classList.remove("shrink");
        formText1.style.zIndex = "1";
    }, 400);
    setTimeout(() => {
        formText1.style.display = "none";
    },1190);
    setTimeout(() => {
        container.classList.remove("register-active");
    }, 1240);
    setTimeout(() => {
        formText.style.display = "block";
        formText.style.zIndex ="3";
        heroCont.classList.remove("hide");
    }, 2490);
});

regBtn.addEventListener("click" , () => {
    if(btnIcon3.value.trim() == "" || btnIcon4.value.trim() == "") {
        alert("Please fill all the fields");
    }
});