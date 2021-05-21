import React,{Component} from "react";
import {  Row, Col } from "react-bootstrap";
import { Select } from "./Select";

export class Adoption extends Component{
    render(){
        return(
            <div>
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
