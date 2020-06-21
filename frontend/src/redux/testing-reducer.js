import axios from "axios";

const SET_TEST = 'SET_TEST';
const SAVE_TEST ='SAVE_TEST';
const GET_TESTS='GET_TESTS';
const SET_QUESTIONS='SET_QUESTIONS'
const SET_ANSWERS='SET_ANSWERS'
const SET_ANSWERTRUE='SET_ANSWERTRUE'
const UPDATE_ANSWERS ='UPDATE_ANSWERS';
const DELETE_ANSWER ='DELETE_ANSWER';

let initialState ={
    test: [],
    tests:[],
    questions:[],
    answers:[
    ],
}

const testingReducer = (state= initialState, action) =>{
    let questionId;
    switch(action.type)
    {
        case DELETE_ANSWER:
             questionId = action.id;
             state.answers = state.answers.filter(el => el.id != questionId);
             return state;

        case UPDATE_ANSWERS:

             questionId = action.id;
            state.questions = state.questions.map((story) => {
                if(story.id === Number(questionId))
                {

                    story.answers=  state.answers;

                }
                return story;
            });
            state.answers =[];
            return state;


        case SET_ANSWERS:
             questionId = action.answers.questionId;
           // state.questions.map(story => story.id === questionId ? {...story, answers: !todo.complete} : story)
            state.questions = state.questions.map((story) => {
                if(story.id === Number(questionId))
                {
                    let answers ={
                        id: story.answers.length+1,
                        name: action.answers.answer.nameA,
                        isCorrect: action.answers.answer.isCorrect ? true: false

                    }

                   story.answers.push(answers);

                }
                return story;
            });

            let answers ={
                id: state.answers.length+1,
                questionId: questionId,
                name: action.answers.answer.nameA,
                isCorrect: action.answers.answer.isCorrect ? true: false
            }
            state.answers.push(answers);

return state;
        case SET_ANSWERTRUE:

            let answerId = action.id;
            state.answers = state.answers.map((story) => {
                if(story.id === Number(answerId))
                {
                    story.isCorrect = !story.isCorrect;

                }
                return story;
            });

          return state;


        case SET_TEST:
            return { ...state, test:action.test}

        case SET_QUESTIONS:

            let id = state.questions.length+1;
            let question ={
                id:id,
                name: action.questions.nameQ,
                answers:[]
            }
            state.questions.push(question)
            return state;

        case GET_TESTS:
            return {...state, tests: action.tests}

        case SAVE_TEST:
            debugger

            state.test =  { ... state.test, questions:  state.questions };
            let test =  state.test ;
            axios.put("http://localhost:3001/api/newTest/", test)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log("error in request", err);
                });

            return {...state}

        default: return state;
    }

}

export const getTests= (tests) => ({type:GET_TESTS, tests})
export const setTest = (test) => ({type:SET_TEST, test})
export const saveTest = (test) => ({type:SAVE_TEST, test})
export const setQuestions  = (questions) => ({type:SET_QUESTIONS, questions})
export const setAnswers  = (answers) => ({type:SET_ANSWERS, answers})
export const setAnswersTrue  = (id) => ({type:SET_ANSWERTRUE, id})
export const deleteAnswer  = (id) => ({type:DELETE_ANSWER, id})
export const UpdateAnswers  = (id) => ({type:UPDATE_ANSWERS, id})
export default testingReducer;