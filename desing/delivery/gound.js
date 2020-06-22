const Delivery =require("./delivery");
module.exports =class Ground extends Delivery{
    constructor(v,w,pv,pw,pd) {
        super(v,w,pv,pw,pd);
        this.constantdis = 0.45
    }
    calculatePrice() {
        return this.volume * (this.priceVolume*this.constantdis) + this.weight * (this.priceWeight*this.constantdis) + this.priceDistance * this.constantdis;
    }
}