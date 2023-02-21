import React, { useEffect, useState } from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useStateContext } from '../../../contexts/ContextProvider'
import { BsHouseDoor } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi'
import { TbLayoutDashboard } from 'react-icons/tb'
import { GrUserAdmin } from 'react-icons/gr'
import { MdRealEstateAgent, MdOutlineBusiness } from 'react-icons/md'
import { AiOutlineNotification } from 'react-icons/ai'
import axiosClient from '../../../axios-client';
import './DefaultLayout.scss'
import TenantDashboard from '../../../pages/Dashboard/TenantDashboard/TenantDashboard';
import Dashboard from '../../../pages/Dashboard/AdminDashboard/Dashboard';
import AdminSidebar from '../../../pages/Dashboard/AdminDashboard/AdminSidebar';
import TenantSidebar from '../../../pages/Dashboard/TenantDashboard/TenantSidebar';
import { LineWave } from 'react-loader-spinner'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


export default function DefaultLayout() {

    // const [Loading, setLoading] = useState(true)
    const { user, token, setUser, setToken, role, setRole, success, setSuccess } = useStateContext()
    let navigate = useNavigate()

    useEffect(() => {
        if (user) {
            user.roles[0].name == 'tenant' ? navigate('/tenant-dashboard') : navigate('/dashboard')
        }
    }, [])


    const onLogout = (ev) => {
        ev.preventDefault()

        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
                navigate('/')
            })
    }

    return (
        <div className='defaultLayout g-0'>
            <div className="row nav-col">
                <div className="col d-flex flex-row justify-content-end gap-4 flex-wrap align-items-center p-3">
                    {user?.name}
                    <a href="/logout" onClick={onLogout} className="btn btn-danger">Sign Out</a>
                </div>
            </div>

            <div className="tenant-container">

                <div className="row flex-nowrap">

                    {/* {Loading ? <LineWave
                        height="100"
                        width="100"
                        color="#ba1144"
                        ariaLabel="line-wave"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        firstLineColor=""
                        middleLineColor=""
                        lastLineColor=""
                    /> : */}
                    {user?.roles[0].name === 'super-admin' || user?.roles[0].name === 'project-admin' ?
                        (<div className="col-auto col-md-3 px-sm-2 px-0 bg-dark">
                            <AdminSidebar />
                        </div>) : (<div className="col-auto col-md-3 px-sm-2 px-0 bg-dark">
                            <TenantSidebar />
                        </div>)}
                    {/* } */}
                    <div className='bg-light outlet flex-shrink-1'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
