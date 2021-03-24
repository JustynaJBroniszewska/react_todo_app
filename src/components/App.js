import React from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'

class App extends React.Component {

  newTaskId = Math.floor(Math.random() * 10000);

  state = {
    taskData: [
      {
        id: 1,
        isActive: true,
        isImportant: true,
        taskName: "Pierwsze zadanie.",
        doTo: "2021-03-23",
        taskDone: null,
      },
      {
        id: 23,
        isActive: true,
        isImportant: false,
        taskName: "Drugie zadanie.",
        doTo: "2021-03-23",
        taskDone: null,
      },
      {
        id: 17,
        isActive: true,
        isImportant: false,
        taskName: "Trzecie zadanie.",
        doTo: "2021-03-23",
        taskDone: null,
      },
      {
        id: 5,
        isActive: false,
        isImportant: false,
        taskName: "Czwarte zadanie.",
        doTo: "2021-03-23",
        taskDone: null,
      },
    ],
    newTask: '',
    isNewTaskImportant: false,
  }

  handleDeleteTask = (id) => {
    let taskData = [...this.state.taskData]
    let taskIndex = taskData.find(task => task.id === id);
    taskData.splice(taskIndex, 1);
    this.setState({
      taskData
    })
  }

  handleConfirmTask = (id) => {
    let taskData = [...this.state.taskData]
    let taskIndex = taskData.find(task => task.id === id)

    if (taskIndex) {
      taskIndex.isActive = false
      taskIndex.taskDone = new Date().getTime()
    }

    this.setState({
      taskData
    })
  }

  addTask = (taskName, isImportant, doTo) => {
    const addNewTask = {
      id: this.newTaskId,
      taskName,
      isImportant,
      doTo,
      isActive: true,
      taskDone: null,
    };

    console.log(addNewTask)
    this.setState({
      taskData: [...this.state.taskData, addNewTask]
    });

    return true;
  }

  render() {
    console.log(this.state.taskData)
    return (
      <div className="App" >
        <header className="App-header">
          <h1>TO DO</h1>
        </header>
        <AddTaskForm
          taskData={this.state.taskData}
          addTask={this.addTask}
        />
        <TaskList
          taskData={this.state.taskData}
          handleConfirmTask={this.handleConfirmTask}
          handleDeleteTask={this.handleDeleteTask}
        />
      </div>
    );
  }
}

export default App;
