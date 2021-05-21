import React,{Component} from "react";
import {  Row, Col } from "react-bootstrap";


export class AxisTextbar extends Component{
    render(){
        return(
            <div>
            <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Distance</Col>
                    <Col></Col>
                    <Col>Distance</Col>
                 </Row>
                 <Row>
                   <Col ><input type="number" /></Col>
                   <Col></Col>
                   <Col><input type="number" /></Col>
                </Row>
                <hr></hr>
                
                <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Intermediate</Col>
                    <Col></Col>
                    <Col>Intermediate</Col>
                 </Row>
                 <Row>
                   <Col ><input type="number" /></Col>
                   <Col></Col>
                   <Col><input type="number" /></Col>
                </Row>
                <hr></hr>
             
                <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Near</Col>
                    <Col></Col>
                    <Col>Near</Col>
                 </Row>
                 <Row>
                   <Col ><input type="number" /></Col>
                   <Col></Col>
                   <Col><input type="number" /></Col>
                </Row>
                <hr></hr>
                </div>
        )
    }
}
