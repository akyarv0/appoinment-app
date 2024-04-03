import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { doctorData } from "../helpers/data";
import { Row } from "react-bootstrap";

const Doctors = () => {
  console.log(doctorData);

  return (
    <Container>
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>

      <Row>
        {doctorData.map(({ id, img, name, dep }) => (
          <Col xs={12} sm={6} md={4} key={id}>
            <Image src={img} alt={name} className="img-thumbnail doctor-img w-100" />
            <h5>{name}</h5> <h5>{dep}</h5>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
