function logear(){
  let correo =  document.getElementById("email").value;
  if(correo == "alejandroarturousua@ufps.edu.co" || 
      correo == "gedersongustavogbot@ufps.edu.co" || 
    correo == "jesussebastianbber@ufps.edu.co" || 
    correo == "jeisonomarfort@ufps.edu.co"){
    window.location.href = "misEncuestas.html";
  }
  else{
    alert("Este correo electrónico no se encuentra registrado");
  }
}