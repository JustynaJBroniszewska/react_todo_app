import React from 'react';

class AddTaskForm extends React.Component {

    minDate = new Date().toISOString().slice(0, 10)

    state = {
        taskName: "",
        isNewTaskImportant: false,
        doTo: this.minDate
    }

    handleAddTaskForm = (e) => {
        this.setState({
            taskName: e.target.value
        })
    }

    handleIsImportantCheckbox = (e) => {
        this.setState({
            isNewTaskImportant: e.target.checked
        })
    }

    handleDateChange = (e) => {
        this.setState({
            doTo: e.target.value
        })
    }

    submitAddTaskForm = () => {
        const { taskName, isNewTaskImportant, doTo } = this.state

        const newTask = this.props.addTask(taskName, isNewTaskImportant, doTo);

        if (newTask) {
            this.setState({
                taskName: "",
                isNewTaskImportant: false,
                doTo: this.minDate
            })
        }

        console.log(newTask)
    }

    render() {

        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + "-12-31";

        return (
            <>
                <h2>Dodaj zadanie</h2>
                <div className="add-tasks-form">
                    <div className="form-group">
                        <label htmlFor="add-task">Dodaj zadanie</label>
                        <input
                            id="add-task"
                            type="taskName"
                            value={this.state.taskName}
                            onChange={this.handleAddTaskForm}
                        />
                        <label htmlFor="is-important">
                            <input
                                id="is-important"
                                type="checkbox"
                                checked={this.state.isNewTaskImportant}
                                onClick={this.handleIsImportantCheckbox}
                            />
                            Priorytet
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="add-task">Termin wykonania</label>
                        <input
                            value={this.state.date}
                            type="date" id="add-task"
                            min={this.minDate}
                            max={maxDate}
                            onChange={this.handleDateChange}
                        />
                    </div>
                    <button
                        onClick={() => this.submitAddTaskForm()}>
                        Zatwierdź
                    </button>
                </div>
            </>
        )
    }

}

export default AddTaskForm;