import React ,{Component}from "react"; 
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"; 
import Accordion from "@material-ui/core/Accordion"; 
import AccordionDetails from "@material-ui/core/AccordionDetails"; 
import Typography from "@material-ui/core/Typography"; 
import AccordionSummary from "@material-ui/core/AccordionSummary"; 
import { Row, Col } from "react-bootstrap";

import {DistanceSphereRight} from "./DistanceDropDown/DistanceSphereRight";
import { DistanceSphereLeft } from "./DistanceDropDown/DistanceSphereLeft";
import { DistanceCylRight } from "./DistanceDropDown/DistanceCylRight";
import { DistanceCylLefy } from  "./DistanceDropDown/DistanceCylLefy";
import { DistanceAxisRight } from "./DistanceDropDown/DistanceAxisRight";
import { DistanceAxisLeft } from "./DistanceDropDown/DistanceAxisLeft";

export class SphereAccording extends Component{
    render(){
      const eventhandler = data => console.log(data)
      const event = data => console.log(data)
        return(
         

    
                <div>

                

               

             
                  <Accordion className="SphereAccording" style={{background:"lightgrey"}} > 
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
                            <Col >Distance</Col>
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

                      <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Sphere(SPH)</Col>
                    <Col></Col>
                     <Col></Col>
                 </Row>
                 <Row>
                    <Col ><DistanceSphereRight onChange={eventhandler} /> </Col>
                    <Col></Col>
                    <Col><DistanceSphereLeft onChange={eventhandler} /></Col>
                </Row>
                <hr></hr>
                
                <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Cylinder(CYL)</Col>
                    <Col></Col>
                    <Col></Col>
                 </Row>
                 <Row>
                    <Col ><DistanceCylRight onChange={eventhandler} /> </Col>
                    <Col></Col>
                    <Col><DistanceCylLefy  onChange={eventhandler} /></Col>
                </Row>
                <hr></hr>
             
                <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Axis</Col>
                    <Col></Col>
                    <Col></Col>
                 </Row>
                 <Row>
                    <Col ><DistanceAxisRight onChange={event} /> </Col>
                    <Col></Col>
                    <Col><DistanceAxisLeft onChange={event}  /></Col>
                </Row>
               
                      </Typography> 
                    </AccordionDetails> 
                  </Accordion> 
                 <hr></hr>
                </div> 
              
        )
    }
}
 
