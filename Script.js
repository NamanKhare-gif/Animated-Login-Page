const btnIcon1 = document.querySelector("#first");
const btnIcon2 = document.querySelector("#second");
const loginBtn = document.querySelector(".Pri-btn");
let inputs = document.querySelectorAll(".Form-inputs");
let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");

btnIcon1.addEventListener("click", () => {
    btnIcon1.classList.toggle("black");
    inp1.focus();
});

btnIcon2.addEventListener("click", () => {
    btnIcon2.classList.toggle("black");
    inp2.type = inp2.type === "password" ? "text" : "password";
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (inp1.value.trim() === "" || inp2.value.trim() === "") {
        alert("Please fill all the fields");
    }
});