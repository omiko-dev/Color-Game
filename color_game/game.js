

let btn = document.querySelector('button');
let box = document.querySelectorAll('.box');
let rgbCode = document.querySelector('h3');
let result = document.querySelector('.result');
let inResult = document.querySelectorAll('in_result');
let restart = document.querySelector('.restart')


function randomColor(){
     y = [];

     r = Math.round(Math.random() * 255);
     g = Math.round(Math.random() * 255);
     b = Math.round(Math.random() * 255);

     y.push(`rgb(${r},${g},${b})`);

     return y;
};

// function boxShadow(){
     let boxShadow = `0 -40px 100px, 0 0 2px, 0 0 1em ${randomColor()}, 0 0 0.5em ${randomColor()},
     0 0 0.1em ${randomColor()}, 0 10px 3px ${randomColor()};`
     console.log(boxShadow);

//      console.log(boxShadow);
// }

btn.addEventListener('click', function(){

     box.forEach(rent => {
          rent.style.display = 'flex';
          rent.style.backgroundColor = randomColor();
          rent.style.boxShadow = boxShadow
     });


     x = Math.round(Math.random() * box.length - 1);

     rgbCode.innerHTML = box[x].style.backgroundColor
});


restart.addEventListener('click', function(){
     location.reload()
})



box.forEach(bo => {
     bo.addEventListener('click', function(){

          if(bo.style.backgroundColor == rgbCode.innerText){
               result.innerHTML = `it's correct✅`;
               bo.style.opacity = 1;
               restart.style.display = 'block'    
          }
          else{
               result.innerHTML = 'try again...'
               bo.style.opacity = 0.2
          };
          
     });
});

