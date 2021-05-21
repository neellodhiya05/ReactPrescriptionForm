import React,{Component} from "react";
import {  Row, Col } from "react-bootstrap";
import { NearAddSelect } from "./NearAddSelect";

export class AdNearAdd extends Component{
    render(){
        return(
            <div>
           
                
                <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Intermediate</Col>
                    <Col></Col>
                    <Col>Intermediate</Col>
                 </Row>
                 <Row>
                    <Col ><NearAddSelect /> </Col>
                    <Col></Col>
                    <Col><NearAddSelect /></Col>
                </Row>
                <hr></hr>
             
                <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Near</Col>
                    <Col></Col>
                    <Col>Near</Col>
                 </Row>
                 <Row>
                    <Col ><NearAddSelect /></Col>
                    <Col></Col>
                    <Col><NearAddSelect /></Col>
                </Row>
                <hr></hr>
                </div>
        )
    }
}
