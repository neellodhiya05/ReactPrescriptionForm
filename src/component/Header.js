import React, { Component } from "react";
import { CheckBoxAndBtn } from "./CheckBoxAndBtn";
import { DateOfPre } from "./DateOfPre";
import { ExtraInfo } from "./ExtraInfo";
import {Label} from "./Label";

import { Lens } from "./Lens";
import { PupilPre } from "./PupilPre";



export class Header extends Component {
    render() {
       
        return (
            <div>
               <Label />
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