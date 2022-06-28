const encuestaController = {};

encuestaController.list =  (req, res) => {
    req.getConnection((error, conn) =>{
        conn.query('SELECT e.id_encuesta, p.nombre, e.titulo, e.descripcion, e.fecha, e.habilitada from encuesta as e inner join poblacion as p on p.id_poblacion = e.id_poblacion ORDER BY 1', (err, rows) =>{
            if (err) {
                res.json(err);
            } else {
                //console.log(rows);
                for (let i = 0; i < rows.length; i++) 
                    rows[i].habilitada = rows[i].habilitada == '0' ? 'NO' : 'SI';
                
                res.render('crearEncuesta', {
                    data: rows
                })
            }
        })
    })
};

encuestaController.encuestaById =  (req, res) => {
    const {id} = req.params;
    req.getConnection((error, conn) =>{
        conn.query('SELECT p.id_pregunta, e.titulo, e.descripcion, p.enunciado, p.id_tipo, o.texto from encuesta as e join pregunta as p on p.id_encuesta = e.id_encuesta join opcion as o on o.id_pregunta = p.id_pregunta where e.id_encuesta = ?', [id], (err, rows) =>{
            if (err) {
                res.json(err);
            } else {
                console.log(rows);             
                res.render('encuestaUsuario', {
                    data: rows
                })
            }
        })
    })
};

encuestaController.save = (req, res) => {
    const data = req.body;
    const result = Object.assign(data, {habilitada: '1'});
    console.log(result);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO encuesta set ?', [result], (err, rows) =>{
            if (err) {
                res.json(err);
                console.log(err);
            } else {
                console.log(rows);
                res.redirect('/encuesta');
            }
        })
    })
}

encuestaController.fin =  (req, res) => {
    req.getConnection((error, conn) =>{
        conn.query('SELECT e.id_encuesta, p.nombre, e.titulo, e.descripcion, e.fecha, e.habilitada from encuesta as e inner join poblacion as p on p.id_poblacion = e.id_poblacion where e.habilitada = 0 ORDER BY 1', (err, rows) =>{
            if (err) {
                res.json(err);
            } else {
                //console.log(rows);
                for (let i = 0; i < rows.length; i++) 
                    rows[i].habilitada = rows[i].habilitada == '0' ? 'NO' : 'SI';
                
                res.render('encuestasFinalizadas', {
                    data: rows
                })
            }
        })
    })
};

module.exports = encuestaController;