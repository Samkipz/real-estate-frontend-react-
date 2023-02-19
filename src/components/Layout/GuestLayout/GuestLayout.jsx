import React, { useEffect } from 'react'
import { Navigate, Outlet, redirect, useNavigate } from 'react-router-dom'
import { useStateContext } from '../../../contexts/ContextProvider';
import axiosClient from '../../../axios-client';
import './GuestLayout.scss';

export default function GuestLayout() {

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


            // role && role === 'tenant' ? navigate("/tenant-dashboard") : navigate("/dashboard")
            // role && role === 'tenant' ? alert('tenant' === role) : alert(role)

            // if (role && role === 'tenant') {
            //     console.log(role)
            //     return navigate("/tenant-dashboard")
            // }
            // if (role && role === 'super-admin' || role === 'project-admin') {
            //     console.log(role)
            //     return navigate("/dashboard")
            // }
        }
    }, []);





    // if (token) {
    //     axiosClient.get('/user-role')
    //         .then(({ data }) => {
    //             console.log(data)
    //             setRole(data)
    //         })

    //     // role && role === 'tenant' ? navigate("/tenant-dashboard") : navigate("/dashboard")
    //     role && role === 'tenant' ? alert('role', role + ' going to - tenant-dashboard') : navigate("/dashboard")

    //     // if (role && role === 'tenant') {
    //     //     console.log(role)
    //     //     return navigate("/tenant-dashboard")
    //     // }
    //     // if (role && role === 'super-admin' || role === 'project-admin') {
    //     //     console.log(role)
    //     //     return navigate("/dashboard")
    //     // }
    // }

    return (
        <div className='guest-layout'>
            <Outlet />
        </div>
    )

}