import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRecipeContext } from '../context/recipe-context';

function NavScrollExample() {
  const{setSearch, searchHandler} = useRecipeContext();
  
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#" style={{color: 'white'}}>Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor: 'white'}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color: 'white'}}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{color: 'white'}}>Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown" style={{color: 'white'}}>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled style={{color: 'white'}}>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearch(e.currentTarget.value)}
            />
            <Button type='submit' variant="outline-success" onClick={searchHandler}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;