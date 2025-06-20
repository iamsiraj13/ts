 export class Player{
    constructor(
        private name: string,
        public age:number,
        public country: string
     ){
       this.name = name;
       this.age = age;
       this.country = country
    }

    play(){
        console.log(`${this.name}  from ${this.country} is playing`)
    }
}
