import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => (
    <>
    <h1> About Page </h1>
    <ul>
      <li>
        <a href="/about">About</a>
      </li>
      <Link to="/" activeStyle={{ color: 'red'}}>Home</Link>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    </>
)

export default AboutPage