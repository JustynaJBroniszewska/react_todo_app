import React from 'react';


const Task = (props) => {

    const { id, isActive, isImportant, taskName, doTo } = props.taskData;

    const finished = new Date().toISOString();

    if (isActive) {
        return (
            <li>
                {
                    isImportant ?
                        <span className="task-important">{taskName}.</span> :
                        <span>{taskName}</span>
                } <span className="text-mutted"> Termin wykonania: {doTo} </span>
                <button
                    className="btn mx btn-confirm"
                    onClick={() => props.handleConfirmTask(id)}>
                    Wykonano
                </button>
                <button
                    className="btn btn-cancel"
                    onClick={() => props.handleDeleteTask(id)}>
                    X
            </button>
            </li >
        )
    } else {
        return (
            <li>
                <span>{taskName}</span> (Typowany czas realizacji zadania: {doTo}.)
                <em className="text-mutted"> Wykonano: {finished}</em>
                <button
                    className="btn btn-cancel mx"
                    onClick={() => props.handleDeleteTask(id)}>
                    X
            </button>
            </li>
        )
    }
}

export default Task;
