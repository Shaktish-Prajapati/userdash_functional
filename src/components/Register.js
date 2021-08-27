import React, { useState, useEffect } from 'react'
import {Form,Button} from 'react-bootstrap'
import cookie from 'react-cookies'
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { adminRegister } from '../actions/adminActions'


function Register() {
    const [registerForm, setRegisterForm] = useState({
        firstName:null,
        lastName:null,
        email:null,
        phone:null,
        gender:null,
        country:null,
        password:null,
    })
    const dispatch = useDispatch()
    const adminRegisterReducer = useSelector(state => state.adminRegisterReducer)
    const {loading, adminRegInfo, error} = adminRegisterReducer 

    const handleSubmit = (event) =>{
        event.preventDefault()
        dispatch(adminRegister({...registerForm}))
    }
    const history =  useHistory()
    useEffect(()=>{
        console.log(registerForm)
        if (localStorage.getItem('adminInfo')){
            history.push('/home')
        }
    },[registerForm,history])

    return (
        <div>
            <h2>Register here...</h2>
            <Form style={{margin:'10%'}}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
            {/* <Form.Label>FirstName</Form.Label> */}
            <Form.Control type="text" placeholder="Enter Firstname" onChange={(e)=>setRegisterForm({...registerForm, firstName:e.target.value})} />
            </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>LastName</Form.Label> */}
            <Form.Control type="text" placeholder="Enter Lastname" onChange={(e)=>setRegisterForm({...registerForm, lastName:e.target.value})} />
            </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setRegisterForm({...registerForm, email:e.target.value})} />
            </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="password" placeholder="Enter Password" onChange={(e)=>setRegisterForm({...registerForm, password:e.target.value})} />
            </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>Phone</Form.Label> */}
            <Form.Control type="text" placeholder="Enter Mobile" onChange={(e)=>setRegisterForm({...registerForm, phone:e.target.value})} />
            </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Select aria-label="Default select example" value={registerForm.gender} onChange={(e)=>setRegisterForm({...registerForm, gender:e.target.value})}>
            <option>Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
            </Form.Select>
            </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control type="text" placeholder="Enter Country Name" onChange={(e)=>setRegisterForm({...registerForm, country:e.target.value})} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(event)=>handleSubmit(event)}>
            {
                loading ? "Sending data ..." : "Register"
            }
            </Button>
            </Form>
    </div>
    )
}

export default Register
