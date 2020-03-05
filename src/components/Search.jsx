import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const Search = props => {
  return (
    <>
      {props.location.state && (
        <Redirect
          to={{
            pathname: '/',
            state: {
              redirectSearchQuery: props.location.state.redirectSearchQuery,
            },
          }}
        />
      )}
    </>
  )
}

export default Search
