import { GalTools } from "./galtools.js";

export class GalMq extends GalTools {
    constructor() {
        super();
        this.navbar = document.querySelector('#navbar');
        this.navSitelogo = document.querySelector('.nav-sitelogo');
        this.navCat = document.querySelector('.nav-cat');
        this.leftbarContent = document.querySelector('.leftbar-content');
        this.imageSide = document.querySelector('#image-side');
        this.popCart = document.querySelector('.pop-cart-created');
        this.mainImgTargetMq = document.querySelector('.product-sel-mq-btn-previous');
        this.productSelMainImg = document.querySelector('.product-sel-main-img');
        this.productSel = document.querySelector('.product-sel');
        this.productSelMq = document.querySelector('.product-sel-mq');
    }

    mqToMobile() {
        this.mainImgTargetMq.after(this.productSelMainImg);
        this.leftbarContent.append(this.navCat);
        //this.productSelMq.prepend(this.popCart);
        this.imageSide.prepend(this.popCart);
    }

    mqToDesktop() {
        this.productSel.append(this.productSelMainImg);
        this.navSitelogo.after(this.navCat);
        this.navbar.append(this.popCart);
    }
}