import styles from "./Tests.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

let Test =(props) =>{
    let ClientsElements = props.tests.map(story =>
        <div className={styles.item} key={story.id}>
            {story.name} </div>
       );

    return <div className={styles.clients}>
        <h1>Тесты
        <div className={styles.icons}>
            <NavLink to="/newTest">  Добавить  <FontAwesomeIcon icon={faPlus} /> </NavLink>
        </div>
        </h1>

        <div className={styles.items}>
            {ClientsElements}
        </div>
    </div>
}
export default Test;