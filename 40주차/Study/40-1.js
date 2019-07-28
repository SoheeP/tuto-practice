$(document).ready(function(){
  $('#myModal').on('show.bs.modal', function () {
    $('#myInput').focus()
  })

  const targetForm  = document.getElementById('form');
  targetForm.addEventListener('submit',function(e){
    e.preventDefault()
  })

  document.getElementById('submitBtn').addEventListener('click',function(e){
    targetForm.submit()
  })
});

