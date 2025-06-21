"use strict";
function addId(obj) {
    let id = Math.floor(Math.random() * 10000 + 1);
    return Object.assign(Object.assign({}, obj), { id });
}
console.log(addId({
    name: 'sirajul',
    age: 25
}));
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const response1 = {
    status: 200,
    type: RType.SUCCESS,
    data: {
        name: 'siraj',
        age: 20
    }
};
