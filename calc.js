let screen = document.getElementById('scr')
let btns = document.querySelector('.button')


let offScreen = () => {
    screen.value = ""
    screen.style.background = "#636361"
    screen.style.border = "1px solid #636361"
    btns.forEach(btn =>{
        btn.disabled=true;
    })
}
offScreen();

function s_off(){
    offScreen();

}
function s_on(){
    screen.style.background = "rgb(241,241,241)"
    screen.style.border = "2px solid #c0c0c0"
    btns.forEach(btn =>{
        btn.disabled=false;
    })
}
function equal(){
    try{
        screen.value = eval(screen.value)
    }
    catch{
        screen.value = 'Error!'
    }
}
function factorial(){
    let i,num,f;
    f=1;
    num = screen.value;
    for(i=1;i<=num;i++){
        f=f*i;
       }
    screen.value = f;
}
function negate(){
    let num, neg;
    num = screen.value;
    neg = -parseFloat(num);
    screen.value = neg;
}
function percentage(){
    let num,per;
    num = screen.value;
    per = parseFloat(num/100);
    screen.value = per;
}