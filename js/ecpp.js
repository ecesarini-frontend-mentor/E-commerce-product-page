import {Gal} from './gal.js';
/*
    FIXED: 
        - adjusted 'leftbar' flex behaviour;
        - start from 'gal.js@203' and check 'main' background in 'style.css'. It doesn't show style pattern requested;
        - some fixes about style;
        - 'gal.js@83' about changing on viewport. Fix switching from mobile to desktop.
    
    TODO: 
        - check: Desktop:\\gal-style.check.jpg: '.pop-cart-create' ./style.css@353 positioning; ./js/galmq.js@21,22 behavior.

*/

function ecppjs() {
    new Gal();
}

ecppjs();