import {Gal} from './gal.js';

// TODO:
//  'gal.js.modalSliderTopBnt':
//  catch the img inside slideshow

// FIXED: Modal container interactive; @gal.js:32 @style.css:235

function ecppjs() {
    
        //debug modal
        let mdl = document.querySelectorAll('.modal');
        if(mdl) mdl.forEach(m => m.remove());
    new Gal();
}

ecppjs();