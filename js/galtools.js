export class GalTools {
    constructor() {}

    modalShowCreator(mainImg) {
        const modal = document.createElement('div'),
            modalContainer = document.createElement('div'),
            modalCloseBtn = document.createElement('button'),
            modalCloseImg  = document.createElement('img'),
            modalTopContainer = document.createElement('div'),
            modalTopMainImg = document.createElement('img'),
            modalTopBtnPrev = document.createElement('button'),
            modalTopBtnPrevImg = document.createElement('img'),
            modalTopBtnNext = document.createElement('button'),
            modalTopBtnNextImg = document.createElement('img'),
            modalBottomContainer = document.createElement('div'),
            modalBottomThumbBtn1 = document.createElement('button'),
            modalBottomThumbImg1 = document.createElement('img'),
            modalBottomThumbBtn2 = document.createElement('button'),
            modalBottomThumbImg2 = document.createElement('img'),
            modalBottomThumbBtn3 = document.createElement('button'),
            modalBottomThumbImg3 = document.createElement('img'),
            modalBottomThumbBtn4 = document.createElement('button'),
            modalBottomThumbImg4 = document.createElement('img');

        modal.classList.add('modal');
        modalContainer.classList.add('modal-container');
        modalCloseBtn.classList.add('modal-close-button');
        modalTopContainer.classList.add('modal-top-container');
        modalTopMainImg.classList.add('modal-top-main-img');
        modalTopBtnPrev.classList.add('modal-top-btn', 'modal-top-btn-previous');
        modalTopBtnNext.classList.add('modal-top-btn', 'modal-top-btn-next');
        modalBottomContainer.classList.add('modal-bottom-container');
        modalBottomThumbBtn1.classList.add('modal-bottom-thumb-button');
        modalBottomThumbBtn2.classList.add('modal-bottom-thumb-button');
        modalBottomThumbBtn3.classList.add('modal-bottom-thumb-button');
        modalBottomThumbBtn4.classList.add('modal-bottom-thumb-button');

        modalCloseImg.setAttribute('src', './images/icon-close-modal.svg');
        modalTopMainImg.setAttribute('src', mainImg.src);
        modalTopBtnPrevImg.setAttribute('src', 'images/icon-previous.svg');
        modalTopBtnNextImg.setAttribute('src', 'images/icon-next.svg');
        modalBottomThumbImg1.setAttribute('src', 'images/image-product-1-thumbnail.jpg');
        modalBottomThumbImg2.setAttribute('src', 'images/image-product-2-thumbnail.jpg');
        modalBottomThumbImg3.setAttribute('src', 'images/image-product-3-thumbnail.jpg');
        modalBottomThumbImg4.setAttribute('src', 'images/image-product-4-thumbnail.jpg');

        modalCloseBtn.append(modalCloseImg);
        modalTopBtnPrev.append(modalTopBtnPrevImg);
        modalTopBtnNext.append(modalTopBtnNextImg);
        modalTopContainer.append(modalTopBtnPrev, modalTopMainImg, modalTopBtnNext);
        modalBottomThumbBtn1.append(modalBottomThumbImg1);
        modalBottomThumbBtn2.append(modalBottomThumbImg2);
        modalBottomThumbBtn3.append(modalBottomThumbImg3);
        modalBottomThumbBtn4.append(modalBottomThumbImg4);
        modalBottomContainer.append(modalBottomThumbBtn1, modalBottomThumbBtn2, modalBottomThumbBtn3, modalBottomThumbBtn4);

        modalContainer.append(modalCloseBtn, modalTopContainer, modalBottomContainer);
        modal.append(modalContainer);

        return modal;
    }

    /*cartHoverCountCreate() {
        const cartNavbarHoverContainer = document.createElement('i');
        
        cartHoverCountContainer.classList.add('cart-navbar-hover-container');

        return cartNavbarHoverContainer;

    }*/

    popCartCreate() {
        const popCartCreated  = document.createElement('div'), 
            popCartContainer = document.createElement('div'),
            popCartHead = document.createElement('div'),
            popCartHr = document.createElement('hr'),
            popCartContent = document.createElement('div'),
            popCartIsEmpty = document.createElement('p'),
            popCartTail = document.createElement('button');

        popCartCreated.classList.add('pop-cart-created');
        popCartContainer.classList.add('pop-cart-container');
        popCartHead.classList.add('pop-cart-head');
        popCartHr.classList.add('pop-cart-hr');
        popCartContent.classList.add('pop-cart-content');
        popCartIsEmpty.classList.add('pop-cart-is-empty');
        popCartTail.classList.add('pop-cart-tail');
        
        popCartHead.innerText = 'Cart';
        popCartIsEmpty.innerText = 'Your cart is empty.';
        popCartTail.innerText = 'Checkout';

        popCartContent.append(popCartIsEmpty);
        popCartContainer.append(popCartHead, popCartHr, popCartContent, popCartTail);
        popCartCreated.append(popCartContainer);

        return popCartCreated;

    }

    popCartItemsAdder() {
        const popCartItemsContainer = document.createElement('div'), 
            popCartItems = document.createElement('div'),
            popCartItemsImg = document.createElement('img'),
            popCartItemsDetails = document.createElement('div'),
            popCartItemsDetailsProd1Row = document.createElement('div'),
            popCartItemsDetailsProd2Row = document.createElement('div'),
            popCartItemsDetailsProd2RowPricer = document.createElement('span'),
            popCartItemsDetailsProd2RowTotal = document.createElement('span'),
            popCartItemsDetailsIconBtn = document.createElement('button'),
            popCartItemsDetailsIconImg = document.createElement('img');

        popCartItemsContainer.classList.add('pop-cart-items-container');
        popCartItems.classList.add('pop-cart-items');
        popCartItemsDetails.classList.add('pop-cart-items-details');
        popCartItemsDetailsProd1Row.classList.add('pop-cart-items-details-prod-1row');
        popCartItemsDetailsProd2Row.classList.add('pop-cart-items-details-prod-2row');
        popCartItemsDetailsIconBtn.classList.add('pop-cart-items-details-icon-btn');
        popCartItemsDetailsIconImg.setAttribute('src', 'images/icon-delete.svg');
        popCartItemsDetailsIconImg.setAttribute('alt', 'Delete from chart');

        popCartItemsImg.src = document.querySelector('.tmb-btn img').src;
        popCartItemsImg.alt = 'Product on cart';

        popCartItemsDetailsProd2Row.append(popCartItemsDetailsProd2RowPricer, popCartItemsDetailsProd2RowTotal);
        popCartItemsDetails.append(popCartItemsDetailsProd1Row, popCartItemsDetailsProd2Row);
        popCartItemsDetailsIconBtn.append(popCartItemsDetailsIconImg);
        popCartItems.append(popCartItemsImg, popCartItemsDetails, popCartItemsDetailsIconBtn);
        popCartItemsContainer.append(popCartItems);

        return popCartItemsContainer;
    }

}