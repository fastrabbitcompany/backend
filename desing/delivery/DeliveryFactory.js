'use strict'
const Delivery =require("./delivery");
let Air =require("./air");
const Ground = require("./gound");
const Maritime =require("./maritime");

module.exports = class DeliveryFactory {
    constructor(props) {

    }
    createDelivery(td,v,w,pv,pw,pd){
        let d;
        console.log("peso " + w)
        switch (td) {
            case "1":
                return (new Ground(v,w,pv,pw,pd))
                break;
            case "2":
                return (new Maritime(v,w,pv,pw,pd))
                break;
            case "3":
                return (new Air(v,w,pv,pw,pd))
                break;
            default:
                return -1;
        }
    }
}
