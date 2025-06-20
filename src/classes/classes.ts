 
interface IsPlayer{
    name:string, 
    country:string,
    play:()=>void;
    getAge():number 
}

   class Player implements IsPlayer{
    constructor(
        public name: string,
        private age:number,
        public country: string
     ){
       this.name = name;
       this.age = age;
       this.country = country
    }

    getAge() {
        return this.age
    }
    play(){
        console.log(`${this.name}  from ${this.country} is playing`)
    }
}

const mashrafi = new Player('Mashrafi',40,'bangladesh')
const sakib:IsPlayer = new Player('sakib',39,'bangladesh')
 
const players:IsPlayer[] = []

players.push(mashrafi)
players.push(sakib)
console.log(players)