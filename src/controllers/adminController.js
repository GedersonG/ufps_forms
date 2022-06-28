const adminController = {};

adminController.list =  (req, res) => {
    req.getConnection((error, conn) =>{
        conn.query('SELECT * FROM admin', (err, rows) =>{
            if (err) {
                res.json(err);
            } else {
                //console.log(rows);
                res.render('ingresarAdmin', {
                    data: rows
                })
            }
        })
    })
};

adminController.sesion =  (req, res) => {
    const data = req.body;
    req.getConnection((error, conn) =>{
        conn.query('Select * from admin', (err, rows) =>{
            let condicion=false;
            for(let i=0 ; i<rows.length && !condicion ; i++){
                console.log(data.nombre.toString())
                console.log(rows[i].nombre)
                console.log(data.clave.toString())
                console.log(rows[i].clave)
                if(data.nombre.toString()==rows[i].nombre&&data.clave.toString()==rows[i].clave){
                        condicion=true;
                }
            }
            if(condicion){
                res.redirect('administrador');}
            else{res.redirect('/admin');}
        })
        
    })
} 

adminController.admin =  (req, res) => {
    req.getConnection((error, conn) =>{
        conn.query('SELECT e.id_encuesta, p.nombre, e.titulo, e.descripcion, e.fecha, e.habilitada from encuesta as e inner join poblacion as p on p.id_poblacion = e.id_poblacion where e.habilitada = 1 ORDER BY 1', (err, rows) =>{
            if (err) {
                res.json(err);
            } else {
                res.render('administrador', {
                    data: rows
                })
            }
        })
    })
};

module.exports = adminController;