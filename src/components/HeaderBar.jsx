import React from 'react'
import { Link } from 'react-router-dom'

const HeaderBar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-li-left">
            <Link to="/">
              <i className="fas fa-dog"></i> Dog Video Finder
              <span className="minimizedText"> Home/Reset</span>
            </Link>
            <form
              className="searchForm"
              onSubmit={console.log('submitted, need to add function call')}
            >
              <section className="formInputSection">
                <input type="text" name="searchQuery" id="searchQuery" />
              </section>
              <button className="searchButton">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </li>
          <li className="powered-by-li">
            Powered by <i className="fab fa-youtube"></i>{' '}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderBar
