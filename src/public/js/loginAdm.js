function logear(){
  let correo =  document.getElementById("email").value;
  let clave =  document.getElementById("password").value;
  if(correo == "admin" && 
    clave == "1234"){
    window.location.href = "administrador.html";
  }
  else{
    alert("Credenciales incorrectas");
  }
}