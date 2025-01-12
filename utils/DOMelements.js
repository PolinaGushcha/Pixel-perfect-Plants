const header = document.getElementById('header');
const nav = document.getElementById('menu');
const elemImg = document.createElement('div');
const ulMenu = document.getElementById('menu__list');
const main = document.getElementById('main');
const ulMenuLinkList = document.getElementsByClassName('menu__link');
const arr = [...ulMenuLinkList];

const service__btn = [...document.getElementsByClassName('service__btn')];
const service__items = [...document.getElementsByClassName('service__item')];

export {header, nav, elemImg, ulMenu, main, ulMenuLinkList, arr, service__btn, service__items};