import { GalTools } from "./galtools.js";

export class Gal extends GalTools {
    constructor() {
        super();
        this.mainContainer = document.querySelector('main');
        this.modalOnClk = document.querySelector('.product-sel');
        this.tmbClk = document.querySelectorAll('#image-side .tmb-btn');
        this.modalBtnClk = null;
        this.eventsListener();
    }
    eventsListener() {
        this.modalOnClk.addEventListener('click', this);
        this.tmbClk.forEach(t => t.addEventListener('click', this));
        if(this.modalBtnClk) {
            this.modalBtnClk.forEach(m => m.addEventListener('click', this));
        }
    }
    handleEvent(e) {
        const ect = e.currentTarget;

        switch(e.type) {
            case 'click':
                if(ect.matches('.tmb-btn')) {
                    this.thumbSel(ect);
                }
                if(ect.matches('.product-sel')) {
                    this.modalOn();
                }
                if(ect.matches('.modal-close-button')) {
                    this.modalOff();    
                }
                if(ect.matches('.modal-top-btn')) {
                    this.modalSliderTopBtn(ect);
                }
                break;
        }
    }
    
    thumbSel(ect) {
        let imgMain = document.querySelector('.product-sel img'),
            newImgSrc = ect.querySelector('img').src.replace('-thumbnail', '');
        imgMain.src = newImgSrc;
    
    }
    modalSliderTopBtn(ect) {
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
        
        if (ect.matches('.modal-top-btn-previous')) {
            mainImg = ect.nextElementSibling;
            matcher('previous');
        }
        else if(ect.matches('.modal-top-btn-next')) {
            mainImg = ect.previousElementSibling;
            matcher('next');
        }
        
    }
    modalOn() {
        let modal = this.modalCreator(this.modalOnClk.querySelector('img'));
        this.mainContainer.append(modal);
        modal.style.display = 'block';
        this.modalBtnClk = document.querySelectorAll('.modal-container button');
        this.eventsListener();
    }
    modalOff() {
        //modal.style.display = 'none';
        document.querySelector('.modal').remove();
        this.modalBtnClk = null;
        this.eventsListener();
    }
}