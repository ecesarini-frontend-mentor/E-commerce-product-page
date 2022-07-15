import { GalTools } from "./galtools.js";

export class GalMq extends GalTools {
    constructor() {
        super();
    }

    mqArranger() {
        const navCat = document.querySelector('.nav-cat'),
            imgSide = document.querySelector('#image-side'),
            prodSel = document.querySelector('.product-sel'),
            prodSelImg = prodSel.firstElementChild,
            leftbar = document.querySelector('#leftbar'),

            navCatMenuBtn = document.createElement('button'),
            navCatMenuBtnImg = document.createElement('img'),
            leftbarCloseBtn = document.createElement('button'),
            leftbarCloseBtnImg = document.createElement('img');
        
        navCatMenuBtn.classList.add('nav-cat-menu-btn');
        navCatMenuBtnImg.setAttribute('src', './images/icon-menu.svg');
        navCatMenuBtnImg.setAttribute('alt', 'Categories menu');
        
        leftbarCloseBtn.classList.add('leftbar-close-btn');
        navCatMenuBtnImg.setAttribute('src', './images/icon-close.svg');
        navCatMenuBtnImg.setAttribute('alt', 'Categories close button');

        imgSide.prepend(prodSelImg);
        prodSel.style.display = 'none';

        navCatMenuBtn.append(navCatMenuBtnImg);
        leftbarCloseBtn.append(leftbarCloseBtnImg);
        leftbar.append(leftbarCloseBtn, navCat);
    }
}