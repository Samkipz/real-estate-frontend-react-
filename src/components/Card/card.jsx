import React from 'react'

function card(prop) {
    return (
        <>
            <div className="card">
                {prop.content}
            </div>
        </>
    )
}

export default card