import { Modal, Button } from "react-bootstrap"

export const CustomModal = (props) => {
    const {size, title, form, show, onAction, isDetail=false} = props
    return (
        <Modal size={size} show={show} onHide={onAction}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {form}
            </Modal.Body>
            {isDetail &&
                <Modal.Footer>
                    <Button variant="secondary" onClick={onAction}>Close</Button>
                </Modal.Footer>}
        </Modal>
    )
}
