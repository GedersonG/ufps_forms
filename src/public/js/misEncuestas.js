function añadirEncuestas(){
    var res = document.querySelector("#cuerpo");
    for(var i =0; i<3; i++){
    res.innerHTML+= `
    <div class="container-fluid row mx-1 mt-2 " id="cuerpo">
  <div id="tituloEncuesta" class="col-sm-1 col-md-1 mt-3" >
      <h1>Encuesta # 1</h1>
    </div>
    <div class="container-fluid  row mx-1">
      <div class="d-none-2 d-lg-block col-9 col-md-9 fw-bold text center mb-4">
      <h2 id="descripcionEncuesta">nombre</h2>
    </div>
      <div class="col-1 col-md-1">
        <a type="button" href="encuestaAdmin.html" class="btn btn-default btn-circle mb-3 mx-5">
        <i class="fa fa-edit" style="font-size:100px;"></i>
      </a>
      <a type="button" href="" class="btn btn-default btn-circle mb-3 mx-5">
        <i class="fa fa-trash" style="font-size:100px;"></i>
      </a>
    </div>
    </div>
    </div>
`
}      
}
//añadirEncuestas();
escribir();
function escribir(){
  let encuestas = JSON.parse(localStorage.getItem("Encuestas"));
  if(encuestas != null){
     document.getElementById("cuerpo").innerHTML = ""
    document.getElementById("cuerpo").innerHTML = `
<div class="container-fluid row mx-1 mt-2 " id="cuerpo">
  <div id="tituloEncuesta" class="col-sm-10 col-md-10 mt-10" >
      <h1>Operaciones</h1>
    </div>
<br>
    <div class="container-fluid  row mx-1">
      <div class="d-none-2 d-lg-block col-9 col-md-9 fw-bold text center mb-4">
      <h2 id="descripcionEncuesta">Esta encuesta se hace con el fin de conocer si los estudiantes saben hacer operaciones aritméticas</h2>
    </div>
      <div class="col-1 col-md-1">
        <a type="button" href="encuestaAdmin.html" class="btn btn-default btn-circle mb-3 mx-5">
        <i class="fa fa-edit" style="font-size:100px;"></i>
      </a>
      <a type="button" href="" class="btn btn-default btn-circle mb-3 mx-5">
        <i class="fa fa-trash" style="font-size:100px;"></i>
      </a>
    </div>
    </div>
    </div>

<div class="container-fluid row mx-1 mt-2 " id="cuerpo">
  <div id="tituloEncuesta" class="col-sm-10 col-md-10 mt-10" >
      <h1>Satisfacción Restaurante UFPS</h1>
    </div><br>
    <div class="container-fluid  row mx-1">
      <div class="d-none-2 d-lg-block col-9 col-md-9 fw-bold text center mb-4">
      <h2 id="descripcionEncuesta">Esta encuesta está enfocada a conocer la opinión de los estudiantes acerca del servicio del restaurante UFPS</h2>
    </div>
      <div class="col-1 col-md-1">
        <a type="button" href="encuestaAdmin.html" class="btn btn-default btn-circle mb-3 mx-5">
        <i class="fa fa-edit" style="font-size:100px;"></i>
      </a>
      <a type="button" href="" class="btn btn-default btn-circle mb-3 mx-5">
        <i class="fa fa-trash" style="font-size:100px;"></i>
      </a>
    </div>
    </div>
    </div>
`
  }
}

