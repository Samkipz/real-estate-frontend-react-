import React, { useMemo, useState, useEffect } from 'react';
import axiosClient from '../../axios-client';
import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import MaterialReactTable from 'material-react-table';

import './Projects.scss'





function Projects() {

    //======= fetch all projects =======//
    const [data, setData] = useState([])

    // const data = [
    //     {
    //         name: {
    //             firstName: 'John',
    //             lastName: 'Doe',
    //         },
    //         address: '261 Erdman Ford',
    //         city: 'East Daphne',
    //         state: 'Kentucky',
    //     }
    // ];

    // const data = [
    //     {
    //         name: {
    //             firstName: 'John',
    //             lastName: 'Doe',
    //         },
    //         address: '261 Erdman Ford',
    //         city: 'East Daphne',
    //         state: 'Kentucky',
    //     }
    // ];

    useEffect(() => {
        axiosClient.get('/project')
            .then(({ data }) => {
                setData(data)
            })
    }, [])

    console.log(data)


    const columns = useMemo(
        () => [
            {
                accessorKey: 'name', //access nested data with dot notation
                header: 'Project Name',
            },
            {
                accessorKey: 'admin.name',
                header: 'Admin in Charge',
            },
            {
                accessorKey: 'address', //normal accessorKey
                header: 'Address',
            },
            // {
            //     accessorKey: 'project_units', //normal accessorKey
            //     header: 'Number of units',
            // },
        ],
        [],
    );

    return <MaterialReactTable columns={columns} data={data} />;
}

export default Projects