function cargarFecha(){
  date = new Date();
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  var res = document.querySelector("#fechahoy");
  res.innerHTML = `            <h5>Fecha de caducidad</h5>
  <input type="date" name="fecha" placeholder="Titulo" class="form-control" min="${year}-${month}-${day}" value="${year}-${month}-${day}">`
}
cargarFecha();