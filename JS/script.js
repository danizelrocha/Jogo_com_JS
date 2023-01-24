const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe'); 

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    console.log(marioPosition);


    if (pipePosition < 70 && pipePosition > 0  && marioPosition < 45){ 
       
        pipe.style.animation ='none'; 
        pipe.style.left = `${pipePosition}px`; 

        mario.style.animation ='none'; 
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src ='./images/mario_die.png';
        mario.style.width = '45px';

        clearInterval(loop);
    }

}, 10);



document.addEventListener('keydown',jump);