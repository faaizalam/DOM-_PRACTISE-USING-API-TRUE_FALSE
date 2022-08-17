

// const n=[{
//   id:1
// },
// {
//   id:2
// }

// const { disconnect } = require("process");

// ]
// document.querySelector(".id").addEventListener('click',(()=>{
//   const g=document.querySelector('.game')


//   // div.classList.add('card')
//   n.map((x)=>{
//   const div=document.createElement('div')
//   g.append(div)

//   div.setAttribute("nn",n[0].id)
// })


  




// }))



// const


const game=document.querySelector(".game")
const ScoreDisplay=document.querySelector("#Score")



const film=[{
  name:'film',
  id:11
},
{
  name:'books',
  id:10
},
{
  name:'music',
  id:12
},
{
  name:'video games',
  id:15
},




];
const levels=['hard','medium','easy']
const change=((id)=>{
  console.log(id)
 const column=   document.createElement('div')
 column.classList.add("gen-column")
 column.innerHTML=`hello${id}` 
 game.append(column)

  levels.map(async(x)=>{
   const card =document.createElement('div')
   const bu =document.createElement('button')
   card.classList.add('card')
   column.append(card)
   
   
   if (x==='easy') {
     card.innerHTML='100'
     
    }else if(x==='hard'){
      
      card.innerHTML='300'
    }else if(x==='medium'){
      
      card.innerHTML='200'
    }
    const button=document.createElement('button')
    button.classList.add('buttons')
    button.innerHTML="click me"
    
    // card.append(button)
    // card.setAttribute('onclick','edit(this)')

 let response = await fetch(`https://opentdb.com/api.php?amount=1&category=${id}&difficulty=${x}&type=boolean`)
 
 const Questions= await response.json()
card.setAttribute("data-questions",Questions.results[0].question)
card.setAttribute("data-correct",Questions.results[0].correct_answer)
card.setAttribute("data-value",card.getInnerHTML())
  
 console.log(Questions)
  
 
 
 card.addEventListener('click',edit)
// document.querySelector('.card').addEventListener('click',flipcard)
})


})
film.map((x)=>change(x.id))



// function flipcard(){
//   // const flipcard=(x)=>{
    
//     const textdisplay=document.createElement("div")
//     const Truebut=document.createElement("button")
//     const Flasebut=document.createElement("button")
//     Truebut.innerText="True"
//     Flasebut.innerText="False"
//       this.append(textdisplay,Truebut,Flasebut)
//   }



function edit(){
  // setTimeout(()=>{
      const textdisplay=document.createElement("div")
  const Truebut=document.createElement("button")
  const Flasebut=document.createElement("button")
  Truebut.innerText="True"
  Flasebut.innerText="False"
  Truebut.addEventListener('click',getResult)
  Flasebut.addEventListener('click',getResult)
  textdisplay.innerHTML= this.getAttribute('data-questions')
  this.append(textdisplay,Truebut,Flasebut)
  
  
  // this.getAttribute("class")
  // console.log(x.getAttribute("class"),'k')
  
  // if (this) {
    
    
    const allcards=Array.from(document.querySelectorAll('.card'))
    
  //  let c= allcards.map((y)=>y!==x||y===x?y.setAttribute('onclick',''):"")
  console.log(allcards)
   allcards.map((r)=>r.removeEventListener('click',edit))
  //  r.setAttribute
   
    
    
  
  
}

console.log("done")


let Score=0
function  getResult() {
  // console.log(x)
  
  const getresult=this.parentElement
  
  if (getresult.getAttribute('data-correct')===this.innerHTML) {
    
    
    Score=Score + Number(getresult.getAttribute('data-value'))
    console.log(Score)
    ScoreDisplay.innerHTML=Score
    getresult.classList.add("correct")
    setTimeout(()=>{
      const allcards=Array.from(document.querySelectorAll('.card'))
      allcards.map((r)=>r.addEventListener('click',edit))


      do {
        getresult.removeChild(getresult.lastChild)
        
      } while (getresult.firstChild);
  
      getresult.innerHTML=getresult.getAttribute('data-value')
     
      
    },1000)
    


      
    
   
    
  }else{
 
    // const allcards=Array.from(document.querySelectorAll('.card'))
    // allcards.map((r)=>r.addEventListener('click',edit))
    do {
      getresult.removeChild(getresult.lastChild)
      
    } while (getresult.firstChild);
    // getresult.innerHTML=getresult.getAttribute('data-value')
    getresult.classList.add("wrong")
    getresult.innerHTML=0
    // getresult.map((r)=>r.removeEventListener('click',edit))
    allcards.forEach((r)=>r.removeEventListener('click',edit))

  }
 
  


  
}




