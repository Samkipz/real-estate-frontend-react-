import React, { useMemo, useState, useEffect } from 'react';
import axiosClient from '../../axios-client';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import MaterialReactTable from 'material-react-table';

import './Projects.scss'


function Projects() {

    //======= fetch all projects =======//
    const [data, setData] = useState([])
    const [rowSelection, setRowSelection] = useState({});

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

        // console.log(rowSelection)
    }, [rowSelection])



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



    return (<>
        <div className="row">
            <table className="table ">
                <thead>
                    <tr className='bg-info'>
                        <th scope="col">Project Name</th>
                        <th scope="col">Admin in Charge</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>

                <tbody>
                    {data.length === 0 ? <>Loading...</> : data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.admin?.name}</td>
                            <td>{item.address}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>











        {/* <MaterialReactTable

            columns={columns}
            data={data}
            // onRowSelectionChange={onSelectionChange}
            enableRowSelection
            // getRowId={(row) => setRowSelected(row)}
            muiTableBodyRowProps={({ row }) => ({
                onClick: console.log(row),
                sx: { cursor: 'pointer' },
            })}
            // // onRowSelectionChange={(row) => onRowClicked(row)}
            onRowSelectionChange={setRowSelection}

        // state={{ rowSelected }}

        /> */}

    </>)


}

export default Projects