// ./src/App.js

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';

import AddToDo from './containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainer';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>To Do Lists</h1>
            <Navigation />
            <Route exact path="/new-item" component={AddToDo} />
            <Route exact path="/" component={ToDoListContainer} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
