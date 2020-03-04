import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

const HeaderBar = () => {
  const [queryValue, setQueryValue] = useState('')
  // Handle Input onChange
  // const handleInputOnChange = e => {
  //   console.log('executed handleInputOnChange')
  //   e.persist()
  //   setQueryValue(prev => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }))
  //   console.log(queryValue)
  // }

  // handle search button click
  const onClickSearchButton = () => {
    console.log('Initial query value: ', queryValue)
    console.log('trim query here: ', queryValue.trim())
    setQueryValue(queryValue.trim())
    // let strQueryValue = queryValue.searchQuery
    // let strQueryValue = queryValue.trim()
    // alert('xxx', strQueryValue, 'xxx')
    // console.log('log trimmed query value: ', strQueryValue)
    // setQueryValue(strQueryValue.trim())
    // console.log('Trimmed query value: ', queryValue)
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
            {/* <form className="searchForm" onSubmit={handleSubmit}> */}
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
            <button
              className="searchButton"
              // onClick={() => props.calcKeyClicked(props.calcKey)}
              onClick={onClickSearchButton}
            >
              <i className="fas fa-search"></i>
            </button>
            {/* </form> */}
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
