import { Container, Row, Col, Form, Card, CardGroup } from "react-bootstrap";
import Occupancy from "./Occupancy";
import Financial from "./Financial";

const MainPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Search" />
          </Col>

          <Col style={{ fontSize: "20px" }}>
            <b>Alex Johnson</b>
          </Col>
        </Row>

        <Row>
          <Col className="mt-4">
            <h3>Dashboard</h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <CardGroup>
              <Col className="p-2" bg="success">
                <Card>
                  <Card.Body>
                    <Card.Title>Number of properties</Card.Title>
                    <Card.Text>3</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="p-2">
                <Card>
                  <Card.Body>
                    <Card.Title>Average Occupany rate</Card.Title>
                    <Card.Text>80%</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="p-2">
                <Card>
                  <Card.Body>
                    <Card.Title>Average Vacany rate</Card.Title>
                    <Card.Text>85%</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="p-2">
                <Card>
                  <Card.Body>
                    <Card.Title>Overall Net Profit</Card.Title>
                    <Card.Text>$50,000</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </CardGroup>
          </Col>
        </Row>
      </Container>
      <Container>
        <Occupancy />
      </Container>
      <Container>
        <Financial />
      </Container>
    </>
  );
};

export default MainPage;
