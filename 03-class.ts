class Webiste{
    private url: string;
    private hit: number;
    //1
    constructor(url: string, hit: number){
        this.url = url;
        this.hit = hit;
    }
    //2 getters
    get myUrl(): string{
        return this.url;
    }

    set myUrl(url: string) {
        this.url = url;
    }
    //4 method
    public welcomeMsg(): string{
        return "Welcome to: " + this.url;
    }
}

var twitter = new Webiste("MicroTechna.com", 5000);
console.log(twitter.welcomeMsg()); // <-
console.log(twitter.myUrl); //  <-

twitter.myUrl = "twitter.com";
console.log(twitter.myUrl);