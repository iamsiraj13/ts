import { Player } from "./play.js";
const mashrafi = new Player('Mashrafi', 40, 'bangladesh');
const sakib = new Player('sakib', 39, 'bangladesh');
console.log(mashrafi.age);
const players = [];
players.push(mashrafi);
players.push(sakib);
console.log(players);
