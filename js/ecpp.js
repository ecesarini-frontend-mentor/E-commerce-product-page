import {Gal} from './gal.js';
/*
    FIXED: 
        - adjusted 'leftbar' flex behaviour;
        - start from 'gal.js@203' and check 'main' background in 'style.css'. It doesn't show style pattern requested;
        - some fixes about style;
        - 'gal.js@83' about changing on viewport. Fix switching from mobile to desktop.
        - check: Desktop:\\gal-style.check.jpg: '.pop-cart-create' ./style.css@353 positioning; ./js/galmq.js@21,22 behavior. Dependend on parent containers' height.
    TODO: 
        - transition issue (a bit mess): check out around index.html@22, style.css@479, js/gal.js@220;
        - transitioning leftbar: (ref: https://stackoverflow.com/questions/3331353/transitions-on-the-css-display-property)
            './style.css@490' 'index.html@22' 'js/gal.js@76'
        - check style.css@582:'overflow-y' to accomplish design on 375px instead 700px :)
*/

function ecppjs() {
    new Gal();
}

ecppjs();