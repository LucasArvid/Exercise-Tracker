import React from "react"

const Input = (props) => {

    const onChange = (e) => {
        const {name, value} = e.target
        props.setState({...props.state, [name]: value})
        console.log(props.state.value)
    }

    return(
        <div className={props.className}>
            <input type={props.type} name={props.name} value={props.state[props.name]} placeholder={props.placeHolder} onChange={onChange} />
        </div>
    )
}

export default Input
