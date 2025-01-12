const selectBox = document.querySelector(".select-form");
let select = document.querySelector(".select-form__list");
let infoTextLi = [...document.getElementById("infoText").children];
let infoBox = document.getElementById("infoBox");
let result = [...select.nextElementSibling.children];
let phoneBtn = document.getElementById("phoneBtn");

function selectState() {
  selectBox.classList.toggle("select-active");
}
selectBox.addEventListener("click", selectState);

function show(param) {
  select.value = param;

  if (select.value !== "City") {
    infoBox.style.display = "flex";
  }
  if (select.value === "Canandaigua, NY") {
    infoTextLi[0].textContent = "Canandaigua, NY";
    infoTextLi[1].textContent = "+1	585	393 0001";
    infoTextLi[2].textContent = "151 Charlotte Street";

    result.forEach((e) => e.classList.remove("option-active"));
    result[0].classList.add("option-active");

    phoneBtn.href = "tel: +1	585	393 0001";
  } else if (select.value === "New York City") {
    infoTextLi[0].textContent = "New York City";
    infoTextLi[1].textContent = "+1	212	456 0002";
    infoTextLi[2].textContent = "9 East 91st Street";

    result.forEach((e) => e.classList.remove("option-active"));
    result[1].classList.add("option-active");

    phoneBtn.href = "tel: +1	212	456 0002";
  } else if (select.value === "Yonkers, NY") {
    infoTextLi[0].textContent = "Yonkers, NY";
    infoTextLi[1].textContent = "+1	914	678 0003";
    infoTextLi[2].textContent = "511 Warburton Ave";

    result.forEach((e) => e.classList.remove("option-active"));
    result[2].classList.add("option-active");

    phoneBtn.href = "tel: +1	914	678 0003";
  } else if (select.value === "Sherrill, NY") {
    infoTextLi[0].textContent = "Sherrill, NY";
    infoTextLi[1].textContent = "+1	315	908 0004";
    infoTextLi[2].textContent = "14 WEST Noyes BLVD";

    result.forEach((e) => e.classList.remove("option-active"));
    result[3].classList.add("option-active");

    phoneBtn.href = "tel: +1	315	908 0004";
  }
}

const accardion = [...document.getElementsByClassName("accardion")];
const content = [...document.getElementsByClassName("content")];
const iconArrow = [...document.getElementsByClassName("accardion__icon")];

let num = 0;
function openSlider(el) {
  num++;
  if (num % 2 !== 0) {
    accardion.forEach((e) => (e.style.display = "none"));
    accardion[el].style.display = "flex";
    accardion[el].style.borderRadius = "20px 20px 0px 0px";
    accardion[el].style.marginBottom = "0px";
    accardion[el].style.backgroundColor = "#D6E7D2";
    content[el].style.maxHeight = "fit-content";

    iconArrow[el].style.transform = "rotate(180deg)";
    iconArrow[el].style.backgroundColor = "#AEA1A1";
  } else {
    accardion.forEach((e) => (e.style.display = "flex"));
    content[el].style.maxHeight = "0";
    accardion[el].style.borderRadius = "20px";
    accardion[el].style.backgroundColor = "#EDF2EC";
    el === 2
      ? (accardion[el].style.marginBottom = "0px")
      : (accardion[el].style.marginBottom = "27px");

    iconArrow[el].style.transform = "rotate(0deg)";
    iconArrow[el].style.backgroundColor = "#d9d9d9";
  }
}
accardion[0].addEventListener("click", function () {
  return openSlider(0);
});
accardion[1].addEventListener("click", function () {
  return openSlider(1);
});
accardion[2].addEventListener("click", function () {
  return openSlider(2);
});

console.log(accardion);
console.log(content);
