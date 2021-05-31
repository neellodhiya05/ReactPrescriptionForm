import React ,{Component}from "react"; 
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"; 
import Accordion from "@material-ui/core/Accordion"; 
import AccordionDetails from "@material-ui/core/AccordionDetails"; 
import Typography from "@material-ui/core/Typography"; 
import AccordionSummary from "@material-ui/core/AccordionSummary"; 
import { Row, Col } from "react-bootstrap";
import {NearSphereRight} from "./NearDropDown/NearSphereRight";
import { NearAddSelect } from "./NearAddSelect"
import {NearSphereLeft} from "./NearDropDown/NearSphereLeft";
import {NearNearAddRight} from "./NearDropDown/NearNearAddRight";
import {NearNearAddLeft} from "./NearDropDown/NearNearAddLeft";
import{NearCylRight} from "./NearDropDown/NearCylRight";
import {NearCylLeft} from "./NearDropDown/NearCylLeft";
import {NearAxisRight}from "./NearDropDown/NearAxisRight";
import {NearAxisLeft} from "./NearDropDown/NearAxisLeft";

export class NearAccording extends Component{
    render(){
      const eventhandler = data => console.log(data)
      const nearAdd = data => console.log(data)
      const event = data => console.log(data)
        return(
                <>
                  <Accordion className="SphereAccording" style={{background:"lightgrey"}}> 
                    <AccordionSummary 
                      expandIcon={<ExpandMoreIcon />} 
                      aria-controls="panel1a-content"
                    > 
                      <Typography 
                        style={{ 
                          fontWeight: 10, 
                        }} 
                      > 
                         <Row style={{ fontFamily: "Arial Black" }}>
                            <Col >Near</Col>
                            <Col></Col>
                            <Col ></Col>
                        </Row>
            
                      </Typography> 
                    </AccordionSummary> 
                    <AccordionDetails> 
                      <Typography>
                      <Row style={{ fontFamily: "Arial Black" }}>
                            <Col>Right Eye</Col>
                            <Col></Col>
                            <Col>Left Eye</Col>
                     </Row>
                    <hr></hr>

                      <Row >
                    <Col>Sphere(SPH)</Col>
                    <Col></Col>
                     <Col></Col>
                 </Row>
                 <Row>
                    <Col ><NearSphereRight onChange={eventhandler} /></Col>
                    <Col></Col>
                    <Col><NearSphereLeft onChange={eventhandler} /> </Col>
                </Row>
                <hr></hr>
                
                <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Cylinder(CYL)</Col>
                    <Col></Col>
                    <Col></Col>
                 </Row>
                 <Row>
                    <Col ><NearCylRight onChange={eventhandler}/> </Col>
                    <Col></Col>
                    <Col><NearCylLeft onChange={eventhandler}/></Col>
                </Row>
                <hr></hr>
             
                <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Axis</Col>
                    <Col></Col>
                    <Col></Col>
                 </Row>
                 <Row>
                    <Col ><NearAxisRight onChange={event}/> </Col>
                    <Col></Col>
                    <Col><NearAxisLeft onChange={event}/></Col>
                </Row>
                <hr></hr>

                <Row style={{ fontFamily: "Arial Black" }}>
                    <Col >Near Addition(ADD)</Col>
                    <Col></Col>
                    <Col ></Col>
                </Row>
                <Row>
                    <Col ><NearNearAddRight onChange={nearAdd} /> </Col>
                    <Col></Col>
                    <Col><NearNearAddLeft onChange={nearAdd} /></Col>
                </Row>
                      </Typography> 
                    </AccordionDetails> 
                  </Accordion> 
                  <hr></hr>
                </> 
              
        )
    }
}
 
