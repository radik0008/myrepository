const router = require('express-promise-router')();
const answerController = require('../controllers/answer.controller');
const testController = require('../controllers/test.controller');
const questionController = require('../controllers/question.controller');


router.post('/getAnswers', answerController.getAnswers);
router.put('/setAnswers', answerController.setAnswers);

router.post('/getTest', testController.getTest);
router.get('/getTests', testController.getTests);
router.put('/newTest', testController.newTest);

router.post('/getAnswers', questionController.getQuestions);
router.put('/setAnswers', questionController.setQuestions);

module.exports = router;