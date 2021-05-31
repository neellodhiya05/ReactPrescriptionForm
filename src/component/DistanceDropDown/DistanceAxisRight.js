import React, { Component} from "react";


export class DistanceAxisRight extends Component {
  
     state ={
         rightAxis: ' '
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
                <input onChange={this.handleChange} id="rightAxis"  type="number" name="DistancerightAxis" required ></input>
            </div>
        )
    }
}