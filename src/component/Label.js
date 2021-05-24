import Axios from "axios";
import React,{Component, useState} from "react";

export function Label (){
    const url =""
    const [data,SetData] =useState({
        name: ""
    })
    function handle (e){
        const newdata={  ...data}      
        newdata[e.target.id] =e.target.value
        SetData(newdata)
      
    }
    function submit(e){
        alert('submit called')
        e.preventDefault();
        Axios.post(url,{
            name: data.name
        })
         .then(res => {
              console.log(res.data)
         })
    }
  
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
                <p style={{ textAlign: "center" }}>Enter your prescription below</p>
                <p style={{ fontFamily: "Arial" }}>
                    All prescriptions will be checked by one of our opticians and verified for any potential errors or delays,
                    and they may contact you if they need to discuss your details any further.
                </p>
                <form style={inputStyle} onSubmit={(e) => submit(e)}>
                    <label> Prescription Name:</label>
                    <input onChange={ (e) => handle(e) } id="name" value={data.name} type="text" name="name" required ></input>
                    <button>Submit</button>
                </form>
                <hr></hr>
            </div>


        )
    
}


