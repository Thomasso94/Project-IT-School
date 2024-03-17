import React, { useState, useContext } from "react";
import "./shopBagItem.css";
import { AppContext } from "../../App";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ShopBagItem({ boardgame, index }) {
  const { bag, setBag } = useContext(AppContext);
  const [show, setShow] = useState(false);

  const handleDeleteItem = () => {
    setBag(bag.filter((item) => item.id !== boardgame.id));
    setShow(false);
  };

  const handleKeepItem = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <tr className="shopBagItem">
      <th scope="row">{index + 1}</th>
      <td>
        <img src={boardgame.img} alt="Boardgame Image" className="img-fluid" />
      </td>
      <td>{boardgame.title}</td>
      <td>{boardgame.price} RON</td>
      <td>
        <>
          <Button variant="secondary" onClick={handleShow}>
            <i className="bi bi-trash3-fill"></i>
          </Button>

          <Modal show={show} onHide={handleDeleteItem}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleDeleteItem}>
                Confirm Delete
              </Button>
              <Button variant="primary" onClick={handleKeepItem}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </td>
    </tr>
  );
}

export default ShopBagItem;
