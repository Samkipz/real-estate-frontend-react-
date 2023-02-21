import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Col, Button } from 'reactstrap';
import axiosClient from '../../axios-client';
import { toast } from 'react-toastify';

export class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            role: '',
            validate: {
                emailState: '',
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;



        this.setState({
            [name]: value,
            if(role) {
                alert(role)
            }
        });
    };


    validateEmail(e) {
        const emailRex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const { validate } = this.state;

        if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success';
        } else {
            validate.emailState = 'has-danger';
        }

        this.setState({ validate });
    }

    submitForm(e) {
        e.preventDefault();
        const payload = {
            name: this.state.name,
            email: this.state.email,
            role: this.state.role
        }
        // console.log(payload);

        axiosClient.post('/users', payload)
            .then(({ data }) => {
                toast.success("New User added and Credentials Email send")
            })

    }


    render() {

        return (
            <div className="row ">
                <div className="col-md-2 d-none d-md-flex"></div>
                <div className="col d-flex flex-column justify-content-center border border-secondary p-4 mt-4">
                    <Form onSubmit={(e) => this.submitForm(e)}>
                        <h3 className='text-center'>Add New User</h3>

                        <FormGroup row>
                            <Label for="UserName" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input
                                    type="text"
                                    name="name"
                                    id="userName"
                                    placeholder="Enter user name"
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="userEmail" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input
                                    type="email"
                                    name="email"
                                    id="userEmail"
                                    placeholder="Enter user email"
                                    valid={this.state.validate.emailState === "has-success"}
                                    invalid={this.state.validate.emailState === "has-danger"}
                                    onChange={(e) => {
                                        this.validateEmail(e);
                                        this.handleChange(e);
                                    }} required />
                            </Col>
                            <FormFeedback>
                                Please input a correct email.
                            </FormFeedback>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="userRole" sm={2}>User Role</Label>
                            <Col sm={10}>
                                <Input
                                    type="select"
                                    name="role"
                                    id="userRole"

                                    onChange={(e) => this.handleChange(e)}
                                    sm={10}>
                                    <option>Select User Role</option>
                                    <option value='project-admin'> Project Admin</option>
                                    <option value='super-admin'>Super Admin</option>
                                    <option value='tenant'>Tenant</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <Button color="secondary" size="md" block>Create User</Button>

                    </Form>
                </div>
                <div className="col-md-2 d-none d-md-flex"></div>
            </div>
        );
    }
}

export default AddUser