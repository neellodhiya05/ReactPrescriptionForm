import React from 'react';
import { Header } from './Header';
import { Container, Row, Col } from "react-bootstrap";

class Simple extends React.Component {
    render() {
        return (
        <Container fluid="md" className="container">
        <Row className="rows">
          <Col className="columns"><Header /></Col>
        </Row>
      </Container>
        )
    }
}

export default Simple