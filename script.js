let dynamicContentDiv = document.querySelector('.dynamic-content');
let mainDiv = document.querySelector('.main-div');
let nameDiv = document.querySelector('.name-div');
let birthDiv = document.querySelector('.birth-div');
let acheiveDiv = document.querySelector('.acheive-div');
let familyDiv = document.querySelector('.family-div');
let submitDiv = document.querySelector('.submit-div');

let nameInput = document.querySelector('.name-input');
let acheiveInput = document.querySelector('.acheive-input');

let startBtn = document.querySelector('.start-btn');
let nextBtn1 = document.querySelector('.next1');
let nextBtn2 = document.querySelector('.next2');
let nextBtn3 = document.querySelector('.next3');
let nextBtn4 = document.querySelector('.next4');
let submitBtn = document.querySelector('.submit-btn');

setInterval(()=>{
let a = Math.round(Math.random()*254)
let b = Math.round(Math.random()*254)
let c = Math.round(Math.random()*254)

document.body.style.background = `rgba(${a},${b},${c},0.2)`

},1100)

let gift = document.querySelector('.gift');
let sec=5
gift.innerHTML = `Simple Contact form but HIGH Functionality . Like this will disappear in ${sec} seconds.`
setInterval(()=>{
    sec--;
    gift.innerHTML = `Simple Contact form but HIGH Functionality . Like this will disappear in ${sec} seconds.`
},1000)
setTimeout(()=>{
    document.body.removeChild(gift);
},5000)

startBtn.addEventListener("click",function(){
    dynamicContentDiv.removeChild(mainDiv);
    dynamicContentDiv.appendChild(nameDiv); 
    nameDiv.style.display = "flex"   
})

nextBtn1.disabled = true;
nextBtn1.style.opacity = "0.5"
nextBtn2.disabled = true;
nextBtn2.style.opacity = "0.5"
nextBtn4.disabled = true;
nextBtn4.style.opacity = "0.5"

nameInput.addEventListener("input",function(){
    nextBtn1.disabled = false;
    nextBtn1.style.opacity = "1"
})

nextBtn1.addEventListener("click",function(){
    dynamicContentDiv.removeChild(nameDiv);
    dynamicContentDiv.appendChild(birthDiv);
    birthDiv.style.display = "flex"

    birthDiv.addEventListener("change",function(){
        nextBtn2.disabled = false;
        nextBtn2.style.opacity = "1"
    })

})

nextBtn2.addEventListener("click",function(){
    dynamicContentDiv.removeChild(birthDiv);
    dynamicContentDiv.appendChild(acheiveDiv);
    acheiveDiv.style.display = "flex"
})

nextBtn3.addEventListener("click",function(){    
    dynamicContentDiv.removeChild(acheiveDiv);
    dynamicContentDiv.appendChild(familyDiv);
    familyDiv.style.display = "flex"

    familyDiv.addEventListener("change",function(){
        nextBtn4.disabled = false;
        nextBtn4.style.opacity = "1"
    })
})

nextBtn4.addEventListener("click",function(){
    dynamicContentDiv.removeChild(familyDiv);
    dynamicContentDiv.appendChild(submitDiv);
    submitDiv.style.display = "flex"
})

submitBtn.addEventListener("click",function(){
    alert('Submitted Sucessfully!')
    location.reload();
})

nameDiv.style.display = "none"
birthDiv.style.display = "none"
acheiveDiv.style.display = "none"
familyDiv.style.display = "none"
familyDiv.style.marginTop = "100px"
submitDiv.style.display = "none"
dynamicContentDiv.appendChild(mainDiv);

