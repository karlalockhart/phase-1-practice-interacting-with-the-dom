
const counterElement = document.getElementById(`counter`)
const minusOneFromCounter = document.querySelector(`button`) 
const plusOneToCounter = document.getElementById('plus')
const formElement = document.getElementById('comment-form')
const commentsContainer = document.getElementById('list')
const heartButton = document.getElementById('heart')
const likesContainer = document.querySelector('.likes')
const pauseButton = document.getElementById('pause')
const submitButton = document.getElementById('submit')

const updateCounter = document.getElementById(`counter`)
let intervalID = setInterval(increment, 1000)
let paused = false

minusOneFromCounter.addEventListener(`click`, (e)=>{
    const lowerCounter = document.getElementById(`.counter`) 
    lowerCounter.innerText-- 
}) 
minusOneFromCounter.addEventListener(`click`, ()=> counterElement.innerText--) 

//const plusOneToCounter = document.getElementById('plus')
plusOneToCounter.addEventListener('click', () => counterElement.innerText++)


formElement.addEventListener('submit', (e) => {
    e.preventDefault()
plusOneToCounter.addEventListener('click', (e) => {
    const plusCounter = document.getElementById('plus')
    plusCounter.innerText++
    // Get user's comment
    const theComment = e.target.comment.value
    // put that text in a new element
    const p = document.createElement('p')
    p.innerText = theComment
    // append the new element to the DOM
    commentsContainer.append(p)
    e.target.reset()
    })
})

const addNumberLikes = document.getElementById('heart')
heartButton.addEventListener('click', () => {
    const theNumber = counterElement.innerText
    const foundLi = document.getElementById(`num-${theNumber}`)

    if (foundLi) {
        const thatSpan = foundLi.querySelector('span')
        thatSpan.innerText++
        if(thatSpan.innerText == 2)
        foundLi.append('s')
    } else {
    const theText = theNumber + " has been liked <span>1</span> time"
    const li = document.createElement('li')
    li.id = `num-${theNumber}`
    li.innerHTML = theText
    likesContainer.append(li)
    }

} )

pauseButton.addEventListener('click', () => {
    paused = !paused
    const buttons = [plusOneToCounter, minusOneFromCounter, heartButton, submitButton]
    buttons.forEach(button => button.disabled = paused)
    pauseButton.innerText = paused ? 'resume' : 'pause'
    if(paused) {
        clearInterval(intervalID)
    } else {
        intervalID = setInterval(increment, 1000)
    }
})

addNumberLikes.addEventListener('click', (e) => {
    /* add text "this number has been liked this many times" 
    to the unordered list section */
    const likeMessages = document.getElementsByClassName('likes')
    likeMessages.addEventListener
})

function increment() {
    counterElement.innerText++
}























/*
const minusOneFromCounter = document.querySelector(`button`) 

minusOneFromCounter.addEventListener(`click`, (e)=>{
    const lowerCounter = document.getElementById(`minus`) 
    lowerCounter.innerText-- 
})
*/
/*
const minusOneFromCounter = document.querySelector(`button`) 

minusOneFromCounter.addEventListener('click', (e)=>{
    const lowerCounter = document.getElementById('minus') 
    const lowerCounter = document.getElementById('.counter') 
    lowerCounter.innerText-- 
}) 

const plusOneToCounter = document.querySelector('.counter')

plusOneToCounter.addEventListener('click', (e) => {
    const plusCounter = document.getElementById('plus')
    plusCounter.innerText++
})
*/
/*
const minusOneFromCounter = document.querySelector(`button`) 

minusOneFromCounter.addEventListener(`click`, (e)=>{
    const lowerCounter = document.getElementById(`.counter`) 
    const lowerCounter = document.getElementById(`counter`) 
    lowerCounter.innerText-- 
}) 

const plusOneToCounter = document.querySelector('.counter')
const plusOneToCounter = document.getElementById('plus')

plusOneToCounter.addEventListener(`click`, ()=> {
    const addCounter = document.getElementById(`counter`) 
    addCounter.innerText++
})
// plusOneToCounter.addEventListener('click', (event) => {
//     const plusCounter = document.getElementById('plus')
//     plusCounter.innerText++
// }) 

plusOneToCounter.addEventListener('click', (e) => {
    const plusCounter = document.getElementById('plus')
    plusCounter.innerText++
})
*/


//"use strict";
/*function _toConsumableArray(a){
    if(Array.isArray(a)){
        for(var b=0,c=Array(a.length);
        b<a.length; b++)c[b]=a[b];
        return c
    }
    return Array.from(a)
}
    
    var playing=!0,
        timer=function(){
            return setInterval(function(){var a=document.getElementById("counter"),
        b=parseInt(a.innerText);a.innerText=b+1},1e3)},
        
        interval=timer(),
        minus=document.getElementById("minus"),
        plus=document.getElementById("plus"),
        heart=document.getElementById("heart"),
        pause=document.getElementById("pause"),
        commentForm=document.getElementsByTagName("form")[0];
        minus.addEventListener("click",
        
        function(){
            var a=document.getElementById("counter"),
        b=parseInt(a.innerText);
        
        a.innerText=b-1}),
        plus.addEventListener("click",
        
        function(){
            var a=document.getElementById("counter"),
        b=parseInt(a.innerText);
        a.innerText=b+1}),
        heart.addEventListener("click",function(){
            var a=document.getElementById("counter"),
        b=parseInt(a.innerText),
        c=document.querySelector(".likes"),
        d=void 0;
        if([].concat(_toConsumableArray(c.children)).map(function(a){
            return parseInt(a.dataset.num)}).includes(b)){
                d=document.querySelector('[data-num="'+b+'"]');
        var e=parseInt(d.children[0].innerText);
        d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"}else(d=document.createElement("li")).setAttribute("data-num",b),
        d.innerHTML=b+" has been liked <span>1</span> time",
        c.appendChild(d)}),pause.addEventListener("click",function(){
            playing?(playing=!1,clearInterval(interval),
            this.innerText="resume"):(playing=!0,interval=timer(),
            this.innerText="pause"),[].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){
                "pause"!==a.id&&(a.disabled=!playing)
            })
        }),
            commentForm.addEventListener("submit",function(a){
                a.preventDefault();
                var b=this.children[0],
                c=b.value; b.value="";
                var d=document.querySelector(".comments"),
                e=document.createElement("p");
                e.innerText=c,
                d.appendChild(e)
            });
            */