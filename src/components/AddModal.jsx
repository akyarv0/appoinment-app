import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddModal({ showModal, handleClose }) {
  // const [showModal, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");

  return (
    <>
      <Modal show={showModal} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for : {drName} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter patient name"
                onChange={(e) => setPatientName(e.target.value)}
                value={patientName} //inputun içini yönetebilmek için value attributeını kullanıyoruz. Statei  güncellediğimizde inputun içi de statein değerini almış oluyor.
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
