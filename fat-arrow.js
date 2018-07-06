"use strict";
// not completed
class Taxi {
    constructor() {
        this.billAmount = 0;
        this.taxiObj = document.getElementById("taka");
    }
    run() {
        setInterval(function () {
            this.billAmount++;
            this.taxiObj.innnerText = this.billAmount;
        }, 500);
    }
}
