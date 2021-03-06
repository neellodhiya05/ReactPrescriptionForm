import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { PupilPre } from "./PupilPre";
import { CheckBoxAndBtn } from "./CheckBoxAndBtn";
import { DateOfPre } from "./DateOfPre";
import { ExtraInfo } from "./ExtraInfo";
import {According} from "./According";



class Advanced extends React.Component {
  constructor(props){
    super(props)

    this.state ={
        userId: ' ',
        
                }
}
handleCallback = (childData) =>{
    this.setState({extraInfo: childData})
}
changeHandler = (e)=>{
    this.setState({  [e.target.name]: e.target.value   })
}

submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}
    render() {
     
      const {userId} = this.state
      
        const mystyle = {
            color: "black",
            padding: "10px",
            fontFamily: "Arial Black",
            textAlign: "center",
            fontSize: "30px"
        }
        const inputStyle = {
            fontFamily: "Arial Black",
            padding: "10px",
        }
        return (
            <Container fluid="md" className="container">
            <Row className="rows">
              <Col className="columns">
              <div>
                
                <div className="heading" style={mystyle}>Enter new prescription</div>
               <p  style={{ textAlign: "center" }}>Enter your prescription below</p>
               <p style={{ fontFamily: "Arial" }}>
                   All prescriptions will be checked by one of our opticians and verified for any potential errors or delays,
                   and they may contact you if they need to discuss your details any further.
               </p>
               <form  onSubmit={this.submitHandler} >
                   <label style={inputStyle}> Prescription Name:</label>
                   <input  id="name" type="text" name="userId" value={userId} onChange={this.changeHandler} required ></input>
                   
              
               <hr></hr>
                
               
           
                <According />
                <PupilPre />
                <DateOfPre />
                <ExtraInfo />
                <CheckBoxAndBtn />
                </form>
                </div>
              </Col>
            </Row>
          </Container>
          
        )
    }
}

export default Advanced