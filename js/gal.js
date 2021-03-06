import { GalMq } from "./galmq.js";

export class Gal extends GalMq {
    constructor() {
        super();
        this.mainContainer = document.querySelector('main');
        this.modalOnClk = document.querySelector('.product-sel');
        this.cartCount = 0;
        this.cartPurchases = 0;
        this.modalBtnClk = null;
        this.cartIsClicked = false;
        this.itemInCart = false;
        this.popCart = this.popCartCreate();
        this.mediaQueryWidth = window.matchMedia('(max-width: 700px)');
        this.eventsListener();
    }
    eventsListener() {
        let btn = document.querySelectorAll('button');
        
        window.addEventListener('load', this);
        this.modalOnClk.addEventListener('click', this);
        btn.forEach(b => b.addEventListener('click', this));
        if(this.modalBtnClk) {
            this.modalBtnClk.forEach(m => m.addEventListener('click', this));
        }
        this.mediaQueryWidth.addEventListener('change', this);
    }
    handleEvent(e) {
        const ect = e.currentTarget,
            cartIsOnMq = (this.cartIsClicked && this.mediaQueryWidth.matches)? 
                document.querySelector('.pop-cart-created'):
                null,
            /*sliderMq = (this.mediaQueryWidth.matches)? 
                document.querySelector('.leftbar-content-trans'):
                null,*/
            modalImgSlider = ['.modal-top-btn-previous', '.modal-top-btn-next'],            
            mqImgSlider = ['.product-sel-mq-btn-previous', '.product-sel-mq-btn-next'];
        let selTg = undefined;

        switch(e.type) {
            case 'click':
                if(ect.matches('.tmb-btn')) {
                    selTg = '.product-sel img';
                    this.thumbSel(ect, selTg);
                }
                if(ect.matches('.product-sel')) {
                    this.modalOn();
                }
                if(ect.matches('.modal-close-button')) {
                    this.modalOff();    
                }
                if(ect.matches('.modal-top-btn')) {
                    this.imageSlider(ect, modalImgSlider);
                }
                if(ect.matches('.product-sel-mq-btn')) {
                    this.imageSlider(ect, mqImgSlider);
                }
                if(ect.matches('.modal-bottom-thumb-button')) {
                    selTg = '.modal-top-main-img';
                    this.thumbSel(ect, selTg);
                }
                if(ect.matches('.desc-purchase-addremove')) {
                    this.purchaseSel(ect);
                }
                if(ect.matches('.nav-tail-btn-cart')) {
                    this.cartToggle();
                }
                if(ect.matches('.desc-purchase-add-cart')) {
                    this.cartAddItems(document);
                }
                if(ect.matches('.pop-cart-items-details-icon-btn')) {
                    this.cartRemoveItem(ect);
                }
                if(ect.matches('.nav-menu-btn')) {
                    //if(sliderMq) sliderMq.classList.add('slide-on');
                    if(cartIsOnMq) cartIsOnMq.style.display = 'none';
                    this.leftbarToggler(true);
                }
                if(ect.matches('.leftbar-close-btn')) {
                    if(cartIsOnMq) cartIsOnMq.style.display = 'block';
                    this.leftbarToggler(false);
                }
                break;
            case 'load':
                if(this.mediaQueryWidth.matches) {
                    this.mqToMobile();
                } else {
                    this.mqToDesktop();
                }
                this.eventsListener()
                break;
            case 'change':
                if(this.mediaQueryWidth.matches) {
                    this.mqToMobile();
                } else {
                    this.mqToDesktop();
                }
                this.eventsListener();
                break;
        }
    }

