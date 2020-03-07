import React from "react"

import "./Button.css"

const Button = (props) => {
    
    return (
            <div className={props.className}>
                <a onClick={props.onClick}>
                    {props.children}
                </a>
            </div>
    )
}

export default Button