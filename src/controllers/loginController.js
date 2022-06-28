const loginController = {};

loginController.list =  (req, res) => {
    req.getConnection((error, conn) =>{
        conn.query('Select * from encuestado', (err, rows) =>{
            if (err) {
                res.json(err);
            } else {
                //console.log(rows);
                res.render('index', {
                    data: rows
                })
            }
        })
    })
};

module.exports = loginController;