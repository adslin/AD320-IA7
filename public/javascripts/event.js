document.addEventListener("click", changeColor);

function changeColor() {  
  if (document.getElementById("color").style.backgroundColor == "blue"){
      document.getElementById("color").style.backgroundColor = "red"
 }else document.getElementById("color").style.backgroundColor = "blue"
}