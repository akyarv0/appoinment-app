import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddModal({ showModal, handleClose, drName, addAppointment }) {
  // const [showModal, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  // console.log(crypto.randomUUID());


  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ patientName, date, drName });
    addAppointment({   id: new Date().getTime(),
      patient: patientName,
      day: date,
      consulted: false,
      doctor: drName, });

    handleClose();
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add appointment for: {drName}</Modal.Title>
        </Modal.Header>{" "}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="m-3" controlId="formBasicText">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter patient name"
                onChange={(e) => setPatientName(e.target.value)}
                value={patientName}
              />
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="success" type="submit" className="me-2">
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>{" "}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
