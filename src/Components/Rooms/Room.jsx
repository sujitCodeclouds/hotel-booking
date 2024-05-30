import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import room1 from "../../assets/images/defaultBcg.jpeg";
import room2 from "../../assets/images/defaultBcg2.jpg";
import room3 from "../../assets/images/details-1.jpeg";
import room4 from "../../assets/images/details-2.jpeg";
import room5 from "../../assets/images/details-3.jpeg";
import room6 from "../../assets/images/details-4.jpeg";
import BookForm from "../BookModel/BookForm";
function Room() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="room-list">
        <Container>
          <Row>
            <Col xs={6} md={3}>
              <Card>
                <Card.Img variant="top" src={room4} />
                <Card.Body>
                  <Card.Title>Junior Suite</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <BookForm title="Book Now" />
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card>
                <Card.Img variant="top" src={room2} />
                <Card.Body>
                  <Card.Title>Junior Suite</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <BookForm title="Book Now" />
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card>
                <Card.Img variant="top" src={room3} />
                <Card.Body>
                  <Card.Title>Junior Suite</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <BookForm title="Book Now" />
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card>
                <Card.Img variant="top" src={room4} />
                <Card.Body>
                  <Card.Title>Junior Suite</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <BookForm title="Book Now" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Room;
