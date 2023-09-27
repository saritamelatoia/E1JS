const hellomoto = document.querySelector("hellomoto");
console.log(hellomoto);
//<--------------Click -------------------->
const saludoh1 = document.querySelector("#saludoh1");
console.log(saludoh1);
saludoh1.addEventListener('click', () => {
console.log("Escuchando evento desde js");
});

document.addEventListener("click", () => {
//console.log("tuk");
} )

//<---------------------- Focus / Blur ------------------------------>
const inputBlur = document.querySelector("#inputBlur");
//console.log(inputBlur);

inputBlur.addEventListener('focus', () => {
//    console.log("focus");
inputBlur.style.backgroundColor = "yellow";
inputBlur.style.padding = "30px";
})

inputBlur.addEventListener("blur", () => {
    inputBlur.style.backgroundColor = "";
    inputBlur.style.padding = "";
});

//<----------------Change---------------->
const inputChange = document.querySelector("#inputChange");
inputChange.addEventListener('change', (e) => {
    console.log("Cambio el value");
    console.log(e.target.value);
});

// <-------------------event-------------->

const buttonTarget = document.querySelector(".btn");

buttonTarget.addEventListener('click', (e) => {
const texto = e.target.textContent;
console.log(texto.toUpperCase());
});

//--------------------------
const $figure = document.createElement("figure");
$img = document.createElement("img");
$figcaption = document.createElement("figcaption");
$figcaptionText = document.createTextNode()
