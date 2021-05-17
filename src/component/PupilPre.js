import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PupilSelect } from "./PupilSelect";

export class PupilPre extends Component {
    render() {
        const inputStyle = {
            fontFamily: "Arial Black",
            padding: "10px",
        }
        return (
            <div>
                <Container fluid="md" className="container">
                    <Row >
                        <Col>
                            <form >
                                <label style={inputStyle}> Pupil Prescription:</label>
                            </form>
                        </Col>
                    
                        <Col>
                            <PupilSelect />
                        </Col>
                    </Row>
                </Container>




                <div>
                    <span >The distance between your pupils, select "Average / Don't Know" if you are unsure and we'll be in touch if necessary<p>For prescriptions with a Sphere value stronger than +/- 8, we may still be able to supply your glasses. Please  call us on 01793 746601 to discuss your options.</p></span>
                </div>

                <hr></hr>
            </div>
        )
    }
}