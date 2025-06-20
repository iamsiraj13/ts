 class Player{
    name:string;
    age:number;
    country:string;

    constructor(n:string, a:number, c:string){
        this.name = n;
        this.age = a;
        this.country = c
    }

    play(){
        console.log(`${this.name}  from ${this.country} is playing`)
    }
}


const mashrafi = new Player('Mashrafi',40,'bangladesh')
const sakib = new Player('sakib',39,'bangladesh')

console.log(mashrafi.name)
const players:Player[] = []

players.push(mashrafi)
players.push(sakib)

console.log(players)