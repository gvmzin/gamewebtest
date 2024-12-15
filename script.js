const naruto = document.querySelector('.naruto');
const kunai = document.querySelector('.kunai');
const jump = () => {
    naruto.classList.add('pulo');
    setTimeout(()=> {
        naruto.classList.remove('pulo');
    }, 800);
}

const loop = setInterval(()=>{
    const kunaiposition = kunai.offsetLeft;
    const narutoposition = +window.getComputedStyle(naruto).top.replace("px", "");

    console.log(narutoposition);

    if(kunaiposition<=40 && kunaiposition>0 && narutoposition>=300){

        kunai.style.animation = "none";
        kunai.style.left = `${kunaiposition}px`;

        naruto.style.animation = "none";
        naruto.style.top = `${narutoposition}px`;
        naruto.src="/imagens/gamerover.png";
        
        clearInterval(loop)
    }
}, 10);

document.addEventListener('keydown', jump);
