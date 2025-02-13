import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function WinAlert({handleRestart}) {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>YOU WON</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Do you want to play again? </p>
        </Modal.Body>

        <Modal.Footer>
          {/* <Button variant="secondary">No</Button> */}
          <Button variant="primary" onClick={handleRestart}>Yes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default WinAlert;