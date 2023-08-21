import "./navbarstyle.css"

import {Link} from 'react-router-dom'
import { FaBars} from "react-icons/fa";



const navbar = () => {

  return (
    <div className="header">
      <Link to={"/"}>
        <h1>Praneeth.k</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to={"/"}>Home </Link>
        </li>
        <li>
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/skills"}>Skills</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger">
        <FaBars size={20} style={{ color: "#fff" }} />
      </div>
    </div>
  );
}

export default navbar