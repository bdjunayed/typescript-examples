class Car{
    list: Array<string>;
    pages: number;

    constructor(list: Array<string>, pages: number){
        this.list = list;
        this.pages = pages;
    }

    //Methods
    details(): void{
        console.log("Car details:");
        for(var i=0; i<this.list.length; i++){
            console.log(this.list[i]);
        }
    }    
}

var corolla = new Car(["Silver color", "four seat", "Octen / CNG enabled"], 1);
corolla.details();

class Luxary extends Car{
    constructor(list: Array<string>, pages: number){
        super(list,pages);
    }

    //Method override
    details(): void{
        console.log("Luxary car details:");
        for(var i=0; i<this.list.length; i++){
            console.log(this.list[i]);
        }
    }
}

var carrmy = new Luxary(["1500cc", "Roon AC", "Dollby Sound system"], 1);
carrmy.details();