//first Container
let icon1=document.querySelector(".icon-first")
let icon2=document.querySelector(".icon-second")
let icon3=document.querySelector(".icon-third")
let place1=document.getElementById("first-container")
let place2=document.getElementById("second-container")
let place3=document.getElementById("third-container")
function move1(){
    place3.style.display="none"
    place2.style.display="none"
    place1.style.display="flex"
}
icon1.addEventListener("click", move1)
function move2(){
     place1.style.display="none"
     place3.style.display="none"
    place2.style.display="flex"
}
icon2.addEventListener("click", move2)
function move3(){
    place1.style.display="none"
    place2.style.display="none"
   place3.style.display="flex"
}
icon3.addEventListener("click", move3)

//second container
let addBtnWishContainer=document.querySelector("ul")
let containerCount=document.querySelector(".div-count")
let count=1

// third container
let inputOfWish=document.querySelector(".input")
let addBtn=document.querySelector(".lastBtn")
let container=document.querySelector(".wishContainer")
let wish=""

//input
addBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    wish=inputOfWish.value
    let x=document.createElement("div")
    container.appendChild(x)
    x.innerText= wish.valueOf()
    containerCount.style.display="flex"
    containerCount.innerText=count
    count++
})

//html
let li_nr1=document.querySelector("#SnikersBt")
let li_nr2=document.querySelector("#MarsBt")
let li_nr3=document.querySelector("#KdBt")
let li_nr4=document.querySelector("#BoBt")
let li_nr5=document.querySelector("#KKBt")
let li_nr6=document.querySelector("#TxBt")
let li_nr7=document.querySelector("#mBt")
let li_nr8=document.querySelector("#LBt")
let li_nr9=document.querySelector("#DMBt")
let li_nr10=document.querySelector("#TBt")
let li_nr11=document.querySelector("#FRBt")
let li_nr12=document.querySelector("#MwBt")

let container1=document.createElement("div")
let container2=document.createElement("div")
let container3=document.createElement("div")
let container4=document.createElement("div")
let container5=document.createElement("div")
let container6=document.createElement("div")
let container7=document.createElement("div")
let container8=document.createElement("div")
let container9=document.createElement("div")
let container10=document.createElement("div")
let container11=document.createElement("div")
let container12=document.createElement("div")

let sum1=1
let sum2=1
let sum3=1
let sum4=1
let sum5=1
let sum6=1
let sum7=1
let sum8=1
let sum9=1
let sum10=1
let sum11=1
let sum12=1

addBtnWishContainer.addEventListener("click", ()=>{
    containerCount.style.display="flex"
    containerCount.innerText=count
    count++
})

li_nr1.addEventListener("click", ()=>{
   container1.innerText=sum1 + " " + li_nr1.value
    sum1++
    container.appendChild(container1)
})
li_nr2.addEventListener("click", ()=>{
   container2.innerText=sum2 + " " + li_nr2.value
    sum2++
    container.appendChild(container2)
})
li_nr3.addEventListener("click", ()=>{
    container3.innerText=sum3 + " " + li_nr3.value
     sum3++
     container.appendChild(container3)
 })
 li_nr4.addEventListener("click", ()=>{
    container4.innerText=sum4 + " " + li_nr4.value
     sum4++
     container.appendChild(container4)
 })
 li_nr5.addEventListener("click", ()=>{
    container5.innerText=sum5 + " " + li_nr5.value
     sum5++
     container.appendChild(container5)
 })
 li_nr6.addEventListener("click", ()=>{
    container6.innerText=sum6 + " " + li_nr6.value
     sum6++
     container.appendChild(container6)
 })
 li_nr7.addEventListener("click", ()=>{
    container7.innerText=sum7 + " " + li_nr7.value
     sum7++
     container.appendChild(container7)
 })
 li_nr8.addEventListener("click", ()=>{
    container8.innerText=sum8 + " " + li_nr8.value
     sum8++
     container.appendChild(container8)
 })
 li_nr9.addEventListener("click", ()=>{
    container9.innerText=sum9 + " " + li_nr9.value
     sum9++
     container.appendChild(container9)
 })
 li_nr10.addEventListener("click", ()=>{
    container10.innerText=sum10 + " " + li_nr10.value
     sum10++
     container.appendChild(container10)
 })
 li_nr11.addEventListener("click", ()=>{
    container11.innerText=sum11 + " " + li_nr11.value
     sum11++
     container.appendChild(container11)
 })
 li_nr12.addEventListener("click", ()=>{
    container12.innerText=sum12 + " " + li_nr12.value
     sum12++
     container.appendChild(container12)
 })
