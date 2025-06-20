"use strict";
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getAge() {
        return this.age;
    }
    play() {
        console.log(`${this.name}  from ${this.country} is playing`);
    }
}
const mashrafi = new Player('Mashrafi', 40, 'bangladesh');
const sakib = new Player('sakib', 39, 'bangladesh');
const players = [];
players.push(mashrafi);
players.push(sakib);
console.log(players);
