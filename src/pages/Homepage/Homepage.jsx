import React, { useEffect } from 'react'
import './Homepage.scss'
import { useStateContext } from '../../contexts/ContextProvider'
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom'
import axiosClient from '../../axios-client'


function Homepage() {

  const { token, role, setRole } = useStateContext()
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axiosClient.get('/user-role')
        .then(({ data }) => {
          if (data === 'tenant') {
            setRole(data)
            navigate("/tenant-dashboard")
          }
          navigate("/dashboard")
        })
    }
  }, []);
  return (
    <div className='homepage'>
      <div className="container">
        <div className="row py-4">
          <div className="col d-flex flex-row align-items-center justify-content-start logo-col">
            <img src='/assets/images/logo.png' alt='' />
          </div>
          <div className="col-6 d-flex align-items-center justify-content-center my-title"> <u>Oaks Property Management</u> </div>
          <div className="col"></div>
        </div>
        <div className="clearbg">

          <div className="row d-flex align-items-center justify-content-center">
            <div className="col"></div>
            <div className="col-8">
              <div className="mytext text-center d-flex align-items-center justify-content-start">
                A one stop solution for all your property management
              </div>
            </div>
            <div className="col"></div>
          </div>
          <div className="row d-flex align-items-center  justify-content-center vh-45 vw-90">
            <div className="row my-4 p-2 ">

              <div className="col d-flex justify-content-center button-row">
                <Link className="btn btn-outline-warning mybtn " to='/login/tenant'> Log in to Proceed </Link>
                {/* <Link className="btn btn-danger mybtn " to='/login/admin'> Log in as Admin </Link> */}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage