import React, { Component } from "react";
import { CheckBoxAndBtn } from "./CheckBoxAndBtn";
import { DateOfPre } from "./DateOfPre";
import { ExtraInfo } from "./ExtraInfo";
import { Lens } from "./Lens";
import { PupilPre } from "./PupilPre";


export class Header extends Component {
    render() {
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
            <div>
                <div className="heading" style={mystyle}>Enter new prescription</div>
                <p style={{ textAlign: "center" }}>Enter your prescription below</p>
                <p style={{ fontFamily: "Arial" }}>
                    All prescriptions will be checked by one of our opticians and verified for any potential errors or delays,
                    and they may contact you if they need to discuss your details any further.
                </p>
                <form style={inputStyle}>
                    <label> Prescription Name:</label>
                    <input type="text" name="name" required ></input>
                </form>
                <hr></hr>
                {/* EyeComponent*/}
                <Lens />
                <PupilPre />
                <DateOfPre />
                <ExtraInfo />
                <CheckBoxAndBtn />
            </div>
        )
    }
}