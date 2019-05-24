import React from 'react';
import './App.css';
import InputText from './Components/InputText';
import List from './Components/List';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      newItem: "",
      editItem: "",
      toDoList: []
    };
  }

  handleChange = (event) => {
    this.setState({newItem: event.target.value});
  }

  handleChangeEdit = (event) => {
    this.setState({editItem: event.target.value});
  }

  addItem = () => {
    if (this.state.newItem !== "") {
      let newToDoList = [...this.state.toDoList];
      newToDoList.push({
        item: this.state.newItem,
        editable: false,
        done: false
      });
      this.setState({
        newItem: "",
        toDoList: newToDoList
      })
    }
  }

  deleteItem = (index) => {
    let newToDoList = [...this.state.toDoList];
    newToDoList.splice(index, 1);
    this.setState({
      toDoList: newToDoList
    });
  }

  editItem = (index) => {
    let editToDoList = [...this.state.toDoList];
      editToDoList[index].editable = true;
      editToDoList[index].done = false;
      this.setState({
        editItem: editToDoList[index].item,
        toDoList: editToDoList
      })
  }

  doneItem = (index) => {
    let editToDoList = [...this.state.toDoList];
    editToDoList[index].done = !editToDoList[index].done;
    this.setState({
      toDoList: editToDoList
    })
  }

  saveItem = (index) => {
    let editToDoList = [...this.state.toDoList];
    editToDoList[index].item = this.state.editItem;
    editToDoList[index].editable = false;
    this.setState({
      editItem: "",
      toDoList: editToDoList
    })
  }

  render(){
    console.log(this.state);
    return (
      <div className = 'container'>
        <h1 className = 'title'> TO DO LIST</h1>
        <InputText  value = {this.state.newItem} 
                    addItem = {this.addItem} 
                    onChange = {this.handleChange}/>
        <List value = {this.state.editItem} 
              toDo = {this.state.toDoList} 
              deleteItem = {this.deleteItem} 
              editItem = {this.editItem}
              saveItem = {this.saveItem}
              doneItem = {this.doneItem}
              onChange = {this.handleChangeEdit}/>
      </div>
    );
  }
}

export default App;
