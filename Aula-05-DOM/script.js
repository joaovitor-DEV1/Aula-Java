// 1 e 2

document.addEventListener("keydown", function(e){
    if (e.key === "r"){
        document.body.style.backgroundColor = "red"
        console.log(e.key)
   
    }
    else if(e.key === "g"){
        document.body.style.backgroundColor = "green"
        console.log(e.key)
    }

    else if ( e.key === "b"){
        document.body.style.backgroundColor = "blue"
        console.log(e.key)
    }

})



//3

document.addEventListener("keydown", function(e){
    if (e.key.toLowerCase() === "r"){
        document.body.style.backgroundColor = "red"
        console.log(e.key)
   
    }
    else if(e.key.toLowerCase() === "g"){
        document.body.style.backgroundColor = "green"
        console.log(e.key)
    }

    else if ( e.key.toLowerCase() === "b"){
        document.body.style.backgroundColor = "blue"
        console.log(e.key)
    }

})



//4


let cor = document.getElementById("cor")

document.addEventListener("keydown", function(e){
    if (e.key.toLowerCase() === "r"){
        document.getElementById("cor").innerHTML = "<p>red</p>";

        
   
    }
    else if(e.key.toLowerCase() === "g"){
        document.getElementById("cor").innerHTML = "<p>green</p>";

    }

    else if ( e.key.toLowerCase() === "b"){
        document.getElementById("cor").innerHTML = "<p>blue</p>";
    
    }

})

//5
document.addEventListener("keydown", function(e){
    if (e.key.toLowerCase() === "y"){
        document.body.style.backgroundColor = "yellow"
        console.log(e.key)
   
    }
    else if(e.key.toLowerCase() === "p"){
        document.body.style.backgroundColor = "purple"
        console.log(e.key)
    }


})

//6
document.addEventListener("keydown", function(e){
    if (e.key ==="x"){
        document.body.style.backgroundColor = ""

    }
})

//7 e 8

let cores = {
    blue: "#0000FF",
    red: "#FF0000",
    green: "#00FF00",
    purple: "#9D00FF",
    yellow: "#FFFF00"
}

let teclas = {

}


document.addEventListener("keydown", function(e){
    if (e.key.toLowerCase() === "y"){
        document.body.style.backgroundColor = "yellow"
        console.log(cores.yellow)
   
    }
    else if(e.key.toLowerCase() === "p"){
        document.body.style.backgroundColor = "purple"
        console.log(cores.roxo)
    }

    else if(e.key.toLowerCase() === "b"){
        document.body.style.backgroundColor = "blue"
        console.log(cores.blue)
    }

    else if(e.key.toLowerCase() === "r"){
        document.body.style.backgroundColor = "red"
        console.log(cores.red)
    }

    else if(e.key.toLowerCase() === "g"){
        document.body.style.backgroundColor = "green"
        console.log(cores.green)
    }

})

//9
let coress = ["red", "green", "blue", "purple", "yellow"]
let contador = 0

document.addEventListener("keydown", function(){

    document.body.style.backgroundColor = cores[contador]
    contador++
    if (contador>=cores.length){
        contador=0
    }
})


//10

document.addEventListener("keydown", function(e){
    if (e.key === "n"){
        document.body.style.backgroundColor = "black"
        document.body.style.color="white"
   
    }
    else if(e.key === "d"){
        document.body.style.backgroundColor = "white"
        document.body.style.color="black"

    }

    
})
