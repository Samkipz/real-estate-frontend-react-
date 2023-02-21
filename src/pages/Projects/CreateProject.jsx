import React from 'react'
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Col, Button } from 'reactstrap';
import axiosClient from '../../axios-client';
import axios from 'axios';
baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
import { toast } from 'react-toastify';



export default class CreateProject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            file: '',
            address: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {

        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;

        this.setState({
            [name]: value,
        });

    };

    submitData(e) {
        e.preventDefault();


        const payload = {
            name: this.state.name,
            description: this.state.description,
            image: this.state.file,
            address: this.state.address
        }

        // let formData = new FormData();
        // formData.append('file', this.state.file,);
        // console.log('>> formData >> ', formData);

        axiosClient.post('/project', payload)
            .then(({ data }) => {
                toast.success("A new project has been added to the database")
            })
        console.log(payload)

    }


    render() {

        return (
            <div className="row ">
                <div className="col-md-2 d-none d-md-flex"></div>
                <div className="col d-flex flex-column justify-content-center border border-secondary p-4 mt-4">

                    <Form onSubmit={(e) => this.submitData(e)} encType="multipart/form-data">
                        <h3 className='text-center'>Add New Project</h3>

                        <FormGroup>
                            <Label for="name">Project Name</Label>
                            <Input
                                onChange={(e) => this.handleChange(e)}
                                type="text" name="name" id="name" placeholder="Enter Project Name" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input
                                onChange={(e) => this.handleChange(e)}
                                type="textarea" name="description" id="description" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="address">Location</Label>
                            <Input
                                onChange={(e) => this.handleChange(e)}
                                type="text" name="address" id="address" placeholder="Enter Project Address" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="image">Upload An Image File</Label>
                            <Input
                                onChange={(e) => this.handleChange(e)}
                                type="file" name="file" id="image" />
                            <FormText color="muted">
                                Not that all images must be high quality and less than 2MB size
                            </FormText>
                        </FormGroup>

                        <Button color="secondary" size="md" block>Create Project</Button>

                    </Form>
                </div>
                <div className="col-md-2 d-none d-md-flex"></div>
            </div>
        );
    }
}
