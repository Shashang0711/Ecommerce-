import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
   <nav>
    <Link to= '/'><button>Home</button></Link>
    <Link to ='/signup'><button>Register</button></Link>
    <Link to ='/login'><button>login</button></Link>

    

   </nav>
  )
}

export default Navbar