import React from 'react'
import { Link } from 'react-router-dom'

import { BsHouseDoor } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi'
import { TbLayoutDashboard } from 'react-icons/tb'
import { GrUserAdmin } from 'react-icons/gr'
import { MdRealEstateAgent, MdOutlineBusiness } from 'react-icons/md'
import { AiOutlineNotification } from 'react-icons/ai'

function TenantSidebar() {
    return (
        <>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">User Dashboard</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li>
                        <Link className="nav-link px-0 align-middle" to="/tenant-dashboard">
                            <TbLayoutDashboard /><span className="ms-1 d-none d-sm-inline">Dashboard</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#" className="nav-link align-middle px-0 font-weight-bold" to="/tenant-profile">
                            <HiOutlineUserGroup /> <span className="ms-1 d-none d-sm-inline font-weight-bold">Manage Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link px-0 align-middle" to="#">
                            <MdRealEstateAgent /><span className="ms-1 d-none d-sm-inline">Manage Payments</span></Link>
                    </li>
                    <li>
                        <Link className="nav-link px-0 align-middle" to="/create-issue">
                            <AiOutlineNotification /><span className="ms-1 d-none d-sm-inline">Report an Issue</span></Link>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default TenantSidebar