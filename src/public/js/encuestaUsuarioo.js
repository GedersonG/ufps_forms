function crear(){
  nombre = true;

  let encuestaa = {
    nombre
  }

  if(localStorage.getItem("Encuestass") == null){
    let encuestass = []
    encuestass.push(encuestaa)
    localStorage.setItem("Encuestass",JSON.stringify(encuestass))
  } else{
    let encuestass = JSON.parse(localStorage.getItem("Encuestass"))
    encuestass.push(encuestaa)
    localStorage.setItem("Encuestass",JSON.stringify(encuestass))
  }

  
  alert("No tiene más encuestas por llenar")
  window.location.href="misEncuestass.html"
  console.log("encuestass borradass Correctamente")
 
}