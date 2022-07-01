const h1 = document.getElementById('Counter')
let sec =0
let min =0
let hr=0
let interval

function formatNumber(digit){
    if(digit <10){
        return('0' + digit)
    }else{
        return digit
    }
}

function start(){
    interval = setInterval(watch,1000)
}
function pause(){
  clearInterval(interval)
}

function reset(){
    clearInterval(interval)
    sec=0
    min=0
    hr=0
    h1.innerText = "00:00:00" 
}

function watch(){
    sec++
    if(sec == 60){
        min++
        sec=0
        if(min == 60){ 
            min=0
            hr++
        }
    }
    h1.innerHTML = `${formatNumber(hr)}:${formatNumber(min)}:${formatNumber(sec)}`
}