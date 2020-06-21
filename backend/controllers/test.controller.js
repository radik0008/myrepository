const db = require("../config/database");

exports.getTests = async (req, res) => {
    console.log("getTests");
    const response = await db.query('SELECT * from tests');
    res.status(200).send(response.rows);
};

exports.getTest = async (req, res) => {
    console.log(req.body.id);
    const id = parseInt(req.body.id);
    const response = await db.query('SELECT * from tests where id=$1',[id]);
    res.status(200).send(response.rows);
};

exports.newTest = async (req, res) => {
    let body = req.body;
    //console.log(body)
   await db.query('INSERT into tests ("name") values ($1) RETURNING id',[body.name]).then(resultT => {
       let testId = resultT.rows[0].id;
       body.questions.map(item => {
           db.query('INSERT into questions ("name","test_id") values ($1,$2) RETURNING id',[item.name,testId]).then(resultQ => {
               let qestionId = resultQ.rows[0].id;

               item.answers.map( poditem =>{
                  if(poditem !="") {
                      db.query('INSERT into answers ("name","question_id","is_correct") values ($1,$2,$3)', [poditem.name, qestionId, poditem.isCorrect]).then(() => {
                      });
                  }
               })
           });
       });
   })
    res.status(200).send("Тест добавлен!");
};
