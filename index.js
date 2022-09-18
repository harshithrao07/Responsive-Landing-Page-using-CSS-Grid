var element = document.querySelector(".features");
element.addEventListener("click",function(){
  var arrowUp = document.querySelector(".arrow-up");
  var arrowDown = document.querySelector(".arrow-down");
  arrowDown.style.display = "none";
  arrowUp.style.display = "inline-block";
})

var element1 = document.querySelector(".company");
element1.addEventListener("click",function(){
  var arrowUp = document.getElementsByClassName("arrow-up")[1];
  var arrowDown = document.getElementsByClassName("arrow-down")[1];
  arrowDown.style.display = "none";
  arrowUp.style.display = "inline-block";
})


var x = document.getElementsByClassName("main")[0]
x.addEventListener("click",function(){
  var arrowUp = document.querySelector(".arrow-up");
    var arrowUp1 = document.getElementsByClassName("arrow-up")[1];
  var arrowDown = document.querySelector(".arrow-down");
  var arrowDown1 = document.getElementsByClassName("arrow-down")[1];
  arrowDown.style.display = "inline-block";
  arrowUp.style.display = "none";
  arrowDown1.style.display = "inline-block";
  arrowUp1.style.display = "none"
})
