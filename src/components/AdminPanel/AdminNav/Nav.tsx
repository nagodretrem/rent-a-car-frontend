import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    Toggle: () => void;
}

const Nav = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
    <i className="navbar-brand bi bi-justify-left fs-4" onClick={props.Toggle}></i>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"><i className='bi bi-justify'></i></button>
    <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-white" to={""} 
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    User
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <Link className="dropdown-item" to={""}>Profile</Link>
                    <Link className="dropdown-item" to={""}>Setting</Link>
                    <Link className="dropdown-item" to={""}>Logout</Link>
                </div>
            </li>
        </ul>
    </div>
</nav>
  )
}

export default Nav