import React, { Component, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export function ExtraInfo() {
  
        const inputStyle = {
            fontFamily: "Arial Black",
            padding: "10px",
        }
        return (
            <div>
                <Container fluid="md" className="container">
                    <Row>
                        <Col>
                            
                                <label style={inputStyle}>Extra Information:</label>
                            
                        </Col>
                        <Col>
                            
                                <input id="extrainfo"  type="text-area" name="name" required ></input>
                            
                        </Col>
                    </Row>
                </Container>
                <hr></hr>
            </div>
        )
    }
