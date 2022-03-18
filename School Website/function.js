// declaration
const carousel = document.querySelectorAll(".slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// get current and carousel array
let current = 0;
const carArr =[...carousel]


//remove images
function removeimg()
{
carArr.forEach(function(cur){
cur.style.display = "none"; 
})
}


removeimg();

//display first image
function displayimg()
{
carArr[0].style.display = "block";
}

displayimg();

//display next image
function nextimg(){
    //hide image
    removeimg(); 
    
    //check position
   if( current === carArr.length - 1 ){
       current= 0
   } else{
       current++;
   }
   //display image
   carArr[current].style.display = "block";

}
//event listener
next.addEventListener('click', function(){
    nextimg();
    console.log('slay')
})
//display previous image


function previmg(){
    //hide image
    removeimg(); 
    
    //check position
   if( current === 0 ){
    current = carArr.length - 1
   } else{
       current--;
   }
   //display image
   carArr[current].style.display = "block";

}


prev.addEventListener('click', function(){
    previmg();
    console.log('slay')
})