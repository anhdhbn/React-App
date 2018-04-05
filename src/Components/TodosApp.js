import React, { Component } from 'react';
import './style.css';
import { fetchTodos } from "./Services/APIServices";
import { createTodo } from "./Services/APIServices";
import { ChangeCompleted } from "./Services/APIServices";
import { DeleteTodo } from "./Services/APIServices";
import NavBar from "./NavBar";
import Cookies from 'js-cookie';

class Todo extends Component {

    onClickTodo = (event) => {
        let target = event.target;

        let tag = target.tagName;

        if (tag === 'LI') {
            //var tempTodos = this.props.todos;
            let id = target.id;
            let todo = this.props.todos[id];
            // todo.completed = !todo.completed;
            // var str = JSON.stringify(tempTodos);
            // localStorage.setItem('todos', str);
            ChangeCompleted(todo.ID, todo.text, todo.completed).then(object => {
                const { success } = object;
                if (success) {
                    this.props.handleSetState();
                }
            });
            //this.props.handleSetState();
        }

        if (tag === 'SPAN') {
            let todo = this.props.todos[this.props.id];
            this.props.handleDelete(todo.ID);
        }
    }


    render() {
        let { completed } = this.props;
        return (
            <li key={this.key} id={this.props.id} className={completed ? "completed" : ""} onClick={this.onClickTodo}>{this.props.content} <span className="close" >x</span></li>
        );
    }
}

class TodosList extends Component {
    createLi = () => {
        var { todos } = this.props;
        let listLi = [];
        for (let i = 0; i < todos.length; i++) {
            listLi.push(<Todo handleSetState={this.props.handleSetState} todos={this.props.todos} handleDelete={this.props.handleDelete} key={todos[i].ID} id={i} content={todos[i].text} completed={todos[i].completed} />);
        }
        return listLi;
    }

    render() {
        return (
            <ul id="mylist" className="content">
                {this.createLi()}
            </ul>
        );
    }
}

class Input extends Component {
    changeText = (event) => {
        this.props.handleInput(event.target.value);
    }

    keyEnter = (event) => {
        event.preventDefault();
        if (event.keyCode === 13) {
            this.props.handleClick();
        }
    }
    render() {
        return (
            <input type="text" id="inputAdd" placeholder="Title..." value={this.props.text} onChange={this.changeText} onKeyUp={this.keyEnter} />
        );
    }
}

class Button extends Component {
    render() {
        return (
            <span id="btnAdd" onClick={this.props.onClickBtn}>Add</span>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div id="nav" className="header">
                <h1 style={{ margin: 5 + 'px' }} >My To Do List</h1>
                <Input text={this.props.text} handleInput={this.props.handleInput} handleClick={this.props.handleClick} />
                <Button onClickBtn={this.props.onClickBtn} />
            </div>
        );
    }
}

class Container extends Component {

    state = {
        todos: [],
        text: ""
    }

    componentDidMount() {
        this.handleSetState();
    }


    render() {
        if (Cookies.get('user')) {
            return (
                <div id="container" className="container">
                    <NavBar Home={true} logined={true} />
                    <Header text={this.state.text} handleClick={this.handleClick} handleInput={this.handleInput} onClickBtn={this.handleClick.bind(this)} />
                    <TodosList todos={this.state.todos} handleDelete={this.handleDelete} handleSetState={this.handleSetState} />
                </div>
            );
        }
        else {
            return (
                <div id="container" className="container">
                    <NavBar Home={true} />
                    <br/><br/>
                    <p style={{ color: 'red' }}>{"Vui lòng đăng nhập trước khi sử dụng"}</p>
                    <hr />
                </div>
            );
        }

    }

    handleDelete = (ID) => {
        DeleteTodo(ID).then(object => {
            const { success } = object;
            if (success) {
                this.handleSetState();
            }
        });
    }
    handleSetState = () => {
        fetchTodos().then(object => {
            const { data, success } = object;
            //debugger;
            if (success) {
                this.setState({
                    todos: data,
                    text: ""
                });
            }
        })
    }

    handleClick = () => {
        if (this.state.text) {
            createTodo(this.state.text).then(object => {
                const { success } = object;
                if (success) {
                    this.handleSetState();
                }
            });
            // this.addTodosToStorage(this.state.text) ;    
            // this.saveTodosToStorage(tempTodos);
            // this.handleSetState();
        }
    }
    handleInput = (text) => {
        this.setState({ text: text });
    }

    getTodosFromStorage = () => {
        let str = localStorage.getItem("todos");
        if (!str) {
            return [];
        }
        try {
            return JSON.parse(str);
        }
        catch (error) {
            return [];
        }
    }
    saveTodosToStorage = (todos) => {
        const str = JSON.stringify(todos);
        localStorage.setItem('todos', str);
    }

    addTodosToStorage = (text) => {
        let tempTodos = this.state.todos;
        let tempItem = {
            text: text,
            completed: false
        };
        tempTodos.push(tempItem);
    }
}

class TodosApp extends Component {
    render() {
        return (
            <Container />
        );
    }
}

export default TodosApp;