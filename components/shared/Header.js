import React, { useState } from 'react';
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import auth0 from '../../services/auth0/auth0'

const Login =()=>{
  return(
    <span onClick={auth0.login} className="nav-link port-navbar-link pointer">Login</span>
  )
}
const Logout=()=>{
  return(
    <span className="nav-link port-navbar-link pointer">Logout</span>
  )
}

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { className }= props;
  return (
    <div>
      <Navbar className={`port-navbar port-nav-base absolute ${className}`} color="transparent" dark expand="md">
        <NavbarBrand className="port-navbar-brand" href="/">Ctrlx.Altf4</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
				<Link href="/">
					<a className="nav-link port-navbar-link"> Home</a>
				</Link>
            </NavItem>

            <NavItem className="port-navbar-item">
              <Link href="/blogs">
                <a className="nav-link port-navbar-link">Blogs</a>
              </Link>
            </NavItem>

            <NavItem className="port-navbar-item">
              <Link href="/portfolios">
                <a className="nav-link port-navbar-link" >Portfolios</a>
              </Link>
            </NavItem>

            <NavItem className="port-navbar-item">
              <Link  href="/about">
                <a className="nav-link port-navbar-link">About</a>
              </Link>

            </NavItem>

            <NavItem className="port-navbar-item">
              <Link  href="/cv">
                <a className="nav-link port-navbar-link"> CV </a>
              </Link>
            </NavItem>

            <NavItem className="port-navbar-item">
              <NavLink className="port-navbar-link port-navbar-link" href="https://github.com/ctrlx-altf4">GitHub</NavLink>
            </NavItem>

            <NavItem className="port-navbar-item">
                <Login/>
            </NavItem>

            <NavItem className="port-navbar-item">
                <Logout/>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;