import {
  header,
  nav,
  elemImg,
  ulMenu,
  main,
  ulMenuLinkList,
  arr,
  service__btn,
  service__items,
} from "./utils/DOMelements.js";

function changeBurgerImg() {
  // включает и выключает появление бурдер меню
  elemImg.classList.toggle("cross__img");
  header.classList.toggle("header__fixed");
  ulMenu.classList.toggle("burger_opened");
  main.classList.toggle("main__berger");
}

function closeMenu() {
  // функция закрытия бургер меню
  elemImg.classList.remove("cross__img");
  header.classList.remove("header__fixed");
  ulMenu.classList.remove("burger_opened");
  main.classList.remove("main__berger");
}

for (let i = 0; i < arr.length; i++) {
  // цикл для ссылок. При нажатии навешиваем слушатель закрытия бургер-меню
  arr[i].addEventListener("click", closeMenu);
}

document.addEventListener("click", (e) => {
  // при нажатии вне блока закрываем бургер-меню
  const click = e.composedPath().includes(nav);
  if (!click) {
    return closeMenu();
  }
});
elemImg.addEventListener("click", changeBurgerImg);

// добавляем элементы на страницу
elemImg.classList.add("burger__img");
nav.append(elemImg);

//-------------------------------------------------
function changeTheBth(i, ...args) {
  service__btn[i].classList.toggle("service__btn-active");

  if ([...service__btn[i].classList].includes("service__btn-active")) {
    for (let arg of args) {
      service__items[arg].classList.add("service__item-notBlur");
    }
  } else if (![...service__btn[i].classList].includes("service__btn-active")) {
    for (let arg of args) {
      service__items[arg].classList.remove("service__item-notBlur");
    }
  }

  return service__btn[i];
}

function isActiveBtn() {
  let arr = [];
  for (let j = 0; j < 3; j++) {
    arr.push(...service__btn[j].classList);
  }
  console.log(arr);
  //елси arr  содержит два 'service__btn-active' то мы не блокируем changeTheBth()
  arr.includes("service__btn-active")
    ? service__items.forEach((e) => e.classList.add("service__item-blur"))
    : service__items.forEach((e) => e.classList.remove("service__item-blur"));

  if (arr.length === 5) {
    service__btn.forEach((e) => {
      !e.classList.contains("service__btn-active")
        ? (e.disabled = true)
        : (e.disabled = false);
    });
  } else {
    service__btn.forEach((e) => {
      e.disabled = false;
    });
  }
  return arr;
}

service__btn[0].addEventListener("click", function () {
  changeTheBth(0, 0, 4);
  isActiveBtn();
});
service__btn[1].addEventListener("click", function () {
  changeTheBth(1, 2);
  isActiveBtn();
});
service__btn[2].addEventListener("click", function () {
  changeTheBth(2, 1, 3, 5);
  isActiveBtn();
});
