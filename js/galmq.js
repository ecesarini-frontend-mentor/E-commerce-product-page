import { GalTools } from "./galtools.js";

export class GalMq extends GalTools {
    constructor() {
        super();
    }

    mqToMobile() {
        const leftbarContent = document.querySelector('.leftbar-content'),
            navCat = document.querySelector('.nav-cat'),
            imgSide = document.querySelector('#image-side'),
            productSel = document.querySelector('.product-sel'),
            prodSelMainImg = document.querySelector('.product-sel-main-img'),
            prodSelContainer = document.createElement('div'),
            prodSelContainerPreviousBtn = document.createElement('button'),
            prodSelContainerPreviousImg = document.createElement('img'),
            prodSelContainerNextBtn = document.createElement('button'),
            prodSelContainerNextImg = document.createElement('img');
        
        prodSelContainerPreviousImg.setAttribute('src', './images/icon-previous.svg');
        prodSelContainerPreviousImg.setAttribute('alt', 'Mobile leftbar previous item.');
        prodSelContainerNextImg.setAttribute('src', './images/icon-next.svg');
        prodSelContainerNextImg.setAttribute('alt', 'Mobile leftbar next item.');
        
        prodSelContainer.classList.add('prod-sel-mq');
        prodSelContainerPreviousBtn.classList.add('prod-sel-mq-btn', 'prod-sel-mq-btn-previous');
        prodSelContainerNextBtn.classList.add('prod-sel-mq-btn', 'prod-sel-mq-btn-next');

        prodSelContainerPreviousBtn.append(prodSelContainerPreviousImg);
        prodSelContainerNextBtn.append(prodSelContainerNextImg);
        prodSelContainer.append(prodSelContainerPreviousBtn, prodSelMainImg, prodSelContainerNextBtn);
        imgSide.prepend(prodSelContainer);
        //productSel.style.display = 'none';

        imgSide.prepend(productSel);
        leftbarContent.append(navCat);
    }

    mqToDesktop() {

    }
}