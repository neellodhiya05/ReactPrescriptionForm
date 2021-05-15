import React, { Component } from "react";

export class CheckBoxAndBtn extends Component {
    render() {
        const mystyle = {
            color: "white",
            padding: "10px",
            fontFamily: "Arial Black",
            textAlign: "center",
            fontSize: "20px"
        }
        return (
            <div>
                <input type="checkbox" />
                <label >
                    I confirm that I've read and agree to the <a href="#">Terms and Conditions</a>. I certify that the wearer is over 16 years old and that they are not registered blind or partially sighted. I also confirm that the prescription details above have been entered correctly and I am happy that no errors have been made.
                </label>
                <form>
                    <div className="heading" style={mystyle}>
                        <button className="btn-btn sucess" type="submit">
                            Add Prescription
                     </button>
                    </div>
                </form>
            </div>

        )
    }
}