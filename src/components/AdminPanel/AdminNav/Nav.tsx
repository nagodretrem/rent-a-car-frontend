import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    Toggle: () => void;
}

const Nav = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">

    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"><i className='bi bi-justify'></i></button>
    <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            
        </ul>
    </div>
</nav>
  )
}

export default Nav