import styles from "./Tests.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import store from "./../../redux/store";
import {NavLink} from "react-router-dom";



let NewQuestionsForm =(props) =>{
let save =()=>{
    debugger
    props.test.saveTest();
    props.test.history.push('/tests')
}
    return (
        <form onSubmit={props.handleSubmit}>
            <p>   Введите вопрос </p> <Field name={"nameQ"} component={"input"} />
            <button  button type="submit" > Добавить вопрос </button>
            <button onClick={save} type="button" > Сохранить тест </button>
        </form>
    )
}
const ReduxNewQuestionsForm = reduxForm({form: 'NewQuestions'})(NewQuestionsForm)

let NewQuestions =(props) =>{

    const onSubmit=(formData)=>{
        props.setQuestions(formData);
        console.log(props.questions);
    }

    let qElements = props.questions.map(story =>
        <div className={styles.item}>
            {story.name}
            <NavLink to={'/question/'+ story.id+'/answers'} id={story.id}> <span className={styles.addAn}> Добавить ответы</span> </NavLink></div>
    );



    return <div className={styles.clients}>
        <h1> Вопросы к тесту "  {props.test.name} "</h1>

        <ReduxNewQuestionsForm onSubmit ={onSubmit} test={props}/>
        {qElements}
    </div>
}
export default NewQuestions;