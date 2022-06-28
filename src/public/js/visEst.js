escribir();
function escribir(){
  let productos = JSON.parse(localStorage.getItem("Productos"));
  if(productos != null){
     document.getElementById("tbody").innerHTML = ""
    document.getElementById("tbody").innerHTML = `
          <tr>
          <td>Alejandro Arturo Urbina Suarez</td>
          <td>alejandroarturousua@ufps.edu.co</td>
          </tr>
<tr>
          <td>Gederson Gustavo Guzman Botello</td>
          <td>gedersongustavogbot@ufps.edu.co</td>
          </tr>
<tr>
          <td>Jesus Sebastian Bermon Bermudez</td>
          <td>jesussebastianbber@ufps.edu.co</td>
          </tr>
<tr>
          <td>Jeison Omar Ferrer Ortega</td>
          <td>jeisonomarfort@ufps.edu.co</td>
          </tr>
`
  }
}

