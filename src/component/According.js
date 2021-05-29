import React ,{Component} from "react";
import {SphereAccording} from "./SphereAccording";

import { IntermidiateAccording } from "./IntermidiateAccording";
import { NearAccording } from "./NearAccording";

export class According extends Component{
    render(){
        return(
            <div>
           <SphereAccording />
           <IntermidiateAccording />
           <NearAccording />
           </div>
        )
    }
}