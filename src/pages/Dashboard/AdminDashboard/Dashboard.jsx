import React, { useEffect, useState } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../../contexts/ContextProvider'
import axiosClient from '../../../axios-client';
import Projects from '../../Projects/Projects';

export default function Dashboard() {

    const { user, token, setUser, setToken, role } = useStateContext()
    console.log(role)

    useEffect(() => {
        if (!token) {
            return <Navigate to="/" />
        }
        if (role === 'tenant') {
            return <Navigate to="/tenant-dashboard" />
        }
    }, [])

    if (!token) {
        return <Navigate to="/" />
    }
    if (role === 'tenant') {
        return <Navigate to="/tenant-dashboard" />
    }

    const onLogout = (ev) => {
        ev.preventDefault()
        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
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
