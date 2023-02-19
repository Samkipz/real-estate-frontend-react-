import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import './ProjectAdmins.scss'

const ProjectAdmins = (props) => {
    return (
        <div className="mt-4">
            <Row>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Create New Users</Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Link className='btn btn-secondary' to='/add-admin'>Add New Project Admin</Link>
                    </Card>
                </Col>
            </Row>
        </div>

    );
};

export default ProjectAdmins