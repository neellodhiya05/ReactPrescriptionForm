import React ,{Component}from "react"; 
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"; 
import Accordion from "@material-ui/core/Accordion"; 
import AccordionDetails from "@material-ui/core/AccordionDetails"; 
import Typography from "@material-ui/core/Typography"; 
import AccordionSummary from "@material-ui/core/AccordionSummary"; 
import { Row, Col } from "react-bootstrap";

import { NearAddSelect } from "./NearAddSelect";
import { InterSphereRight } from "./IntermidiateDropDown/InterSpherRight";
import { InterSphereLeft } from "./IntermidiateDropDown/InterSphereLeft";
import { InterCylRight } from "./IntermidiateDropDown/InterCylRight";
import { InterCylLeft } from "./IntermidiateDropDown/InterCylLeft";
import { InterAxisRight } from "./IntermidiateDropDown/InterAxisRight";
import { InterAxisLeft } from "./IntermidiateDropDown/InterAxisLeft";
import { InterNearAddRight } from "./IntermidiateDropDown/InterNearAddRight";
import { InterNearAddLeft } from "./IntermidiateDropDown/InterNearAddLeft";


export class IntermidiateAccording extends Component{
    render(){
      const eventhandler = data => console.log(data)
      const nearAdd = data => console.log(data)
      const event = data => console.log(data)
        return(
         

    
                <div > 

                

               

             
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
                            <Col >Intermidiate</Col>
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
                    <Col ><InterSphereRight onChange={eventhandler}/> </Col>
                    <Col></Col>
                    <Col><InterSphereLeft onChange={eventhandler}/></Col>
                </Row>
                <hr></hr>
                
                <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Cylinder(CYL)</Col>
                    <Col></Col>
                    <Col></Col>
                 </Row>
                 <Row>
                    <Col ><InterCylRight onChange={eventhandler}/> </Col>
                    <Col></Col>
                    <Col><InterCylLeft  onChange={eventhandler}/></Col>
                </Row>
                <hr></hr>
             
                <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Axis</Col>
                    <Col></Col>
                    <Col></Col>
                 </Row>
                 <Row>
                    <Col ><InterAxisRight onChange={event}/> </Col>
                    <Col></Col>
                    <Col><InterAxisLeft onChange={event}/></Col>
                </Row>
                <hr></hr>

                <Row style={{ fontFamily: "Arial Black" }}>
                    <Col >Near Addition(ADD)</Col>
                    <Col></Col>
                    <Col ></Col>
                </Row>
                <Row>
                    <Col ><InterNearAddRight onChange={nearAdd}/> </Col>
                    <Col></Col>
                    <Col><InterNearAddLeft onChange={nearAdd}/></Col>

                </Row>
               
                      </Typography> 
                    </AccordionDetails> 
                  </Accordion> 
                  <hr></hr>
                </div> 
              
        )
    }
}
 
