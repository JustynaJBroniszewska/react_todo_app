import React from 'react';
import Task from './Task'

const TaskList = (props) => {

    const active = props.taskData.filter(task => task.isActive);
    active.sort((a, b) => (a.taskName > b.taskName))

    const activeTasks = active.map(
        task =>
            <Task
                key={task.id}
                taskData={task}
                handleConfirmTask={props.handleConfirmTask}
                handleDeleteTask={props.handleDeleteTask}
            />
    )

    const inactive = props.taskData.filter(task => !task.isActive);
    active.sort((a, b) => (a.taskDone < b.taskDone))

    const inActiveTasks = inactive.map(
        task =>
            <Task
                key={task.id}
                taskData={task}
                handleConfirmTask={props.handleConfirmTask}
                handleDeleteTask={props.handleDeleteTask}
            />
    )

    return (
        <>
            <div className="is-active">
                <h3>Zadania do wykonania</h3>
                <ul>
                    {activeTasks}
                </ul>
            </div>

            <div className="is-inactive">
                <h4>Zadania wykonane</h4>
                <ul>
                    {inActiveTasks}
                </ul>
            </div>
        </>
    )
}


export default TaskList;