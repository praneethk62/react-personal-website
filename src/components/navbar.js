import "./navbarstyle.css"
import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <h1>Praneeth.k</h1>
      </Link>
    </div>
  );
}

export default navbar