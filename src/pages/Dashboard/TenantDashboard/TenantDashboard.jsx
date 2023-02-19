import React, { Component } from 'react'
import axiosClient from '../../../axios-client'
import { useStateContext } from '../../../contexts/ContextProvider'
import Users from '../../Users'
import './TenantDashboard.scss'



export class TenantDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: null,
      userInfo: null,
      unitInfo: null,
      propertyName: null,
      propertyManager: null,
      unitName: null,
    };
  }

  componentDidMount() {
    axiosClient('/user')
      .then(({ data }) => {
        this.setState(
          {
            userId: data.id,
            userInfo: data,
          }
        )

      })

    // function fetchData(id) {
    //   var result
    //   axiosClient(`/project-unit/${id}`)
    //     // console.log(this.state)
    //     .then(({ data }) => {
    //       result = data
    //     })
    //   // return 
    //   // .then(console.log(data))
    //   // .then(({ data }) => {
    //   //   return data
    //   // })

    // }


  }
  componentDidUpdate() {
    this.state.unitInfo === null ? (
      axiosClient(`/project-unit/${this.state.userId}`)
        .then(({ data }) => {
          this.setState(
            {
              unitInfo: data,
            }
          )
        })
    ) : null
  }






  render() {
    // function fetchData(id) {
    //   var result
    //   axiosClient(`/project-unit/${id}`)
    //     // console.log(this.state)
    //     .then(({ data }) => {
    //       this.st
    //     })
    // }
    // fetchData(this.state.userId)






    var unitInfoLoaded = this.state.unitInfo
    unitInfoLoaded && console.log(this.state.unitInfo)
    var dateOnBorded = new Date(unitInfoLoaded && this.state.unitInfo.tenant.created_at);

    return (
      <>
        <div className="row pt-4">
          <h4><u>Rental Profile Overview</u></h4>
          <div className="row">
            <div className="col">
              <div className="card text-start">
                <div className="card-body">
                  <h4 className="card-title">Property:</h4>{this.state.unitInfo && this.state.unitInfo.project.name}
                  <hr />
                  <h4 className="card-title">Manager:</h4>{this.state.unitInfo && this.state.unitInfo.project.admin.name}
                  <hr />
                  <h4 className="card-title">Apartment: </h4>{this.state.unitInfo && this.state.unitInfo.name}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-start">
                <div className="card-body">
                  <h4 className="card-title">Date Onborded:</h4> {dateOnBorded.toDateString()}
                  <hr />
                  <h4 className="card-title">Rent due on:</h4>
                  <hr />
                  <h4 className="card-title">Amount:</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )

  }
}

export default TenantDashboard