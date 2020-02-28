import React from 'react'
import { Link } from 'react-router-dom'

const HeaderBar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li>
            <Link to="/">
              <i class="fas fa-dog"></i> Dog Video Finder
              <span className="minimizedText"> Home/Reset</span>
            </Link>
          </li>
          <li>
            <input></input>
            <i class="fas fa-search"></i>
          </li>
          <li>
            Powered by <i class="fab fa-youtube"></i>{' '}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderBar
