import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import axiosClient from '../../../axios-client.js'
import { useStateContext } from '../../../contexts/ContextProvider.jsx'
import './TenantLogin.scss'

function TenantLogin() {
    //get user from context
    const { setUser, setToken } = useStateContext()

    //state for errors returned from backend endpoint
    const [errors, setErrors] = useState(null)


    const emailRef = useRef()
    const passwordRef = useRef()

    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        // console.log(payload)
        axiosClient.post('/login', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token)
                alert('login success');
                return window.location.reload()
            })

            .catch(err => {
                // console.log(err.response.data.message)
                const response = err.response;
                // console.log(response)
                if (response && response.status === 401) {
                    setErrors(response.data)
                }
                if (response && response.status === 422) {
                    //validation error
                    setErrors(response.data.errors)
                }
            })

    }

    return (
        <div className='tenant-login g-0'>
            <div className="row admin-login-page">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-3 d-none d-md-flex"></div>
                    <div className="col d-flex flex-column justify-content-center mt-3 p-3">

                        <form onSubmit={onSubmit} className='loginForm'>
                            <h3 className='text-center mb-5'>Tenant Login Form</h3>
                            {errors && <div>
                                {Object.keys(errors).map(key => (
                                    <p className='alert alert-danger' key={key}> {errors[key][0]} </p>
                                ))}
                            </div>}

                            <div className="form-outline mb-4">
                                <input ref={emailRef} type="email" id="login-email" name='email' className="form-control" />
                                <label className="form-label" htmlFor="login-email">Email address</label>
                            </div>
                            <div className="form-outline mb-4">
                                <input ref={passwordRef} type="password" id="login-password" name='password' className="form-control" />
                                <label className="form-label" htmlFor="login-password">Password</label>
                            </div>

                            <div className="col d-flex justify-content-center">
                                <button type="submit" className="btn btn-info btn-block mybtn">Sign in</button>
                                {/* <Link className="btn btn-info mybtn" to='#'> Login </Link> */}
                            </div>
                        </form>

                    </div>
                    <div className="col-md-3 d-none d-md-flex"></div>
                </div>
            </div>
        </div>
    )
}
export default TenantLogin