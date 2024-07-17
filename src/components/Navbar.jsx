import React from 'react'

function Navbar() {
  return (
      <div className="continer">

      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid ">
          <a className="navbar-brand text-light" href="#">WebFilm</a>
          <button className="navbar-toggler border border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation ">
            <span classname="navbar-toggler-icon">❤</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#trending">Tranding</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light " href="#superhero">SuperHero</a>
              </li>


            </ul>
          </div>
        </div>
      </nav>

          </div>
  )
}

export default Navbar
