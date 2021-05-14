import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './component/Header';
import {Container, Row ,Col} from "react-bootstrap";




function App() {
  return (
 <div>
 {/* header */}
 <Container fluid="md" className="container">
 <Row className="rows">
    <Col className="columns"><Header /></Col>
  </Row>
 </Container>
 </div>          
  );
}

export default App;

