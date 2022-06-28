const preguntaController = {};

preguntaController.list =  (req, res) => {
    req.getConnection((error, conn) =>{
        conn.query('SELECT p.id_pregunta, p.enunciado, e.titulo, t.nombre from pregunta as p inner join encuesta as e on e.id_encuesta = p.id_encuesta inner join tipo as t on t.id_tipo = p.id_tipo', (err, rows) =>{
            if (err) {
                res.json(err);
            } else {
                res.render('pregunta', {
                    data: rows
                })
            }
        })
    })
};

preguntaController.preguntasByID = (req, res) => {
    //console.log('Entramosss');
    const {id} = req.params;
    //console.log(req.params);
    req.getConnection((err, conn) => {
        conn.query('SELECT p.id_pregunta, p.enunciado, e.titulo, t.nombre from pregunta as p inner join encuesta as e on e.id_encuesta = p.id_encuesta inner join tipo as t on t.id_tipo = p.id_tipo where p.id_encuesta = ?', [id], (err, rows) =>{
            if (err) {
                res.json(err);
                console.log(err);
            } else {
                //console.log(rows);
                res.render('pregunta', {
                    data: rows
                })
            }
        })
    })
}

preguntaController.add = (req, res) =>{
    const {id} = req.params;
    console.log(id);
    req.getConnection((err, conn) =>{
        conn.query('SELECT e.id_poblacion, e.id_encuesta FROM encuesta as e WHERE id_encuesta = ?', [id], (err, rows) =>{
            console.log(rows);
            res.render('pregunta_add', {
                data: rows[0]
            });
        });
    });
}

preguntaController.create = (req, res) =>{
    console.log('Entra!!');
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO pregunta set ?', [data], (err, rows) =>{
            res.redirect('/pregunta');
        })
    })
}

module.exports = preguntaController;