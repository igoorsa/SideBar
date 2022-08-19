function Dashboard(){
    irVoltar()

}


function percorrer(){
    let lengthSpan  = (document.querySelectorAll('span')).length
    for(let i=0 ; i<lengthSpan ; i++){
        let elem = document.querySelectorAll("span")[i]
        elem.classList.toggle("visivel")
     }
}

function irVoltar(){
    const irVoltar = document.body.querySelector("header:nth-child(1)").offsetWidth
    if( irVoltar < 200){
        document.querySelector("header:nth-child(1)").style.width = "200px"
    }else{
        document.querySelector("header:nth-child(1)").style.width = "60px" 
    }
    setTimeout(percorrer, 100)
}

