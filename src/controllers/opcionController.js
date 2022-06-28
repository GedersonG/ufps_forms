const opcionController = {};

opcionController.list =  (req, res) => {
    req.getConnection((error, conn) =>{
        conn.query('SELECT o.*, p.id_encuesta, t.nombre from opcion as o join pregunta as p on p.id_pregunta = o.id_pregunta join tipo as t on t.id_tipo = p.id_tipo', (err, rows) =>{
            if (err) {
                res.json(err);
            } else {
                res.render('opcion', {
                    data: rows
                })
            }
        })
    })
};

opcionController.opcionByID = (req, res) => {
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

opcionController.add = (req, res) =>{
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

opcionController.create = (req, res) =>{
    console.log('Entra!!');
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO opcion set ?', [data], (err, rows) =>{
            res.redirect('/opcion');
        })
    })
}

module.exports = opcionController;