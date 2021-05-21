import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
class Menu extends React.Component{
    render(){
        return(
            <div>

                
                <Container >
                    <Row>
                        <Col><NavLink exact activeClassName="active_class" to="/" >Simple Form</NavLink></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col><NavLink exact activeClassName="active_class" to="/advanced" >Advanced Form</NavLink></Col>
                    </Row>
                </Container>
              
                
            </div>
        )
    }
}
export default Menu
