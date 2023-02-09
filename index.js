const num1=document.getElementById('num1');
const num2=document.getElementById('num2');
const num3=document.getElementById('num3');
const img1=document.getElementById('img1');
const img2=document.getElementById('img2');
const img3=document.getElementById('img3');
var varIn=0
var varIn1=0
var VarIn2=0
img1.addEventListener("mouseover",()=>{
   ref= setInterval(fun1,0.1);


    
})
img2.addEventListener('mouseover',()=>{
    ref1= setInterval(fun2,0.1);

})
img3.addEventListener('mouseover',()=>{
    ref2= setInterval(fun3,0.1);

})


function fun2(){
    if(varIn1>15000){
        clearInterval(ref1)
        return

    }
    num2.innerHTML=varIn1
    varIn1=varIn1+15
}
function fun1(){
    if(varIn>4000){
        clearInterval(ref)
        return

    }
    num1.innerHTML=varIn
    varIn=varIn+5
}
function fun3(){
    if(VarIn2>500){
        clearInterval(ref2)
        return

    }
 num3.innerHTML=VarIn2
  VarIn2=VarIn2+1
}