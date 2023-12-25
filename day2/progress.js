document.addEventListener("DOMContentLoaded", function (){
    const progressContainer = document.querySelector('progress-container');
    const progress = document.querySelector('progress');
    const circles = document.querySelectorAll('.circle');
    const prevbtn = document.getElementById('prev');
    const nextbtn = document.getElementById('next');


    let currentValue = 1;

    const update = ()=>{
        circles.forEach((circle, index)=> {
            if (index < currentValue){
                circles.classList.add('active');
            }
            else{
                circles.classList.remove('active');
            }
        });

        const actives = document.querySelectorAll(".active");
        progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

        prevbtn.disabled = currentActive === 1;
        nextbtn.disabled = currentActive === circles.length;
    }

    prevbtn.addEventListener('click', ()=>{
        currentValue--;
        update();
    })

    nextbtn.addEventListener('click',()=>{
        currentValue++;
        update();
    })    
})