import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FailureModal({ wrongAnswer, setWrongAnswer, agregarRespuestaIncorrecta }) {
  const handleClose = () => {setWrongAnswer(false); agregarRespuestaIncorrecta()};

  return (
    <>
      <Modal className='bg-danger' show={wrongAnswer} onHide={handleClose} centered={true}>
        <Modal.Header closeButton>
          <Modal.Title>Wrong answer!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Try again!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FailureModal;
