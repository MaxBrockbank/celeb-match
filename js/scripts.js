$(document).ready(function(){

  $("#dating").submit(function(event){
    event.preventDefault();
    const age = parseInt($("#age").val());
    const gender = $("#gender").val();
    const music = $("#music").val();
    const pizza = $("input:radio[name=pizza]:checked").val();
    const results = $(".results");
    let score = 0;
    
    console.log(pizza);
    if(age > 0 && gender !== null && music !== null && pizza !== undefined){
        //Age condition
      if(age >= 25){
        score += 2;
      } else{
        score += 1;
      }
      //Pizza condition
      if(pizza === "yes"){
        score +=2;
      } else {
        score +=1;
      }

      if(score % 2 == 0){
        results.text("Steve Carell");
      } else{
        results.text("Will Farrell");
      }

    } else {
      results.text("Test fail");
    }
    
  })

})