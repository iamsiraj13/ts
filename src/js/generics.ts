
function addId<T>(obj:T){
    let id = Math.floor(Math.random()*10000 +1);

    return {...obj,id}
}
console.log(addId({
    name:'sirajul',
    age:25
}))


enum RType{
    SUCCESS, FAILURE, UNAUTHENTICATED,FORBIDDEN
}
interface APIResponse<T>{
    status:number;
    type:RType; 
    data:T
}
interface User {
    name:string,
    age:number
}

const response1:APIResponse<User>= {
    status:200,
    type:RType.SUCCESS,
    data: {
        name:'siraj',
        age:20
    }
}