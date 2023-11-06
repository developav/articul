const closeBtn = document.querySelectorAll('.acor__label-group-close')
const label = document.querySelectorAll('.acor__label')
function close (){
    for(let i = 0; i < label.length; i++){
        label[i].addEventListener('click', () =>{
            closeBtn[i].classList.toggle('acor__label-group-close-active')
        });
    }
}
close()