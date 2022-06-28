escribir();
function escribir(){
  let encuestass = JSON.parse(localStorage.getItem("Encuestass"));
  if(encuestass != null){
     document.getElementById("cuerpo").innerHTML = ""
  }
}