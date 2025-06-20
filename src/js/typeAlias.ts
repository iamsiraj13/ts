type userType = {
    name:string,
    age:number
}

const userDetails =(
    id:string | number,
    user:userType
)=>{
    console.log(user.name)
}

function sayHello(user:userType){
    console.log(user.age)
}