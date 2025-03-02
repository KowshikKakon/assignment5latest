

// last part...

document.getElementById("my_index").addEventListener("click",function(e){

    window.location.href="./answer.html";





})

function goBack() {
    window.location.href = "./index.html"; // Change this to your actual home page URL
}








document.getElementById("com1").addEventListener("click",function(e){
e.preventDefault();
let res1=document.getElementById("five");
let res2 =res1.innerText;
let res3=parseInt(res2);


let res4=document.getElementById("big");
let res5 =res4.innerText;
let res6=parseInt(res5);

// capturing the button using its id
const button1 = document.getElementById("com1");



  button1.disabled = true;

if(res3 && res6)
{
res3--;
res1.innerText=res3;
res6++;
res4.innerText=res6;
if(res3>=1){

    alert("Board updated Sucessfully")
}
else{
    alert("Board updated Sucessfully");
    alert("congrates!!! You have completed all the current task");
}



const tansac1=document.getElementById("transac_container");

let now = new Date();
let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });



    const div = document.createElement("div");
    div.innerHTML=`<h1> You have complete the task Fix Mobile Button Issue  at ${currentTime}</h1>`
    
    

    tansac1.appendChild(div);

    
}

})
document.getElementById("com2").addEventListener("click",function(){

let res1=document.getElementById("five");
let res2 =res1.innerText;
let res3=parseInt(res2);


let res4=document.getElementById("big");
let res5 =res4.innerText;
let res6=parseInt(res5);
const button1 = document.getElementById("com2");



  button1.disabled = true;
if(res3 && res6)
{
res3--;
res1.innerText=res3;
res6++;
res4.innerText=res6;
if(res3>=1){

    alert("Board updated Sucessfully")
}
else{
    alert("Board updated Sucessfully");
    alert("congrates!!! You have completed all the current task");
}

const tansac1=document.getElementById("transac_container");

let now = new Date();
let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });



    const div = document.createElement("div");
    div.innerHTML=`<h1> You have complete the task Add Dark Mode  at ${currentTime}</h1>`
    
    

    tansac1.appendChild(div);

    
}

})
document.getElementById("com3").addEventListener("click",function(){

let res1=document.getElementById("five");
let res2 =res1.innerText;
let res3=parseInt(res2);


let res4=document.getElementById("big");
let res5 =res4.innerText;
let res6=parseInt(res5);
const button1 = document.getElementById("com3");



  button1.disabled = true;
if(res3 && res6)
{
res3--;
res1.innerText=res3;
res6++;
res4.innerText=res6;
if(res3>=1){

    alert("Board updated Sucessfully")
}
else{
    alert("Board updated Sucessfully");
    alert("congrates!!! You have completed all the current task");
}


const tansac1=document.getElementById("transac_container");

let now = new Date();
let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });



    const div = document.createElement("div");
    div.innerHTML=`<h1> You have complete the task Optimize Home page  at ${currentTime}</h1>`
    
    

    tansac1.appendChild(div);

    
}

})
document.getElementById("com4").addEventListener("click",function(){

let res1=document.getElementById("five");
let res2 =res1.innerText;
let res3=parseInt(res2);


let res4=document.getElementById("big");
let res5 =res4.innerText;
let res6=parseInt(res5);
const button1 = document.getElementById("com4");



  button1.disabled = true;
if(res3 && res6)
    if(res3>=1){

        alert("Board updated Sucessfully")
    }
    else{
        alert("Board updated Sucessfully");
        alert("congrates!!! You have completed all the current task");
    }
{
res3--;
res1.innerText=res3;
res6++;
res4.innerText=res6;


const tansac1=document.getElementById("transac_container");

let now = new Date();
let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });



    const div = document.createElement("div");
    div.innerHTML=`<h1> You have complete the task Add new emoji 🤲   at ${currentTime}</h1>`
    
    

    tansac1.appendChild(div);

    
}

})
document.getElementById("com5").addEventListener("click",function(){

let res1=document.getElementById("five");
let res2 =res1.innerText;
let res3=parseInt(res2);


let res4=document.getElementById("big");
let res5 =res4.innerText;
let res6=parseInt(res5);
const button1 = document.getElementById("com5");



  button1.disabled = true;
if(res3 && res6)
{
res3--;
res1.innerText=res3;
res6++;
res4.innerText=res6;
if(res3>=1){

    alert("Board updated Sucessfully")
}
else{
    alert("Board updated Sucessfully");
    alert("congrates!!! You have completed all the current task");
}


const tansac1=document.getElementById("transac_container");

let now = new Date();
let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });



    const div = document.createElement("div");
    div.innerHTML=`<h1> You have complete the task Integrate OpenAI API  at ${currentTime}</h1>`
    
    

    tansac1.appendChild(div);

    
}

})
document.getElementById("com6").addEventListener("click",function(){

let res1=document.getElementById("five");
let res2 =res1.innerText;
let res3=parseInt(res2);


let res4=document.getElementById("big");
let res5 =res4.innerText;
let res6=parseInt(res5);
const button1 = document.getElementById("com6");



  button1.disabled = true;
if(res3 && res6)
{
res3--;
res1.innerText=res3;
res6++;
res4.innerText=res6;
if(res3>=1){

    alert("Board updated Sucessfully")
}
else{
    alert("Board updated Sucessfully");
    alert("congrates!!! You have completed all the current task");
}


const tansac1=document.getElementById("transac_container");

let now = new Date();
let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });



    const div = document.createElement("div");
    div.innerHTML=`<h1> You have complete the task Improve Job searching   at ${currentTime}</h1>`
    
    

    tansac1.appendChild(div);

    
}

})















 document.getElementById("clear").addEventListener("click", function()

{const div=document.getElementById("transac_container");

    div.innerHTML="";

})
// color change randomly...


document.getElementById("divID").addEventListener("click", function () {
    document.body.style.backgroundColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 1)`;
});

function randomColor() {
    return Math.floor(Math.random() * 256);
}




  const tansac1=document.getElementById("my_jul");
  let now = new Date();
  let currentTime = new Date().toDateString();
  
  
  
      const div = document.createElement("div");
      div.innerHTML=`
      ${currentTime}`
      
      
  
      tansac1.appendChild(div);



