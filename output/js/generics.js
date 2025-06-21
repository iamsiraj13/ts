"use strict";
function addId(obj) {
    let id = Math.floor(Math.random() * 10000 + 1);
    return Object.assign(Object.assign({}, obj), { id });
}
console.log(addId({
    name: 'sirajul',
    age: 25
}));
const response1 = {
    status: 200,
    type: 'good',
    data: {
        name: 'siraj',
        age: 20
    }
};
