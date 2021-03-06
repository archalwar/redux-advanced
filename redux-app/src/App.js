import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Route } from 'react-router-dom';
import Header from "./components/Header";
import Navigation from './components/Navigation';




import AddToDo from "./containers/AddToDo";
import ToDoListContainer from "./containers/ToDoListContainer";

class App extends Component {
  render() {
    const callSearchFunction = e => {
      e.preventDefault();
      alert("amanath")
    };

    return (
      
       <Container>
        <Row className="row">
          <Col xs={12}>          
            <Header description="To do list App with React, Redux and Sega middleware" />
            <Navigation />            
            <Route exact path="/" component={ToDoListContainer} />
            <Route exact path="/new-item" component={AddToDo} />
          </Col>
        </Row>
      </Container> 
      
    );
  }
}

export default App;
