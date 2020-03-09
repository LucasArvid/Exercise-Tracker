import React, { useEffect } from "react"

import Form from "../Form/Form.jsx"
import Input from "../Input/Input.jsx"
import Button from "../Button/Button.jsx"

import "@babel/polyfill"

import "./Dashboard.css"

const Dashboard = () =>{

    const [userShowState, setUserShowState] = React.useState({
        userShow: false
    })

    const [exerciseShowState, setExerciseShowState] = React.useState({
        exerciseShow: false
    })

    const [inputState, setInputState] = React.useState({
        userId: "",
        description: "",
        duration: "",
        date: "",
        username: "",
        usernameExercise: ""
    })

    const [validationState, setValidationState] = React.useState({
        date: false,
        duration: false
    })

    const showUserText = () => {
        setUserShowState(false)
        console.log(userShowState)
        timeout = setTimeout(() => {
            setUserShowState(true)
        }, 2000);
    }

    const showExerciseText = () => {
        setExerciseShowState(false)
        console.log(exerciseShowState)
        exerciseTimeout = setTimeout(() => {
            setExerciseShowState(true)
        }, 2000);
    }

    useEffect(() => {
        return () => { 
            clearTimeout(exerciseTimeout) 
            clearTimeout(userTimeout) 
        }
    }, []) 

    const onAddExerciseSubmit = async (event) =>{

        event.preventDefault()
        const url = "http://localhost:8080/api/exercise/add"
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: inputState.usernameExercise,
                description: inputState.description,
                duration: inputState.duration,
                date: inputState.date
            })
        }
        try {
            const response = await fetch(url, reqObj)
        } catch (e) {
            console.error(e)
            return
        }
        showExerciseText()
        const data = await response.json()
        console.log(data)
        
        
    }

    const onAddUserSubmit = async (event) =>{
        event.preventDefault()
        const url = "http://localhost:8080/api/exercise/new-user"
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: inputState.username
            })
        }
        try {
            const response = await fetch(url, reqObj)
        } catch (e) {
            console.error(e)
            return
        }
        showUserText()
        const data = await response.json()
        console.log(data)
        
        
    }

    return(
        <div className="mainContainer">
            <h1 className="mainTitle">Exercise Trainer</h1>
            <p className="mainDesc">This application allows for saving a user and adding exercise sessions to said user.</p>
            <p className="mainDesc">The exercises connected to a user can later be viewed.</p>
            <Form className="userForm">
            <p className="formDesc"> Create a user </p>
                <Input type="text" name="username" placeHolder="Username" state={inputState} setState={setInputState} className="inputContainer"/>
                <Button type="submit" onClick={onAddUserSubmit} className="buttonContainer">
                        Add User
                </Button>
                <p className={!userShowState ? "showUser" : "hideUser"}>User Added</p>
            </Form>
            
            <Form className="exerciseForm">
                <p className="formDesc"> Add a exercise </p>
                <Input type="text" name="usernameExercise" placeHolder="Username*" state={inputState} setState={setInputState} className="inputContainer"/>
                <Input type="text" name="description" placeHolder="Description*" state={inputState} setState={setInputState} className="inputContainer"/>
                <Input type="text" name="duration" placeHolder="Duration* (mins.)" validation={true} state={inputState} setState={setInputState} error={validationState} setErrorState={setValidationState} className={validationState.duration ? "inputContainerError" : "inputContainer"}/>
                <Input type="text" name="date" placeHolder="Date (yyyy-mm-dd)" validation={true} state={inputState} setState={setInputState} error={validationState} setErrorState={setValidationState} className={validationState.date ? "inputContainerError" : "inputContainer"}/>
                <Button type="submit" onClick={onAddExerciseSubmit} className="buttonContainer">
                    Add Exercise
                </Button>
                <p className={!exerciseShowState ? "showUser" : "hideUser"}>Exercise Added</p>
            </Form>

        </div>
    )
}

export default Dashboard