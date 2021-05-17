import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class DateOfPre extends Component {

    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {
        const inputStyle = {
            fontFamily: "Arial Black",
            padding: "10px",
        }

        return (
            <div>
               <Container fluid="md" className="container">
                 <Row>
                     <Col>
                        <form >
                            <label style={inputStyle}>Date Of Prescription:</label>
                        </form>
                    </Col>
                     <Col>
                   
                            <DatePicker
                                 selected={this.state.startDate}
                                onChange={this.handleChange}
                              />
                            
                     </Col>
                </Row>
             </Container>
             <hr></hr>
            </div>
        )
    };
}
