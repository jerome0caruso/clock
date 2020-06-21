const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hand = document.querySelectorAll('.hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    //eases in the transition at the 0 sec. so hand doesn't rotate around to get back to the start
    hand.forEach(hand => {
        if(seconds === 0) {
            hand.classList.toggle("trans");
        } 
        if(seconds === 01) {
            hand.classList.toggle("trans");
        }
    })
    //converts to degress (base 100 then adds the 90 to offset the start of hands)
    const secondsDegrees = ((seconds /60) * 360) + 90;
    const mintuesDegrees = ((minutes /60) * 360) + 90;
    const hoursDegrees = ((hours/12) * 360) + 90;
    //rotates it 
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${mintuesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
   
}
//setting function to interval of 1 sec..
setInterval(setDate, 1000);