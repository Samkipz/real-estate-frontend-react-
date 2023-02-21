import React, { useEffect, useState } from 'react'
import './CreateIssue.scss'
import { useForm } from 'react-hook-form'
import axiosClient from '../../../axios-client';
import ListIssues from '../ListIssues/ListIssues';
import { useStateContext } from '../../../contexts/ContextProvider';
import { toast } from 'react-toastify';

function CreateIssue() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const [isLoading, setisLoading] = useState(false)

  const { user } = useStateContext({});
  const [tenantIssues, setTenantIssues] = useState()

  // console.log(user.id)

  useEffect(() => {
    axiosClient.get(`/issue/creator-id/${user.id}`)
      .then(({ data }) => {
        setTenantIssues(data)
        // toast.success("Fetch Success")
      }).catch(error => {
        // toast.error(error.message);
      })
  }, [])

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }



  tenantIssues && console.log(tenantIssues)


  const onSubmit = data => {
    axiosClient.post('/issue',
      data,
      {
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      })
      .then(({ data }) => {
        console.log(data)
        toast.success("Issue succesfully submitted for review")
      })
  };



  const opts = [
    {
      id: 1,
      name: "Other"
    },
    {
      id: 2,
      name: "Complain"
    },
    {
      id: 4,
      name: "Feature Request"
    },
    {
      id: 3,
      name: "Report Misconduct"
    }
  ]



  console.log(watch("example")); // watch input value by passing the name of it


  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">

            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Create A New Issue</h4>

                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">


                  <div className="form-group mb-4">
                    <label htmlFor="issueType">Type of Issue</label>
                    <select {...register("issue_type", { required: true })} className="form-control" id="issueType">
                      {opts.map((item) => (

                        <option key={item.id} value={item.id}>{item.name}</option>
                      ))}

                    </select>
                    {errors.issue_type && <span>
                      <div className="alert alert-danger mt-2" role="alert">
                        Description for the issue is required!
                      </div>
                    </span>}
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="title">Title(Optional)</label>
                    <input {...register("title")} type="text" className="form-control" id="title" placeholder="Enter title" />
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="description">Description</label>
                    <textarea {...register("description", { required: true })} className="form-control" id="description" rows="3"></textarea>
                    {/* errors will return when field validation fails  */}
                    {errors.description && <span>
                      <div className="alert alert-danger mt-2" role="alert">
                        A description for the issue is required!
                      </div>
                    </span>}
                  </div>
                  <button type='submit' className="btn btn-primary"> Submit Issue</button>
                  {/* <input type="submit" name='submit' /> */}
                </form>
              </div>



            </div>

          </div>
          <div className="col-md-6">

            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recent Issues Raised</h4>
              </div>
              <div className="comment-widgets scrollable issue">

                {tenantIssues ? tenantIssues.map((item) => (

                  <a href="#" key={item.id} className='text-decoration-none text-black mb-2 '>
                    <div className="d-flex flex-row comment-row m-t-0 ">
                      <div className="comment-text w-100 p-3">
                        <h6 className="font-medium"> <b>{item.title}</b></h6>
                        <span className="m-b-15 d-block">{item.description}</span>
                        <div
                          className="comment-footer d-flex flex-row justify-content-between align-items-end">

                          <div className="text-muted float-right">{formatDate(item.created_at)}</div>
                          <button type="button" className="btn btn-danger btn-sm">Mark as resolved</button>

                        </div>
                      </div>
                    </div>
                  </a>

                  // <option key={item.id} value={item.id}>{item.name}</option>
                )) : null}

                {/* <a href="#" className='text-decoration-none mb-2 '>
                  <div className="d-flex flex-row comment-row m-t-0 ">
                    <div className="comment-text w-100 p-3">
                      <h6 className="font-medium">Floor Remodelling</h6>
                      <span className="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
                      <div
                        className="comment-footer d-flex flex-row justify-content-between align-items-end">

                        <div className="text-muted float-right">April 14, 2016</div>
                        <button type="button" className="btn btn-danger btn-sm">Delete</button>

                      </div>
                    </div>
                  </div>
                </a> */}

                {/* <a href="#" className='text-decoration-none text-secondary mb-2'>
                  <div className="d-flex flex-row comment-row m-t-0">
                    <div className="comment-text w-100 p-3">
                      <h6 className="font-medium">Floor Remodelling</h6>
                      <span className="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
                      <div
                        className="comment-footer d-flex flex-row justify-content-between align-items-end">

                        <div className="text-muted float-right">April 14, 2016</div>
                        <button type="button" className="btn btn-danger btn-sm">Delete</button>

                      </div>
                    </div>
                  </div>
                </a> */}

                {/* <a href="#" className='text-decoration-none text-secondary mb-2'>
                  <div className="d-flex flex-row comment-row m-t-0">
                    <div className="comment-text w-100 p-3">
                      <h6 className="font-medium">Floor Remodelling</h6>
                      <span className="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
                      <div
                        className="comment-footer d-flex flex-row justify-content-between align-items-end">

                        <div className="text-muted float-right">April 14, 2016</div>
                        <button type="button" className="btn btn-danger btn-sm">Delete</button>

                      </div>
                    </div>
                  </div>
                </a> */}
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default CreateIssue