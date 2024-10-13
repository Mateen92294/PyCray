import MainPage from "./MainPage";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={2}>
          <p style={{ color: "blue", fontSize: "20px" }}>PyCray_Assessment </p>

          <p style={{ marginTop: "80px" }}>Main menu</p>

          <h4 className="mt-3" style={{ color: "blue" }}>
            Dashboard
          </h4>
          <h4 className="mt-4">Create Portfolio</h4>
          <h4 className="mt-4 mb-4">Property List</h4>

          <p style={{ fontSize: "15px", marginTop: "10px" }}>OTHER </p>
          <h4 className="mt-4">Support</h4>
          <h4 className="mt-4">Settings</h4>
        </Col>

        <Col md={10}>
          <MainPage />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
