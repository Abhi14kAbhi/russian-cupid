// ./src/App.js

import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import AddToDo from './containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainer';
import HeaderContainer from './containers/HeaderContainer';
import RegisterContainer from './containers/RegisterContainer';
import LoginContainer from './containers/LoginContainer';
// import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Row className="row">
          <Col xs={12}>
            <HeaderContainer />
            {/* <Navigation /> */}
            <Switch>
              <Route exact path="/new-item" component={AddToDo} />
              <Route exact path="/register" component={RegisterContainer} />
              <Route exact path="/login" component={LoginContainer} />
              <Route exact path="/" component={ToDoListContainer} />
            </Switch>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
