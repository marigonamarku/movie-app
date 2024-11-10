import React from "react";
import { Row, Col } from "react-bootstrap";

const MoviesList = (props) => {
    return (
        <div className="movies-list">
            <Row>
                {props.movies.map((movie, index) => (
                    <Col key={index} sm={6} md={6} lg={6} className="mb-4">
                        <div 
                            className="card p-3" 
                            onClick={() => props.onMovieClick(movie)} // Add click handler here
                            style={{ cursor: 'pointer' }} // Optional: Change cursor to pointer for better UX
                        >
                            <Row>
                                {/* Column for Poster Image */}
                                <Col xs={6}>
                                    <div className="image-container d-flex justify-content-start">
                                        <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
                                    </div>
                                </Col>

                                {/* Column for Movie Details */}
                                <Col xs={6} className="d-flex flex-column justify-content-center">
                                    <h5>{movie.Title}</h5>
                                    <p>{movie.Year}</p>
                                    {/* Add any additional movie details here */}
                                </Col>
                            </Row>
                        </div> 
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MoviesList;
