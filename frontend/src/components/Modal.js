import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Row,
  Col,
  Modal,
  Container,
  Form,
} from "react-bootstrap";


const MydModalWithGrid = (props, product, match, history) => {
 
  return (
    <Modal
      className="modal"
      {...props}
      {...product}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Row
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default MydModalWithGrid;