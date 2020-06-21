import styles from "./Tests.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import store from "./../../redux/store";
import {NavLink} from "react-router-dom";
import {deleteAnswer, setAnswersTrue} from "../../redux/testing-reducer";
import App from "../../App";
import ReactDOM from 'react-dom';
import NewQuestionsContainer from "./NewQuestionsContainer";

let change =(state)=>{

    let id= state.target.id;
    store.dispatch(setAnswersTrue(id));
    console.log(   store.getState().testing);
}
let deleteA =(state)=>{
    let id= state.target.id;
    store.dispatch(deleteAnswer(id));
    ReactDOM.render(
        <NewQuestionsContainer />,
        document.getElementById('root')
    );
}
let NewQuestionsForm =(props) =>{

    let save =()=>{
        let questionId = props.answers.match.params.questionId
        console.log(props.answers.match.params.questionId)
        props.answers.UpdateAnswers(questionId);props.answers.history.push('/newquestions')
    }


    let qElements = props.answers.answers.map(story =>
        <div className={styles.item}>
            {story.name}
            <div className={styles.icons}>
                Верный ответ
                <Field onClick={change}  id={story.id} name={"CHECK"+ story.id}  component={"input"} type={"checkbox"}/>
                <span  className={styles.del} onClick={deleteA}  id={story.id} type="button">Удалить</span>
            </div>
        </div>

    );
    return (
        <form onSubmit={props.handleSubmit}>

            <p>   Ответ </p> <Field name={"nameA"} component={"input"} />
            <button  button type="submit" > Добавить ответ </button>
            <button onClick={save} type="button" > Готово </button>
            {qElements}
        </form>

    )
}
const ReduxNewQuestionsForm = reduxForm({form: 'NewQuestions'})(NewQuestionsForm)

let NewQuestions =(props) =>{

    let questionId = props.match.params.questionId;
    let questionName = props.questions.map((story) => {if(story.id==questionId) return story.name });

    const onSubmit=(formData)=>{
        let data = {
            questionId: questionId,
            answer:formData
        }
        props.setAnswers(data);

    }

    return <div className={styles.clients}>
        <h1> Ответы к вопросу "{questionName}"</h1>

        <ReduxNewQuestionsForm onSubmit ={onSubmit} answers={props}/>

    </div>
}
export default NewQuestions;