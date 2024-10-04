import React from 'react'
import { Link } from 'react-router-dom'

function error() {
  return (
    <>
    <h1> Unauthorized Token </h1>
    <br/>
    <p> <Link to = "/hotellogin">Back to Login Page ? </Link></p>

    </>
  )
}

export default error