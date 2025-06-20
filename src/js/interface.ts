interface Rectangle{
    width:number,
    length:number
}

interface ColoredRectangle extends Rectangle{
    color:string
}

function drawRectangle(options:ColoredRectangle){
    let width = options.width;
    let length = options.length;
    let color = options.color
}


let threeDoptions = {
    width:20,
    length:24,
    color:'blue'
}
drawRectangle(threeDoptions)