import React ,{Component}from "react"; 
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"; 
import Accordion from "@material-ui/core/Accordion"; 
import AccordionDetails from "@material-ui/core/AccordionDetails"; 
import Typography from "@material-ui/core/Typography"; 
import AccordionSummary from "@material-ui/core/AccordionSummary"; 
import { Row, Col } from "react-bootstrap";
import { Select } from "./Select";


export class SphereAccording extends Component{
    render(){
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
                    <Col ><Select /> </Col>
                    <Col></Col>
                    <Col><Select /></Col>
                </Row>
                <hr></hr>
                
                <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Cylinder(CYL)</Col>
                    <Col></Col>
                    <Col></Col>
                 </Row>
                 <Row>
                    <Col ><Select /> </Col>
                    <Col></Col>
                    <Col><Select /></Col>
                </Row>
                <hr></hr>
             
                <Row style={{ fontSize: " calc(1em + 1vw)" }}>
                    <Col >Axis</Col>
                    <Col></Col>
                    <Col></Col>
                 </Row>
                 <Row>
                    <Col ><input type="number" /> </Col>
                    <Col></Col>
                    <Col><input type="number" /></Col>
                </Row>
                <hr></hr>
                      </Typography> 
                    </AccordionDetails> 
                  </Accordion> 
                  <hr></hr>
                </div> 
              
        )
    }
}
 