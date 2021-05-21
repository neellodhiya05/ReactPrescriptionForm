import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Adoption } from "./Adoption";
import {AxisTextbar} from "./AxisTextbar";
import {AdNearAdd} from "./AdNearAdd";


export class LensAdvanced extends Component{
    render(){
        return(
            <div>

                <Row style={{ fontFamily: "Arial Black" }}>
                    <Col>Right Eye</Col>
                    <Col></Col>
                    <Col>Left Eye</Col>
                </Row>
                <hr></hr>

                <Row style={{ fontFamily: "Arial Black" }}>
                     <Col >Sphere(SPH)</Col>
                     <Col></Col>
                     <Col ></Col>
                </Row>
                <hr></hr>

                <Adoption />
                
                <hr></hr>
                <Row style={{ fontFamily: "Arial Black" }}>
                    <Col >Cylinder(CYL)</Col>
                    <Col></Col>
                    <Col ></Col>
                </Row>
                <hr></hr>

                <Adoption />

                
                <hr></hr>
                <Row style={{ fontFamily: "Arial Black" }}>
                    <Col >Axis</Col>
                    <Col></Col>
                    <Col ></Col>
                </Row>
                <hr></hr>

                <AxisTextbar />

                <hr></hr>
                <Row style={{ fontFamily: "Arial Black" }}>
                    <Col >Near Addition(ADD)</Col>
                    <Col></Col>
                    <Col ></Col>
                </Row>
                <hr></hr>

                <AdNearAdd />

               
                    <p >For prescriptions with a Sphere value stronger than +/- 8, we may still be able to supply your glasses. Please call us on 01793 746601 to discuss your options.</p>
                <hr></hr>
            </div>
        )
    }
}