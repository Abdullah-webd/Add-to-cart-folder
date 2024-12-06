const addbutton = document.querySelector('.add');
const subsbutton = document.querySelector('.subs');
const addcartbutton = document.querySelector('.addcart')
const doneshop = document.querySelector('.donebutton')
let counter = 0; // Declare counter outside the event listener



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
