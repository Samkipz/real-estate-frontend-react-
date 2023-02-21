import React, { useEffect, useState } from 'react'
import axiosClient from '../../../axios-client'
import './TenantDashboard.scss'
import { useStateContext } from '../../../contexts/ContextProvider'

function TenantDashboard() {

  const { setUser, user, setSucces, } = useStateContext()

  const [projectUnit, setProjectUnit] = useState({});
  const [propertyName, setPropertyName] = useState("");
  const [propertyAdmin, setPropertyAdmin] = useState("");
  const [UnitName, setUnitName] = useState("");
  const [dateOnBorded, setDateOnBoarded] = useState("");


  // //     this.state = {

  // //       userInfo: null,

  // //       propertyName: null,
  // //       propertyManager: null,
  // //       unitName: null,
  // //     };
  // //   }



  useEffect(() => {
    axiosClient(`/project-unit/${user.id}`)
      .then(({ data }) => {
          setPropertyName(data.project.name)
        setPropertyAdmin(data.project.admin.name)
        setUnitName(data.name)
        var dateOnBorded = new Date(data.created_at).toDateString();
        setDateOnBoarded(dateOnBorded)

      })
  }, [])








  return (
    <>
      <div className="row pt-4">
        <h4><u>Rental Profile Overview</u></h4>
        <div className="row">
          <div className="col">
            <div className="card text-start">
              <div className="card-body">
                <h4 className="card-title">Property:</h4>{propertyName}
                <hr />
                <h4 className="card-title">Manager:</h4>{propertyAdmin}
                <hr />
                <h4 className="card-title">Apartment: </h4>{UnitName}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-start">
              <div className="card-body">
                <h4 className="card-title">Date Onborded:</h4> {dateOnBorded}
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

export default TenantDashboard




// import React, { Component } from 'react'
// import axiosClient from '../../../axios-client'
// import { useStateContext } from '../../../contexts/ContextProvider'
// import Users from '../../Users'
// import './TenantDashboard.scss'



// // export class TenantDashboard extends Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       userId: null,
// //       userInfo: null,
// //       unitInfo: null,
// //       propertyName: null,
// //       propertyManager: null,
// //       unitName: null,
// //     };
// //   }

// //   componentDidMount() {
// //     axiosClient('/user')
// //       .then(({ data }) => {
// //         this.setState(
// //           {
// //             userId: data.id,
// //             userInfo: data,
// //           }
// //         )

// //       })

// //   }
// //   componentDidUpdate() {
// //     this.state.unitInfo === null ? (
// //       axiosClient(`/project-unit/${this.state.userId}`)
// //         .then(({ data }) => {
// //           this.setState(
// //             {
// //               unitInfo: data,
// //             }
// //           )
// //         })
// //     ) : null
// //   }






// //   render() {
// //     // var unitInfoLoaded = this.state.unitInfo
// //     // unitInfoLoaded && console.log(this.state.unitInfo)
// //     // var dateOnBorded = new Date(unitInfoLoaded && this.state.unitInfo.tenant.created_at);

// //     return (
// //       <>
// //         <div className="row pt-4">
// //           <h4><u>Rental Profile Overview</u></h4>
// //           <div className="row">
// //             <div className="col">
// //               <div className="card text-start">
// //                 <div className="card-body">
// //                   {/* <h4 className="card-title">Property:</h4>{this.state.unitInfo && this.state.unitInfo.project.name} */}
// //                   <hr />
// //                   {/* <h4 className="card-title">Manager:</h4>{this.state.unitInfo && this.state.unitInfo.project.admin.name} */}
// //                   <hr />
// //                   {/* <h4 className="card-title">Apartment: </h4>{this.state.unitInfo && this.state.unitInfo.name} */}
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="col">
// //               <div className="card text-start">
// //                 <div className="card-body">
// //                   {/* <h4 className="card-title">Date Onborded:</h4> {dateOnBorded.toDateString()} */}
// //                   <hr />
// //                   <h4 className="card-title">Rent due on:</h4>
// //                   <hr />
// //                   <h4 className="card-title">Amount:</h4>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </>
// //     )

// //   }
// // }




// export default TenantDashboard