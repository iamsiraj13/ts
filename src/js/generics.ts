
function addId<T>(obj:T){
    let id = Math.floor(Math.random()*10000 +1);

    return {...obj,id}
}
console.log(addId({
    name:'sirajul',
    age:25
}))

interface APIResponse<T>{
    status:number;
    type:string; 
    data:T
}
interface User {
    name:string,
    age:number
}

const response1:APIResponse<User>= {
    status:200,
    type:'good',
    data: {
        name:'siraj',
        age:20
    }
}