    thumbSel(ect, selTg) {
        let imgMain = document.querySelector(selTg),
            newImgSrc = ect.querySelector('img').src.replace('-thumbnail', '');
        imgMain.src = newImgSrc;
    
    }
    modalOn() {
        let modal = this.modalShowCreator(this.modalOnClk.querySelector('img'));
        this.mainContainer.append(modal);
        modal.style.display = 'block';
        this.modalBtnClk = document.querySelectorAll('.modal-container button');
        this.eventsListener();
    }
    modalOff() {
        document.querySelector('.modal').remove();
        this.modalBtnClk = null;
        this.eventsListener();
    }
    imageSlider(ect, actionBtn) {
        const reg = /-(\d)/;
        let mainImg;
        const matcher = (order) => {
            const regMatch = mainImg.src.match(reg);
            let r = Number.parseInt(regMatch[1]),
                repl;
            if(order === 'previous') {
                repl = (r === 1)? '-4': `-${--r}`;
            }    
            else if(order === 'next') {
                repl = (r === 4)? '-1': `-${++r}`;
            }
            mainImg.src = mainImg.src.replace(regMatch[0], repl);
        }
        
        if(ect.matches(actionBtn[0])) {
            mainImg = ect.nextElementSibling;
            matcher('previous');
        }
        else if(ect.matches(actionBtn[1])) {
            mainImg = ect.previousElementSibling;
            matcher('next');
        }
    }
    purchaseSel(ect) {
        const count = document.querySelector('.desc-purchase-count');

        if(ect.matches('.desc-purchase-plus')) {
            count.innerText = Number.parseInt(count.innerText) + 1;
        }
        else if(ect.matches('.desc-purchase-minus')) {
            count.innerText = (Number.parseInt(count.innerText) > 0)? Number.parseInt(count.innerText) -1: 0;
        }    
        this.cartCount = Number.parseInt(count.innerText);
        
    }

    cartToggle() {        
        document.querySelector('.pop-cart-created').style.display = 
            (!this.cartIsClicked)? 'block' : '';

        this.cartIsClicked = !this.cartIsClicked;
    }

    cartAddItems(elem) {
        this.cartCount = (this.cartCount > 0)? this.cartCount: 1;
        this.cartPurchases = this.cartPurchases + 1;
        const cartItemContainer = this.popCartItemsAdder(),
            cartIsEmpty = elem.querySelector('.pop-cart-is-empty'),
            cartTail = document.querySelector('.pop-cart-tail'),
            cartNavTailI = document.querySelector('.nav-tail-btn-cart-i');

        const compute = (tg) => {
            const descH = document.querySelector('.desc-h').innerText,
                price = document.querySelector('.desc-price-current').innerText.slice(1),
                items1RowDesc = tg.querySelector('.pop-cart-items-details-prod-1row'),
                items2RowCount = tg.querySelector('.pop-cart-items-details-prod-2row :nth-child(1)'),
                items2RowTotal = tg.querySelector('.pop-cart-items-details-prod-2row :nth-child(2)'),
                total = Number.parseFloat(Number.parseFloat(price) * Number.parseInt(this.cartCount)).toFixed(2);

            items1RowDesc.innerText = descH;
            items2RowCount.innerText = `$${price} x ${this.cartCount} `;
            items2RowTotal.innerText = '$' + total;            
        };

        cartIsEmpty.style.display = 'none';
        cartTail.style.display = 'block';
        cartNavTailI.style.display = 'block';
        cartNavTailI.innerText = this.cartPurchases;

        document.querySelector('.pop-cart-content').append(cartItemContainer);
        let tg = elem.querySelector('.pop-cart-content').lastElementChild;
        compute(tg);
        this.eventsListener(); //It's needed to activate eventsListener on new cart html container
    }

    cartRemoveItem(ect) {
        const itemTarget = ect.closest('.pop-cart-items'),
            cartNavTailI = document.querySelector('.nav-tail-btn-cart-i'),
            cartEmptyCheck = () => {
                const pcic = document.querySelector('.pop-cart-items'),
                    pcie = document.querySelector('.pop-cart-is-empty'),
                    pct = document.querySelector('.pop-cart-tail');
                
                if(!pcic) {
                    [pcie, pct, cartNavTailI].forEach( i => i.style.display = '');
                }
            };

        itemTarget.remove();
        this.cartPurchases = this.cartPurchases - 1;
        cartNavTailI.innerText = this.cartPurchases;

        cartEmptyCheck();                
    }

    leftbarToggler(sel) {
        const leftbar = document.querySelector('#leftbar'),
            leftbarContent = leftbar.firstElementChild;
        
        if(sel) {
            leftbar.style.visibility = 'visible';
            leftbarContent.style.width = '65%'; 
        } else {
            leftbar.style.visibility = '';
            leftbarContent.style.width = '';
        }
        this.eventsListener();
    }

}