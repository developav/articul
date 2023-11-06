document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.work__button').forEach(function(tabsBtn){
      tabsBtn.addEventListener('click',function(event){
          const path = event.currentTarget.dataset.path

          document.querySelectorAll('.work__container').forEach(function(workСontainer){
              workСontainer.classList.remove('work__container-active')
          });
          document.querySelector(`[data-target = "${path}"]`).classList.add('work__container-active')
      });
      
  });
});