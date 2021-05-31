import React, { Component} from "react";


export class LeftAxis extends Component {
  
     state ={
         leftAxis: ' '
     }

     handleChange = e => {
        this.setState({ [e.target.name]: e.target.value }, () => {
          if (this.props.onChange) {
            this.props.onChange(this.state);
          }
        })
      };
        render(){
           
        return (
            <div>
                <input onChange={this.handleChange} id="leftAxis"  type="number" name="leftAxis" required ></input>
            </div>
        )
    }
}