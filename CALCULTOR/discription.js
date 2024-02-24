var inp=document.querySelector(".inp")
var button=document.querySelector("button")
var result= document.getElementById("result")
button.addEventListener( "click", textet)
function textet(){
   let inp2 = 1999;
    let a=  +inp.value * +inp2;
    result.value =  "price of product is " + a + "pkr" ;
    }

