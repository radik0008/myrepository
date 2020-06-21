const db = require("../config/database");

exports.getAnswers = async (req, res) => {
    console.log("getAnswers");
    const response = await db.query('SELECT * from answers where questionId=$1',[body.questionId]);
    res.status(200).send(response.rows);
};


exports.setAnswers   = async (req, res) => {
    console.log("setAnswers");
    let body = req.body;
    await db.query('INSERT into answers ("name","questionId","isCorrect") values ($1)',[body.name,body.questionId,body.isCorrect]).then(()=>{
        res.status(200).send("ok");
    });

};
