import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './NavBar.css'
const NavBar = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <nav>
            <Navbar bg="light" expand="lg">
                <Container>
                    {/* <Navbar.Brand className='fw-bold fs-3' href="#home">Photography</Navbar.Brand> */}
                    <h3 className='fw-bold fs-3 text-primary'>I - Photographer</h3>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=' nab-div'>
                            <NavLink className={({ isActive }) => (isActive ? "nav-bar" : "nav-bar2")} to='/banner'>Home</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "nav-bar" : "nav-bar2")} to='/booking'>Checkout</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "nav-bar" : "nav-bar2")} to='/blogs'>Blogs</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "nav-bar" : "nav-bar2")} to='/about'>About</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "nav-bar" : "nav-bar2")} to='/register'>Register</NavLink>
                            {
                                user ?
                                    <NavLink onClick={handleSignOut} className={({ isActive }) => (isActive ? "nav-bar" : "nav-bar2")} to='/login'>Log out</NavLink>
                                    :
                                    <NavLink className={({ isActive }) => (isActive ? "nav-bar" : "nav-bar2")} to='/login'>Login</NavLink>
                            }


                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
        </nav>
    );
};

export default NavBar;