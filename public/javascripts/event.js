document.addEventListener("click", changeColor);

function changeColor() {  
  if (document.getElementById("color").style.backgroundColor == "red"){
      document.getElementById("color").style.backgroundColor = "blue"
 }else document.getElementById("color").style.backgroundColor = "red"
}