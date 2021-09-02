import React, {useState, useEffect} from 'react'
import './Login.css'
import cookie from 'react-cookies'
import {Form,Button} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import { loginWithEmail, loginWithMobile } from '../actions/adminActions'
import { useHistory } from 'react-router-dom'

function Login() {
    
    const [loginForm, setLoginForm] = useState({
        isMobile:false,
        email:null,
        mobile:null,
        password:null
    })

     const dispatch = useDispatch()
     const adminLoginReducer = useSelector(state => state.adminLoginReducer)
     const {loading,error, adminInfo} = adminLoginReducer
    
     const history = useHistory();
     useEffect(() => {
         if(adminInfo){
             history.push('/home')
         }
     }, [history, adminInfo])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (loginForm.isMobile) {
            dispatch(loginWithMobile(loginForm.mobile, loginForm.password))
        } else {
            dispatch(loginWithEmail(loginForm.email, loginForm.password))
        }
    }

    useEffect(() => {
        console.log(loginForm)
    }, [loginForm])

    return (
        <div>  
    <Form style={{padding:'10%'}}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    {
      loginForm.isMobile ? <>
      <Form.Label>Mobile Number</Form.Label>
      <Form.Control type="email" placeholder="Enter Mobile number" onChange={(e)=>setLoginForm({...loginForm, mobile:e.target.value})} value={loginForm.mobile} required/>
      </> : <> 
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setLoginForm({...loginForm,email:e.target.value})} value={loginForm.email} required />
      </>
    }
    {/* <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" /> */}
    <Form.Text className="text-muted">
    We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>setLoginForm({...loginForm,password:e.target.value})} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" onClick= {()=> setLoginForm({...loginForm, isMobile:!loginForm.isMobile})} label="Use mobile number" />
    </Form.Group>
    <Button variant="primary" type="submit" onClick={(e)=>handleSubmit(e)}>
    {loading ? "Loading..." : "Submit"}
    </Button>
    </Form>
    </div>
    )
}

export default Login
