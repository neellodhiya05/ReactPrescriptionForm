import React, { Component, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class ExtraInfo extends Component {
  
     state ={
         extraInfo: ' '
     }

     handleChange = e => {
        this.setState({ [e.target.name]: e.target.value }, () => {
          if (this.props.onChange) {
            this.props.onChange(this.state);
          }
        })
      };
        render(){
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
                            
                        <input onChange={this.handleChange} id="extrainfo"  type="text-area" name="extraInfo" required ></input>
                        </Col>
                    </Row>
                </Container>
                <hr></hr>
            </div>
        )
    }
}