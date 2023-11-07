document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.acor__button').forEach(function(tabsBtn){
      tabsBtn.addEventListener('click',function(event){
          const path = event.currentTarget.dataset.path

          document.querySelectorAll('.acor__container').forEach(function(acorСontainer){
              acorСontainer.classList.remove('acor__container-active')
          });
          document.querySelector(`[data-target = "${path}"]`).classList.add('acor__container-active')
      });
      
  });
});