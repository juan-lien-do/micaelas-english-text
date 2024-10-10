import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function SuccessModal({ show, setRightAnswer, agregarRespuestaCorrecta }) {
  function handleClose(){
    setRightAnswer(false);
    agregarRespuestaCorrecta();
  }

  return (
    <>
      <Modal className="bg-success" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Correct Answer!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Congratulations, you got the right answer!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SuccessModal;
