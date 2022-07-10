import React from "react";

const Button = (props) => {
    return(
        <button value={props.name} onClick={props.onClick}>{props.name}</button>
    )
}

export default Button