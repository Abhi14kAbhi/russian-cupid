// ./src/App.js

import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import RegisterContainer from './containers/RegisterContainer';
import LoginContainer from './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Row className="row">
          <Col xs={12}>
            <Switch>
              <Route exact path="/register" component={RegisterContainer} />
              <Route exact path="/login" component={LoginContainer} />
              <Route exact path="/" component={HomeContainer} />
            </Switch>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
