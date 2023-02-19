import React from 'react'
import { Link } from 'react-router-dom'

import { BsHouseDoor } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi'
import { TbLayoutDashboard } from 'react-icons/tb'
import { GrUserAdmin } from 'react-icons/gr'
import { MdOutlineManageAccounts, MdOutlineBusiness } from 'react-icons/md'
import { AiOutlineNotification, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FaChalkboardTeacher } from 'react-icons/fa'



function AdminSidebar() {
    return (
        <div>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Super Admin</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li>
                        <Link className="nav-link px-0 align-middle" to="/dashboard">
                            <TbLayoutDashboard /><span className="ms-1 d-none d-sm-inline">Dashborad</span></Link>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <HiOutlineUserGroup /><span className="ms-1 d-none d-sm-inline">Users</span></a>
                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link className="nav-link px-0" to="/add-user">
                                    <AiOutlineUsergroupAdd /><span className="d-none d-sm-inline">Add Users</span> </Link>

                            </li>
                            <li>
                                <Link className="nav-link px-0 align-middle" to="#">
                                    <FaChalkboardTeacher /><span className="ms-1 d-none d-sm-inline">Roles</span></Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="nav-link px-0 align-middle" to="/list-projects">
                            <MdOutlineBusiness /><span className="ms-1 d-none d-sm-inline">Projects</span></Link>
                    </li>

                    <li>
                        <Link className="nav-link px-0 align-middle" to="/view-issue">
                            <AiOutlineNotification /><span className="ms-1 d-none d-sm-inline">Issues</span></Link>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0 font-weight-bold">
                            <MdOutlineManageAccounts /> <span className="ms-1 d-none d-sm-inline font-weight-bold">My Profile</span>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default AdminSidebar