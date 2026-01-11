// const button=document.getElementById("enter");
// const input= document.getElementById("userinput");
// const ul=document.querySelector("ul");


// button.addEventListener("click",function(){
//     if (input.value.length>0){
//         var li=document.createElement("li");
//         li.appendChild(document.createTextNode(input.value))
//         ul.appendChild(li);
//         input.value="";
//         var but=document.createElement("button");
//         console.log(but)
//         but.appendChild(document.createTextNode("Delete"))

//         li.appendChild(but)
//         but.addEventListener("click",function(){
           
//         })
//     }
// })

// ul.addEventListener("click",function(event){
//     if(event.target.tagName==="LI"){
//         event.target.classList.toggle("done")
//         console.log(event.target.classList)
//     }
// })



// addEventListener("keyup",function(){
//    console.log(input.value);
// })


//backround generator 

const h3=document.querySelector("h3");
const color1=document.getElementsByClassName("color1")[0];
const color2=document.getElementsByClassName("color2")[0];
const body=document.getElementById("gradient");
console.log(body.style.background)

function setgradient(){
  body.style.background="linear-gradient(to right,"+color1.value+", "+color2.value+")" ;
  
 h3.textContent=body.style.background


}

color1.addEventListener("input",setgradient)

color2.addEventListener("input",setgradient)



setgradient()