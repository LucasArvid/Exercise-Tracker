import React from "react"

const Form = (props) => {

    return(
       <div className={props.className}>
           {props.children}
       </div> 
    )
}

export default Form