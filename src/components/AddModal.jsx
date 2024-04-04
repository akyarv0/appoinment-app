import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddModal({ showModal, handleClose, drName }) {
  // const [showModal, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add appointment for: {drName}</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group className="m-3" controlId="formBasicText">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control type="text" placeholder="Enter patient name" onChange={(e) => setPatientName(e.target.value) } value={patientName}  /> 
          </Form.Group>

          <Form.Group className="m-3" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="datetime-local" placeholder="Date" onChange={(e) => setDate(e.target.value) } value={date}/>
          </Form.Group>
          <div className="m-3 text-center">
            {" "}
            <Button variant="success m-3" onClick={handleClose}>
              Save
            </Button>
            <Button variant="danger m-3" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}

export default AddModal;
