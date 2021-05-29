import axios from "axios";
import React from "react";
import { CheckBoxAndBtn } from "./CheckBoxAndBtn";
import { DateOfPre } from "./DateOfPre";
import { ExtraInfo } from "./ExtraInfo";
import { Lens } from "./Lens";
import { PupilPre } from "./PupilPre";
import { Component } from "react";

export class Label extends Component{

    
  

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
 
  render(){
      
      const eventhandler = data => console.log(data)
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
        
        return(
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
                 {/* EyeComponent*/}
                 <Lens  />
                <PupilPre />
                <DateOfPre />
                <ExtraInfo onChange={eventhandler}  />
                <CheckBoxAndBtn />
                </form>
            </div>


        )
        }

    }
