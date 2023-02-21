import React, { useEffect, useState } from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useStateContext } from '../../../contexts/ContextProvider'
import axiosClient from '../../../axios-client';
import Projects from '../../Projects/Projects';

export default function Dashboard() {
    let navigate = useNavigate()

    const { user, token, setUser, setToken, role } = useStateContext()

    if (!token) {
        return <Navigate to='/' />
    }
    if (user.roles.name == 'tenant') {
        console.log(user.roles.name)
        return <Navigate to='/tenant-dashboard' />
    }

    return (
        <>
            <div className="row text-underline mt-3">
                <h1><u>All Projects</u></h1>
                <Projects />
            </div>
        </>
    )
}
