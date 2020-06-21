const db = require("../config/database");

exports.getQuestions = async (req, res) => {
    console.log("getQuestions");
    const response = await db.query('SELECT * from questions where testId=$1',[body.testId]);
    res.status(200).send(response.rows);
};


exports.setQuestions  = async (req, res) => {
    let body = req.body;
    await db.query('INSERT into questions ("name","testId") values ($1)',[body.name,body.testId]).then(()=>{
        res.status(200).send("ok");
    });

};
