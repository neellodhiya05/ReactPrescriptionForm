import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//import { Container, Row, Col } from "react-bootstrap";
import Simple from './component/Simple';
import {Route, Switch} from "react-router-dom";
import Advanced from './component/Advanced';
import Menu from './Menu';
import { Container, Row, Col } from "react-bootstrap";





function App() {
  return (
    <div>
     <Container fluid="md" className="container">
        <Row className="rows">
          <Col className="columns"><Menu /></Col>
        </Row>
      </Container>
      {/* header */}
      <Switch>
        <Route  exact path= "/" component={Simple}/>
        <Route path="/advanced" component={Advanced} />
      </Switch>
     

    </div>
  );
}

export default App;

