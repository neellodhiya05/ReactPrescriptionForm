import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Select } from "./Select";


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

                <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Distance</Col>
                    <Col></Col>
                    <Col>Distance</Col>
                 </Row>
                 <Row>
                    <Col ><Select /> </Col>
                    <Col></Col>
                    <Col><Select /></Col>
                </Row>
                <hr></hr>
                
                <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Intermediate</Col>
                    <Col></Col>
                    <Col>Intermediate</Col>
                 </Row>
                 <Row>
                    <Col ><Select /> </Col>
                    <Col></Col>
                    <Col><Select /></Col>
                </Row>
                <hr></hr>
             
                <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Near</Col>
                    <Col></Col>
                    <Col>Near</Col>
                 </Row>
                 <Row>
                    <Col ><Select /> </Col>
                    <Col></Col>
                    <Col><Select /></Col>
                </Row>
                <hr></hr>

            </div>
        )
    }
}