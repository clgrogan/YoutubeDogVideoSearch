import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

const PaginationBar = props => {
  const onClickNextPage = () => {
    // handle button click

    // trim leading and trailing whitespace, update state
    console.log(props)
  }

  return <nav className="paginationbar"></nav>
}

export default PaginationBar
