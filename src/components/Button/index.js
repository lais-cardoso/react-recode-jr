import React from "react";
import './styles.css'

function Button(props){
    return(
        //spread operator
        <button {...props}>{props.label}</button>
    )
    
}

export default Button