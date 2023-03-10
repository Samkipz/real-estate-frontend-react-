import React from 'react'
import './ViewIssue.scss'
import { FaPaperPlane } from 'react-icons/fa'

function ViewIssue() {
    return (
        <div>

            <div className="container py-4 px-3">
                <div className="row rounded-lg overflow-hidden shadow">
                    <div className="col-5 px-0">
                        <div className="bg-white">

                            <div className="bg-gray px-4 py-2 bg-light">
                                <p className="h5 mb-0 py-1">Recent Issues from Clients</p>
                            </div>

                            {/* Recent issues scrollable */}
                            <div className="messages-box">
                                <div className="list-group rounded-0">
                                    <a className="list-group-item list-group-item-action active text-white rounded-0">
                                        <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                                            <div className="media-body ml-4">
                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">25 Dec</small>
                                                </div>
                                                <p className="font-italic mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                        <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                                            <div className="media-body ml-4">
                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">14 Dec</small>
                                                </div>
                                                <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                        <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                                            <div className="media-body ml-4">
                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">9 Nov</small>
                                                </div>
                                                <p className="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                        <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                                            <div className="media-body ml-4">
                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">18 Oct</small>
                                                </div>
                                                <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                        <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                                            <div className="media-body ml-4">
                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">17 Oct</small>
                                                </div>
                                                <p className="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                        <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                                            <div className="media-body ml-4">
                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">2 Sep</small>
                                                </div>
                                                <p className="font-italic text-muted mb-0 text-small">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                        <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                                            <div className="media-body ml-4">
                                                <div className="d-flex align-items-center justify-content-between mb-1">
                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">30 Aug</small>
                                                </div>
                                                <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                        <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                                            <div className="media-body ml-4">
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">21 Aug</small>
                                                </div>
                                                <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-7 px-0">
                        <div className="px-4 py-4 chat-box bg-white">

                            <div className="media w-50 mb-3 "><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                                <div className="media-body ml-3">
                                    <div className="bg-light rounded py-2 px-3 mb-2">
                                        <p className="text-small mb-0 text-muted">This is from left bar</p>
                                    </div>
                                    <p className="small text-muted">12:00 PM | Aug 13</p>
                                </div>
                            </div>


                            <div className="media w-50 ms-auto mb-3">
                                <div className="media-body">
                                    <div className="bg-primary rounded py-2 px-3 mb-2">
                                        <p className="text-small mb-0 text-white">Test which is a new approach to have all solutions</p>
                                    </div>
                                    <p className="small text-muted">12:00 PM | Aug 13</p>
                                </div>
                            </div>
                        </div>

                        <form action="#" className="bg-light mb-4 px-2">
                            <div className="input-group">
                                <input type="text" placeholder="Type a message" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light" />
                                <div className="input-group-append">
                                    <button id="button-addon2" type="submit" className="btn btn-link"> <FaPaperPlane /></button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewIssue