let loaderPage = document.getElementById('loaderPage')
 window.onload = function () {
     setTimeout (function () {
        loaderPage.style.animation='opacit .5s ease-in-out'

     },3800)
    setTimeout (function (){
loaderPage.classList.add('loaderPage2')
    },4000)

}


let Alldiv = document.getElementById('ValueOfUsser')
let ValueOfUsser = Alldiv.children[1]
let Result = Alldiv.children[2]

ValueOfUsser.oninput = function () {
    let ValueOfUsserNew = []

    let text = ValueOfUsser.value.split(' ')
for (let i = 0; i < text.length; i++) {
    ValueOfUsserNew.push (text[i].charAt(0).toUpperCase() + text[i].slice(1))

    Result.innerHTML = ValueOfUsserNew.join(' ')
   if(ValueOfUsser.value.length == 30) {
    Result.style.backgroundColor='tomato'
    Result.style.color='#fff'
    console.log('now red')

}else{
    Result.style.backgroundColor='#292929'
    Result.style.color='black'

 
}
   if (ValueOfUsser.value.length == 25 ) {
    Result.style.borderColor='#292929'
    
   } else {
    Result.style.borderColor='#292929'

   }
}

}
//Start effect
let DiveffectType = document.getElementById('effectType')
let start = DiveffectType.children[0]
let i = 0
let EffectResu = DiveffectType.children[1]
//function
start.onclick = function () {

 let time = setInterval(function(){
    
EffectResu.textContent +=Result.textContent[i]
i++ 
if (EffectResu.textContent.length == Result.textContent.length) {
    clearInterval(time)
    i=0
    setTimeout (function () {
        EffectResu.textContent=''
     },1000)    
}else {
    if (EffectResu.textContent.length >= 30){
console.log('true')
EffectResu.textContent=''
clearInterval(time)
i=0
    }
}
},200)
 
}
// To dolist 
let ALLdivtodolist =document.getElementById('todolist')
//===
let Valutext = ALLdivtodolist.children[0]
let create = ALLdivtodolist.children[1]
let list = ALLdivtodolist.children[2]
//====
create.onclick = function () {
    
    if (Valutext.value !='') {
        let textX = document.createTextNode('X')
    let li = document.createElement('li')
    let div = document.createElement('div')
    div.appendChild(textX)
    li.textContent=Valutext.value
  list.appendChild(div) + list.appendChild(li)
   localStorage.setItem('Todo',list)

   li.addEventListener('click',function(){
   li.classList.toggle('Active')
   li.style.backgroundColor='springgreen'
if(li.classList.contains('Active')== false)
li.style.backgroundColor='cadetblue'

})
   //close Function
div.addEventListener('click',function (){
    console.log('hi')
setTimeout(function(){
    list.removeChild(div)+ list.removeChild(li)
},400) 
setTimeout (function (){
    list.style.animation='opacit .5s ease-in-out'

},100)
setTimeout(function(){
   list.style.animation=''
},500) 
})    
//end colose func

}   
    
}