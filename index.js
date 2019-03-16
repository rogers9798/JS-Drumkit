window.addEventListener("keydown",function(event){
   const audio= document.querySelector(`audio[data-key="${event.keyCode}"]`);
    console.log(audio);
    const key= document.querySelector(`.key[data-key="${event.keyCode}"]`);
    console.log(key);
    audio.currentTime=0;
    audio.play();
    key.classList.add('modify');
   

});
function rmTrans(event){
    
    if(event.propertyName!='transform') return;
    console.log(event.propertyName); 
    this.classList.remove('modify');
}
const keys= document.querySelectorAll('.key');
keys.forEach(key =>key.addEventListener('transitionend',rmTrans));