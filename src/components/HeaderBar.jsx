import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

const HeaderBar = props => {
  const [queryValue, setQueryValue] = useState('')
  const [executeRedirect, setExecuteRedirect] = useState(false)
  const onClickSearchButton = () => {
    // handle search button click

    // trim leading and trailing whitespace, update state
    promiseSetQueryValue(queryValue.trim())

    // console.log(queryValue)
    // if (queryValue > ' ') {
    //   setExecuteRedirect(true)
    // }
  }

  const promiseSetQueryValue = async newValue => {
    new Promise(resolve => setQueryValue(newValue, resolve))
    if (newValue > ' ') {
      setExecuteRedirect(true)
    }
  }

  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-li-left">
            <Link to="/">
              <i className="fas fa-dog"></i> Dog Video Finder
              <span className="minimizedText"> Home/Reset</span>
            </Link>
            <section className="formInputSection">
              <input
                type="text"
                name="searchQuery"
                id="searchQuery"
                defaultValue={queryValue}
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
                  pathname: '/',
                  state: {
                    redirectSearchQuery: queryValue,
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
