import React from 'react';
import { Container, Button, Row, Col, Form, Stack } from 'react-bootstrap'
import Avatar from "react-avatar";
import { Link, useNavigate } from 'react-router-dom';
import user from '../data/user.json'

function Login({ setUser }) {

    const navigate = useNavigate();

    if (localStorage.getItem('loggedUser')) {
        navigate("/");
    }

    const checkLogin = (payload) => {

        const checkUser = user.data.find(item => item.username === payload.username &&
            item.password === payload.password)

        if (checkUser != undefined) {
            setUser(checkUser)
            localStorage.setItem("loggedUser", checkUser.username)
            navigate('/')
        } else {
            alert('Username or password incorrect')
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        let formObject = Object.fromEntries(data.entries());

        if (formObject.username && formObject.password) {
            checkLogin(formObject)

            if (formObject.rememberMe) {
                localStorage.setItem("remember", formObject.username)
            }
        } else {
            alert('Username or password empty')
        }

    }
    return (
        <div style={{ height: "100vh" }} className='align-items-center d-flex'>

            <Container className='mt-5'>
                <Stack gap={2} className="col-md-5 mx-auto">
                    <Avatar facebookId="100008343750912" size="150" round={true} className='mx-auto' />
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" placeholder="Username" id="username" name='username'/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control type="password" placeholder="Password" id="password" name='password'/>
                        </Form.Group>
                        <Stack direction='horizontal' gap={2}>
                            {['checkbox'].map((type) => (
                                <div key={`checkbox`} className="mb-3">
                                    <Form.Check style={{ color: "white" }}
                                        type={type}
                                        id={`checkbox`}
                                        label={`Remember me`}
                                    />
                                </div>
                            ))}
                            <Link to={``} className='ms-auto' style={{ color: "white" }}><p><i>Forgot Password?</i></p></Link>
                        </Stack>
                        <Button type='submit' style={{width: "100%"}} >Sign In</Button>
                    </Form>
                </Stack>
            </Container>
        </div>

    )
}

export default Login;