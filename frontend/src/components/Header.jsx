import { Navbar, Row, Col, Container, Badge } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="justify-content-end">
        <Navbar.Text>
          <Badge pill bg="primary" style={{ margin: "10px", padding: "15px" }}>
            A
          </Badge>

          <Badge pill bg="primary" style={{ margin: "10px", padding: "15px" }}>
            Login
          </Badge>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
