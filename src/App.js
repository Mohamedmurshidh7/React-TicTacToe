
import React, { Component } from "react";
import "./bootstrap.min.css" ;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./create";
import EditTodo from"./edit";
import TodosList from "./todo";
import deleteTodo from"./delete";
class App extends Component {
  render()
  {
  return (
    <Router>
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
            
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/delete/:id" component={deleteTodo} />
          
        </div>
    </Router>
    
  );
}
}

export default App;
