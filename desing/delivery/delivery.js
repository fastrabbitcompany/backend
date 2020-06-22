
module.exports= class Delivery{
    constructor(v,w,pv,pw,pd) {
        this.volume = parseFloat(v)
        this.weight =parseFloat(w);
        this.priceVolume = parseFloat(pv);
        this.priceWeight = parseFloat(pw);
        this.priceDistance = parseFloat(pd);
    }
    calculatePrice(){
        return 0;
    }
};
