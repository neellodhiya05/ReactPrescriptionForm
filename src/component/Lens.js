import React, { Component } from "react";
import {  Row, Col } from "react-bootstrap";
import { Select } from "./Select";
import { LeftCylSelect } from "./SelectsComponent/LeftCylSelect";
import { LeftSphereSelect } from "./SelectsComponent/LeftSphereSelect";
import { RightCylSelect } from "./SelectsComponent/RightCylSelect";
import {RightAxis} from "./SelectsComponent/RightAxis";
import { LeftAxis } from "./SelectsComponent/LeftAxis";
import { RightNearAdd } from "./SelectsComponent/RightNearAdd";
import { LeftNearAdd } from "./SelectsComponent/LeftNearAdd";

export class Lens extends Component {
       
       handleCallback = (childData) =>{
              this.setState({rightAxis: childData})
          }
       
       render() {
              const eventhandler = data => console.log(data)
              const nearAdd = data => console.log(data)
              const event = data => console.log(data)
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

                                   <Col ><Select onChange={eventhandler}/></Col>
                                   <Col></Col>
                                   <Col><LeftSphereSelect onChange={eventhandler}/></Col>

                            </Row>
                            <hr></hr>
                            <Row style={{ fontSize: " calc(1em + 1vw)" }}>

                                   <Col >Cylinder(CYL)</Col>
                                   <Col></Col>
                                   <Col>Cylinder(CYL)</Col>

                            </Row>
                            <Row>

                                   <Col ><RightCylSelect  onChange={eventhandler} /> </Col>
                                   <Col></Col>
                                   <Col><LeftCylSelect onChange={eventhandler}/></Col>

                            </Row>
                            <hr></hr>
                            <Row style={{ fontSize: " calc(1em + 1vw)" }}>

                                   <Col >Axis</Col>
                                   <Col></Col>
                                   <Col>Axis</Col>

                            </Row>
                            <Row>

                                   <Col ><RightAxis onChange={event}/></Col>
                                   <Col></Col>
                                   <Col><LeftAxis onChange={event}/></Col>

                            </Row>
                            <hr></hr>
                            <Row style={{ fontSize: " calc(1em + 1vw)" }}>

                                   <Col >Near Addition(ADD)</Col>
                                   <Col></Col>
                                   <Col>Near Addition(ADD)</Col>

                            </Row>
                            <Row>

                                   <Col ><RightNearAdd onChange={nearAdd} /> </Col>
                                   <Col></Col>
                                   <Col><LeftNearAdd onChange={nearAdd}/> </Col>

                            </Row>
                            <hr></hr>
                            <p >For prescriptions with a Sphere value stronger than +/- 8, we may still be able to supply your glasses. Please call us on 01793 746601 to discuss your options.</p>
                            <hr></hr>
                     </div>
              )
       }
}