alert ("Designed By: Harold, Hope It Would Be of Help!!!");

let btn = document.querySelector("#btn");
// event listener and function
btn.addEventListener('click' , function(){
  let weight = document.querySelector("#weight-input").value;
  let height = document.querySelector("#height-input").value;
  let finalbmi =(weight / (height * height) * 10000);

  document.querySelector("#bmi-output").value = finalbmi;
});

