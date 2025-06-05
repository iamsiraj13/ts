export class Player{
    public name:string;
    public age:number;
    public country:string;

    constructor(n:string, a:number, c:string){
        this.name = n
        this.age = a
        this.country = c

    }
    
    play(){
        console.log(`${name} is from ${this.country}`)
    }
}