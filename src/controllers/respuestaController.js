const respuestaController = {};

respuestaController.list =  (req, res) => {
    req.getConnection((error, conn) =>{
        conn.query('SELECT r.id_respuesta, o.texto, e.correo from respuesta as r join opcion as o on o.id_opcion = r.id_opcion join encuestado as e on e.id_encuestado = r.id_encuestado', (err, rows) =>{
            if (err) {
                res.json(err);
            } else {
                res.render('respuesta', {
                    data: rows
                })
            }
        })
    })
};

respuestaController.opcionByID = (req, res) => {
    const {id} = req.params;
    //console.log(id, id);
    req.getConnection((error, conn) =>{
        conn.query('SELECT o.*, t.nombre, p.id_encuesta from opcion as o inner join pregunta as p on p.id_pregunta = ? inner join tipo as t on t.id_tipo = p.id_tipo where o.id_pregunta = ?', [id, id], (err, rows) =>{
            if (err) {
                res.json(err);
            } else {
                //console.log(rows);
                res.render('opcion', {
                    data: rows
                })
            }
        })
    })
};

respuestaController.add = (req, res) =>{
    const {id} = req.params;
    console.log(id);
    req.getConnection((err, conn) =>{
        conn.query('', (err, rows) =>{
            console.log(rows);
            res.render('opcion_add', {
                data: id
            });
        });
    });
}

respuestaController.create = (req, res) =>{
    console.log('Entra!!');
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO respuesta set ?', [data], (err, rows) =>{
            res.redirect('/respuesta');
        })
    })
}

module.exports = respuestaController;