"use strict";
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${name} is from ${this.country}`);
    }
}
const sakib = new Player('Sakib', 34, 'bangladesh');
const mashrafi = new Player('mashrafi', 34, 'bangladesh');
const players = [];
players.push(sakib);
players.push(mashrafi);
