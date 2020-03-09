import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

const HeaderBar = () => {
  const [queryValue, setQueryValue] = useState('')
  const [queryString, setQueryString] = useState('')
  const [executeRedirect, setExecuteRedirect] = useState(false)

  const onClickSearchButton = () => {
    // handle search button click

    // trim leading and trailing whitespace, update state
    promiseSetQueryString(queryValue.trim())
  }

  const promiseSetQueryString = async newValue => {
    new Promise(resolve => setQueryString(newValue, resolve))
    if (newValue > ' ') {
      setExecuteRedirect(true)
    }
    setQueryValue('')
  }

  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-li-left">
            <Link to="/">
              <i className="fas fa-dog"></i> Dog Video Fetcher
              <span className="minimizedText"> Home/Reset</span>
            </Link>
            <section className="inputSection">
              <input
                className="searchInput"
                type="text"
                placeholder="...enter search text here"
                name="searchQuery"
                id="searchQuery"
                value={queryValue}
                onChange={event => setQueryValue(event.target.value)}
              />
            </section>
            <button className="searchButton" onClick={onClickSearchButton}>
              <i className="fas fa-search"></i>
            </button>
            {executeRedirect === true && (
              <Redirect
                to={{
                  pathname: '/Search',
                  state: {
                    redirectSearchQuery: queryString,
                  },
                }}
              />
            )}
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
