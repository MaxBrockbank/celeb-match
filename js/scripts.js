$(document).ready(function(){

  $("#dating").submit(function(event){
    const age = parseInt($("#age").val());
    const gender = $("#gender").val();
    const music = $("#music").val();
    const pizza = $("input:radio[name=pizza]:checked").val();
    console.log(pizza);
    event.preventDefault();
  })

})