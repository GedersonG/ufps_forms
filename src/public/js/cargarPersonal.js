

//Agrega Productos
function crear(){
  nombre = true;

  let producto = {
    nombre
  }

  if(localStorage.getItem("Productos") == null){
    let productos = []
    productos.push(producto)
    localStorage.setItem("Productos",JSON.stringify(productos))
  } else{
    let productos = JSON.parse(localStorage.getItem("Productos"))
    productos.push(producto)
    localStorage.setItem("Productos",JSON.stringify(productos))
  }
  alert("Los estudiantes han sido cargados Correctamente")
  console.log("Estudiantes cargados Correctamente")
 
}