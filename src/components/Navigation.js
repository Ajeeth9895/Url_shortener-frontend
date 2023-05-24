import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaPizzaSlice } from 'react-icons/fa';
import { BsFillCartDashFill } from 'react-icons/bs';
import { CgProfile} from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


function Navigation() {

  const navigate = useNavigate();

  //function for logout
  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/logout')
  }


  return <>
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" >
        <Container>
          <Navbar.Brand className='text-white navbar-title me-5' onClick={() => navigate('/menu')}>
            {' '}
           Url-Shortener
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className='me-auto'>
            <Nav.Link  className='text-white' onClick={()=>navigate('/createUrl')}>Create-Url</Nav.Link>
            <Nav.Link   className='text-white' onClick={()=>navigate('/allUrls')}>All-Urls</Nav.Link>
            </Nav>
            <Nav>
              <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                 <CgProfile/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() =>navigate('/login')}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  </>
}

export default Navigation;
