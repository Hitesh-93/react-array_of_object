import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">MyApp</a> */}
                <NavLink className="navbar-brand" aria-current="page" to='/'>MyApp</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            <NavLink className="nav-link" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Services</a> */}
                            <NavLink className="nav-link" to='/Services'>Services</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">About</a> */}
                            <NavLink className="nav-link" to='/About'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Contact</a> */}
                            <NavLink className="nav-link" to='/Contact'>Contact</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar