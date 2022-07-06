import { GalTools } from "./galtools.js";

export class Gal extends GalTools {
    constructor() {
        super();
        this.mainContainer = document.querySelector('main');
        this.modalClk = document.querySelector('.product-sel');
        this.tmbClk = document.querySelectorAll('#image-side .tmb-btn');
        this.eventsListener();
    }
    eventsListener() {
        this.modalClk.addEventListener('click', this);
        this.tmbClk.forEach(t => t.addEventListener('click', this));
    }
    handleEvent(e) {
        const ect = e.currentTarget;

        switch(e.type) {
            case 'click':
                if(ect.matches('.product-sel')) {
                    this.modalOn();
                }
                if(ect.matches('.tmb-btn')) {
                    this.thumbSel(ect);
                }
                break;
        }
    }
    modalOn() {
        let modal = this.modalCreator(this.modalClk.querySelector('img'));
        modal.style.display = 'block';
        this.mainContainer.style.position = 'relative';
        this.mainContainer.append(modal);

        debugger;
    }

    thumbSel(ect) {
        let imgMain = document.querySelector('.product-sel img'),
            newImgSrc = ect.querySelector('img').src.replace('-thumbnail', '');
        imgMain.src = newImgSrc;
    }
}