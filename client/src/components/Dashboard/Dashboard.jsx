import React from "react"

import Form from "../Form/Form.jsx"
import Input from "../Input/Input.jsx"
import Button from "../Button/Button.jsx"

import "./Dashboard.css"

const Dashboard = () =>{

    const [inputState, setInputState] = React.useState({
        userId: "",
        description: "",
        duration: "",
        date: "",
        username: ""
    })

    const onAddExerciseSubmit = () =>{
        console.log("hello")
    }

    const onAddUserSubmit = () =>{
        console.log("helloerer")
    }

    return(
        <div className="mainContainer">
            
            <Form className="userForm">
            <p> Create a user </p>
                <Input type="text" name="username" placeHolder="Thingy" state={inputState} setState={setInputState} className="inputContainer"/>
                <Button type="submit" onClick={onAddUserSubmit} className="buttonContainer">
                        Add User
                </Button>
            </Form>
            
            <Form className="exerciseForm">
                <p> Add a exercise </p>
                <Input type="text" name="userId" placeHolder="Thingy" state={inputState} setState={setInputState} className="inputContainer"/>
                <Input type="text" name="description" placeHolder="Thingy" state={inputState} setState={setInputState} className="inputContainer"/>
                <Input type="text" name="duration" placeHolder="Thingy" state={inputState} setState={setInputState} className="inputContainer"/>
                <Input type="text" name="date" placeHolder="Thingy" state={inputState} setState={setInputState} className="inputContainer"/>
                <Button type="submit" onClick={onAddExerciseSubmit} className="buttonContainer">
                        Add Exercise
                </Button>
            </Form>

        </div>
    )
}

export default Dashboard