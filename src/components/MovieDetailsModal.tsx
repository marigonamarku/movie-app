import React from "react";
import { Modal, Button } from "react-bootstrap";

const MovieDetailsModal = ({ show, movie, handleClose }) => {
    if (!movie) return null;

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{movie.Title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Year:</strong> {movie.Year}</p>
                <p><strong>Type:</strong> {movie.Type}</p>
                <p><strong>Type:</strong> {movie.Rates}</p>
                <p><strong>Type:</strong> {movie.Rates}</p>
                <p><strong>Type:</strong> {movie.Rates}</p>
                <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
export default MovieDetailsModal;
