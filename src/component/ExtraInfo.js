import React ,{Component} from"react";
import {Container, Row ,Col} from "react-bootstrap";

export class ExtraInfo extends Component{
    render(){
        const inputStyle = {
            fontFamily: "Arial Black",
            padding: "10px",
        }
        return(
            <div>
                <Container fluid="md" className="container">
                    <Row>
                        <Col>
                        <form >
                            <label style={inputStyle}>Extra Information:</label>
                        </form>
                        </Col>
                        <Col>
                            <form>
                            <input type="text-area" name="name" required ></input>
                            </form>
                        </Col>
                    </Row>
                </Container>
            <hr></hr>
            </div>
        )
    }
}