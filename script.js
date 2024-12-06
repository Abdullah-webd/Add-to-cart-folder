const addbutton = document.querySelector('.add');
const subsbutton = document.querySelector('.subs');
const addcartbutton = document.querySelector('.addcart')
const doneshop = document.querySelector('.donebutton')
const bluecloth = document.querySelector('#picone')
const redcloth = document.querySelector('#pictwo')
const whitecloth = document.querySelector('#picthree')
const organiccontain = document.querySelector('.orgpic')
let counter = 0; // Declare counter outside the event listener



bluecloth.addEventListener('click', function() {
    organiccontain.innerHTML = `<img src="clothimage3 (2).webp" alt="" class="difdesign" id="picone" style=" width: 500px;">`
});

redcloth.addEventListener('click', function() {
    organiccontain.innerHTML = `<img src="clothimage3.webp" alt="" class="difdesign" id="pictwo" style=" width: 500px;">`
});

whitecloth.addEventListener('click', function() {
    organiccontain.innerHTML = `<img src="clothimage.webp" alt="" class="difdesign" id="picthree" style=" width: 500px;">`
});

doneshop.addEventListener('click', function() {
    alert(`You have sucessfull purchased the Official Mr martins T-shirt Quantity: ${counter}`)
});



addbutton.addEventListener('click', function() {
    counter += 1; // Increment the global counter variable
    const increase = document.querySelector('#number');
    increase.textContent = `${counter}`; // Update the text content
});

subsbutton.addEventListener('click', function() {
    if(counter == 0){
        alert('U have not added an item yet')
        return
    }else{
        counter -= 1; // decrease the global counter variable
        const increase = document.querySelector('#number');
        increase.textContent = `${counter}`; // Update the text content
    }
    
});
addcartbutton.addEventListener('click',function(){
    cartdisplay = document.querySelector('.num')
    cartdisplay.textContent = `${counter}`; // Update the text content  
})
