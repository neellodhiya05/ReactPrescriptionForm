import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NearAddSelect } from "./NearAddSelect";
import { Select } from "./Select";

export class Lens extends Component {
       render() {
              return (
                     <div>

                            <Row style={{ fontFamily: "Arial Black" }}>

                                   <Col>Right Eye</Col>
                                   <Col></Col>
                                   <Col>Left Eye</Col>

                            </Row>
                            <hr></hr>
                            <Row style={{ fontSize: " calc(1em + 1vw)" }}>


                                   <Col >Sphere(SPH)</Col>
                                   <Col></Col>
                                   <Col >Sphere(SPH)</Col>

                            </Row>
                            <Row>

                                   <Col ><Select /> </Col>
                                   <Col></Col>
                                   <Col><Select /></Col>

                            </Row>
                            <hr></hr>
                            <Row style={{ fontSize: " calc(1em + 1vw)" }}>

                                   <Col >Cylinder(CYL)</Col>
                                   <Col></Col>
                                   <Col>Cylinder(CYL)</Col>

                            </Row>
                            <Row>

                                   <Col ><Select /> </Col>
                                   <Col></Col>
                                   <Col><Select /></Col>

                            </Row>
                            <hr></hr>
                            <Row style={{ fontSize: " calc(1em + 1vw)" }}>

                                   <Col >Axis</Col>
                                   <Col></Col>
                                   <Col>Axis</Col>

                            </Row>
                            <Row>

                                   <Col ><input type="number" /></Col>
                                   <Col></Col>
                                   <Col><input type="number" /></Col>

                            </Row>
                            <hr></hr>
                            <Row style={{ fontSize: " calc(1em + 1vw)" }}>

                                   <Col >Near Addition(ADD)</Col>
                                   <Col></Col>
                                   <Col>Near Addition(ADD)</Col>

                            </Row>
                            <Row>

                                   <Col ><NearAddSelect /> </Col>
                                   <Col></Col>
                                   <Col><NearAddSelect /> </Col>

                            </Row>
                            <hr></hr>
                            <p >For prescriptions with a Sphere value stronger than +/- 8, we may still be able to supply your glasses. Please call us on 01793 746601 to discuss your options.</p>
                            <hr></hr>
                     </div>
              )
       }
}