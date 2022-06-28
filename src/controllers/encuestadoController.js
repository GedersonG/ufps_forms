const encuestadoController = {};

encuestadoController.list =  (req, res) => {
    req.getConnection((error, conn) =>{
        conn.query('SELECT e.id_encuestado, p.nombre, e.correo from encuestado as e inner join poblacion as p on p.id_poblacion = e.id_poblacion ORDER BY 1', (err, rows) =>{
            if (err) {
                res.json(err);
            } else {
                //console.log(rows);
                res.render('cargarPersonal', {
                    data: rows
                })
            }
        })
    })
};

encuestadoController.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO encuestado set ?', [data], (err, rows) =>{
            if (err) {
                res.json(err);
                console.log(err);
            } else {
                res.redirect('/encuestados');
            }
        })
    })
}

encuestadoController.encuestas =  (req, res) => {
    req.getConnection((error, conn) =>{
        const {id} = req.params;
        conn.query('SELECT e.titulo, e.descripcion, e.fecha, en.id_encuestado from encuesta as e inner join poblacion as p on p.id_poblacion = e.id_poblacion inner join encuestado as en on en.id_poblacion = p.id_poblacion where en.id_encuestado = ? ORDER BY 3', [id] ,(err, rows) =>{
            if (err) {
                res.json(err);
            } else {
                console.log(rows);
                res.render('encuestados_encuestas', {
                    data: rows
                });
            }
        })
    })
};

encuestadoController.preguntas =  (req, res) => {
    req.getConnection((error, conn) =>{
        const {id} = req.params;
        conn.query('SELECT e.titulo, e.descripcion, e.fecha from encuesta as e inner join poblacion as p on p.id_poblacion = e.id_poblacion inner join encuestado as en on en.id_poblacion = p.id_poblacion where en.id_encuestado = ? ORDER BY 3', [id] ,(err, rows) =>{
            if (err) {
                res.json(err);
            } else {
                console.log(rows);
                res.render('encuestados_encuestas', {
                    data: rows
                });
            }
        })
    })
};

encuestadoController.sesion =  (req, res) => {
    const data = req.body;
    //console.log(data);
    var XD = new Array();
    req.getConnection((error, conn) =>{
        conn.query('Select e.*, en.* from encuestado as e join poblacion as p on p.id_poblacion = e.id_poblacion join encuesta as en on en.id_poblacion = p.id_poblacion where e.id_poblacion = en.id_poblacion', (err, rows) =>{
            console.log(rows);
            let condicion=false;
            //console.log(rows);
            for(let i=0 ; i<rows.length;i++){
                //console.log(data.correo.toString())
                //console.log(rows[i].correo)
                if(data.correo.toString()==rows[i].correo){
                        condicion=true;
                        //console.log(rows[i]);
                        XD.push(rows[i])
                        console.log(XD);
                        //const result = Object.assign(data, {id_poblacion: rows[i].id_poblacion});
            }
            }
            if(condicion){
                res.render('misEncuestas', {
                    data: XD
                })
            }
            else{res.redirect('/');}
        })
        
    })
}

encuestadoController.poblacion =  (req, res) => {
    req.getConnection((error, conn) =>{
        const {id} = req.params;
        conn.query('SELECT correo from encuestado where id_poblacion = ?', [id],(err, rows) =>{
            if (err) {
                res.json(err);
            } else {
                console.log(rows);
                res.render('visualizar', {
                    data: rows
                });
            }
        })
    })
};

module.exports = encuestadoController;