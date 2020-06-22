const Delivery =require("./delivery");
module.expots = class Maritime extends Delivery{
    constructor(v,w,pv,pw,pd) {
        super(v,w,pv,pw,pd);
        this.constantdis = 0.70
    }
    calculatePrice() {
        return this.volume * this.priceVolume + this.weight * this.priceWeight + this.priceDistance * this.constantdis;
    }
}