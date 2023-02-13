import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import { BsHouseDoor } from 'react-icons/bs';

export default function DefaultLayout() {
    const { user, token } = useStateContext()

    if (!token) {
        return <Navigate to="/login" />
    }

    const onLogout = (ev) => {
        ev.preventDefault()
    }

    return (
        <div id='defaultLayout'>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline">Menu</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <a href="#" className="nav-link align-middle px-0">
                                        <BsHouseDoor /> <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <Link className="nav-link px-0 align-middle" to="/dashboard">
                                        <i className="fs-4 bi-table"></i><span className="ms-1 d-none d-sm-inline">Dashboard</span></Link>
                                </li>
                                <li>
                                    <Link className="nav-link px-0 align-middle" to="/users">
                                        <i className="fs-4 bi-table"></i><span className="ms-1 d-none d-sm-inline">Users</span></Link>
                                </li>
                                <li>
                                    <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                        <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Some Link</span></a>
                                    <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Nested Link</span> </a>
                                    <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product1</span></a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product2</span></a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product3</span></a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product4</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Tenants</span> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className='row bg-secondary text-white shadow'>
                            <div className="col d-flex flex-row justify-content-end gap-4 flex-wrap align-items-center py-4">
                                {user.name}
                                <a href="#" onClick={onLogout} className="btn btn-danger">Sign Out</a>

                            </div>
                        </div>
                        <main>
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}
