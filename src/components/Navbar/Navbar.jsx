import React from 'react'

function Navbar(props) {
    return (
        <div>
            <div className="row bg-dark text-white">
                <div className="col"></div>

                <div className="col">
                    {props.title}
                </div>

                <div className="col">
                    {props.user}
                    signout
                </div>

            </div>
        </div>
    )
}

export default Navbar