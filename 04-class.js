"use strict";
class Car {
    constructor(list, pages) {
        this.list = list;
        this.pages = pages;
    }
    //Methods
    details() {
        console.log("Car details:");
        for (var i = 0; i < this.list.length; i++) {
            console.log(this.list[i]);
        }
    }
}
var corolla = new Car(["Silver color", "four seat", "Octen / CNG enabled"], 1);
corolla.details();
class Luxary extends Car {
    constructor(list, pages) {
        super(list, pages);
    }
    //Method override
    details() {
        console.log("Luxary car details:");
        for (var i = 0; i < this.list.length; i++) {
            console.log(this.list[i]);
        }
    }
}
var carrmy = new Luxary(["1500cc", "Roon AC", "Dollby Sound system"], 1);
carrmy.details();
