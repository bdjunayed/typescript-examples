"use strict";
class Webiste {
    //1
    constructor(url, hit) {
        this.url = url;
        this.hit = hit;
    }
    //2 getters
    get myUrl() {
        return this.url;
    }
    set myUrl(url) {
        this.url = url;
    }
    //4 method
    welcomeMsg() {
        return "Welcome to: " + this.url;
    }
}
var twitter = new Webiste("MicroTechna.com", 5000);
console.log(twitter.welcomeMsg()); // <-
console.log(twitter.myUrl); //  <-
twitter.myUrl = "twitter.com";
console.log(twitter.myUrl);
