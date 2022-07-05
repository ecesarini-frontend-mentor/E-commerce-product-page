export class Gal {
    constructor() {
       this.tmbClk = document.querySelectorAll('#img-side .tmb-btn');
       this.eventsListener();
    }
    eventsListener() {
        this.tmbClk.forEach(t => t.addEventListener('click', this));
    }
    handleEvent(e) {
        const ect = e.currentTarget;

        switch(e) {
            case 'click':
                if(ect.matches('.tmb-btn')) {
                    debugger;
                    this.tmbImgOnClk(pos);
                }
        }
    }

    tmbImgOnClk(pos) {

    }
}