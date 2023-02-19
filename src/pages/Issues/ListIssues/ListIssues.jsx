import React, { useEffect, useState } from 'react'
import axiosClient from '../../../axios-client'


function ListIssues() {

    //fetch issues
    const [issues, setIssues] = useState(null);

    useEffect(() => {
        axiosClient.get('/issue')
            .then(({ data }) => {
                console.log(data)
            })
    }, [])
    return (
        <div>ListIssues</div>
    )
}

export default ListIssues