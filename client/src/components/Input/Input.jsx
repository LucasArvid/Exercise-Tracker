import React from "react"

const Input = (props) => {

    const inputValidation =  async () => {
        let regexDuration = RegExp("^[0-9]*$")
        let regexDate = RegExp("^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$")
        if (props.name === "date") {
            if (regexDate.test(props.state.date)){
                await props.setErrorState({
                    ...props.error, date: false
                })
            }   
            else {
                await props.setErrorState({
                    ...props.error, date: true
                })
            }
        } else if (props.name === "duration") {
            if (regexDuration.test(props.state.duration)){
                await props.setErrorState({
                    ...props.error, duration: false
                })
           }   
           else {
                await props.setErrorState({
                    ...props.error, duration: true
                })
           }
        }

    }

    const onChange = (e) => {
        
        console.log(props.error)
        const {name, value} = e.target
        props.setState({...props.state, [name]: value})
        console.log(props.state.value)
    }

        return(
            <div className={props.className}>
                <input type={props.type} name={props.name} value={props.state[props.name]} placeholder={props.placeHolder} onChange={onChange} onBlur={props.validation ? inputValidation : null} />
            </div>
        )

}

export default Input
