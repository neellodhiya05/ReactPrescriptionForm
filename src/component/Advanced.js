import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Label } from './Label';
import { PupilPre } from "./PupilPre";
import { CheckBoxAndBtn } from "./CheckBoxAndBtn";
import { DateOfPre } from "./DateOfPre";
import { ExtraInfo } from "./ExtraInfo";
import { LensAdvanced } from './LensAdvanced';


class Advanced extends React.Component {
    render() {
        return (
            <Container fluid="md" className="container">
            <Row className="rows">
              <Col className="columns">
                <Label />
                <LensAdvanced />
                <PupilPre />
                <DateOfPre />
                <ExtraInfo />
                <CheckBoxAndBtn />
              </Col>
            </Row>
          </Container>
        )
    }
}

export default Advanced