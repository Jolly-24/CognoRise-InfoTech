// Html elements
const ageInput = document.getElementById("age");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calcBtn = document.getElementById("calc")
let span = document.getElementById("BMI")
let categoryName = document.getElementById("categoryName")
let genderBtn = document.querySelectorAll(".male")
const message = document.getElementById("message")

function calcBMI(){
  if(!validInput()){
  let weight = weightInput.value;
  let height = heightInput.value;
  let bmi = weight / ((height / 100) ** 2);
let category=""
  
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }
categoryName.innerHTML = category
span.innerHTML =  bmi.toFixed(2);
clearForm()
$(".male").removeClass("ostr"); 
}
}
function validInput(){
  if(ageInput.value === "" || heightInput.value === "" || weightInput.value ===""){
      message.innerHTML= '<span class="p-2 text-danger">All inputs are required</span>';
      return true;
  }else{
      message.innerHTML="";
      return false;
  }
}

function clearForm(){
  ageInput.value=""
  weightInput.value=""
  heightInput.value=""
}
calcBtn.addEventListener("click", function(){
  if(!validInput()){
  calcBMI()
  $(".over").animate({left:"0px"},1000)}
})

$(".close").on("click", function(){
  $(".over").animate({left:"-1800px"},1000)
})

$(".male").on("click", function(){
  $(".male").removeClass("ostr"); 
  $(this).addClass("ostr");       
});

$(".reset").on("click" , function(){
  clearForm()
})

