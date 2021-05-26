import React, { Component, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export function ExtraInfo() {
    const url =""
    const [data,SetData] =useState({
        extrainfo: ""
    })
    function handle (e){
        const newdata={  ...data}      
        newdata[e.target.id] =e.target.value
        SetData(newdata)
        console.log(newdata)
    }
   {
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
                            
                                <input onChange={ (e) => handle(e) } id="extrainfo" value={data.name} type="text-area" name="name" required ></input>
                            
                        </Col>
                    </Row>
                </Container>
                <hr></hr>
            </div>
        )
    }
}