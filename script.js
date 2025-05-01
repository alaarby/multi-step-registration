const nextButton = document.getElementsByClassName('btn-next')[0];
const prevButton = document.getElementsByClassName('btn-prev')[0];
const submit = document.getElementsByClassName('submit')[0];
const steps = document.querySelectorAll('.step');
const form_step = document.querySelectorAll('.form-step');
let active = 1;

nextButton.addEventListener('click', () => {
    active++;
    if(active > steps.length){
        active = steps.length;
    }
    updateProgress();
})

prevButton.addEventListener('click', () => {
    active--;
    if(active < 1){
        active = 1;
    }
    updateProgress();
})

const updateProgress = () => {

    steps.forEach((step, i) => {
        if(i == active-1){
            step.classList.add('active');
            form_step[i].classList.add('active');
        }
        else{
            step.classList.remove('active');
            form_step[i].classList.remove('active');
        }
    });


    //enable or disable prev and next buttons
    if(active === 1){
        prevButton.disabled = true;
    }else if(active === steps.length){
        nextButton.disabled = true;
    }else{
        prevButton.disabled = false;
        nextButton.disabled = false;
    }

}