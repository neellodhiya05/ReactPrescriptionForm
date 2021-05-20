import React from "react";
import { NavLink } from "react-router-dom";
class Menu extends React.Component{
    render(){
        return(
            <div>
                <NavLink exact activeClassName="active_class" to="/" >Simple Form</NavLink>
                <NavLink exact activeClassName="active_class" to="/advanced" >Advanced Form</NavLink>
            </div>
        )
    }
}
export default Menu
