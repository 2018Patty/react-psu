import React from "react";
import Header from "../Components/Header";
import AddNew from "../Components/AddNew";
import List from "../Components/List";
import InputTodo from "../Components/InputTodo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      data: [
        {
          title: "Todo list 1"
        },
        {
          title: "Todo list 2"
        },
        {
          title: "Todo list 3"
        }
      ]
    };
  }

  onAddTodoList = () => {
    const todoText = this.state.todoText;
    let todoList = this.state.data;
    todoList.push({
      title: todoText
    });

    this.setState({
      todoText: "",
      data: todoList
    });
  };

  onDeleteTodoList = todoId => {
    let todoList = this.state.data;

    const newData = todoList.filter((value, key) => {
      if (key !== todoId) {
        return value;
      }
    });

    this.setState({
      data: newData
    });
  };

  onChangeInputTodo = event => {
    const todoText = event.target.value;
    this.setState({
      todoText: todoText
    });
  };

  render() {
    // const data = [];
    return (
      <div>
        <Header />
        <InputTodo
          value={this.state.todoText}
          onChangeInputTodo={this.onChangeInputTodo}
        />
        <AddNew onAddNew={this.onAddTodoList} />
        <div>
          {this.state.data.map((todo, key) => {
            return (
              <List
                key={key}
                todo={todo}
                onDelete={() => this.onDeleteTodoList(key)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TodoList;
