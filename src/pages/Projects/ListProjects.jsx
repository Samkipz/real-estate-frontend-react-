import React from 'react'
import { Link } from 'react-router-dom'
import Projects from './Projects'

function ListProjects() {
  return (
    <div>
      <div className="row d-flex align-items-center">
        <div className="col">
          <h3><u>All Projects</u></h3>
        </div>
        <div className="col">
          <Link type='button' className='btn btn-primary text-white' to='/create-project'>Add New Project</Link>
        </div>

      </div>
      <div className="row">
        <Projects />
      </div>
    </div>
  )
}

export default ListProjects