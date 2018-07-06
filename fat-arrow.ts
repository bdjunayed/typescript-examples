// not completed
class Taxi{
    billAmount: number;
    taxiObj: HTMLElement;

    constructor() {
        this.billAmount = 0;
        this.taxiObj = document.getElementById("taka");
    }

    run(): void{
        setInterval(function() {
            this.billAmount++;
            this.taxiObj.innnerText = this.billAmount;
        }, 500);
    }
}