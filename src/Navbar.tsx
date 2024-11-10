import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from "./components/SearchBox";
import { useEffect, useState } from 'react';

export default function Navbarr() {
  const [movies,setMovies]=useState([]);
  const [searchValue,setSearchValue]=useState('');

  const getMovieRequest= async ()=>{
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=938869ce`;
      const response = await fetch(url);
      const responseJson= await response.json(); 
      if (responseJson.Search){
          setMovies(responseJson.Search);
      }else{
          setMovies([]);
      }
  };
  useEffect(()=>{
      if(searchValue){
          getMovieRequest();

      }else{
          setMovies([]);
      }
  },[searchValue]);
    return (
        <Navbar expand="lg" className="bg-body-tertiary" >
     <Container fluid >
        <Navbar.Brand href="#" style={{marginLeft:'45%'}} >MovieReview</Navbar.Brand>
        {/* <Navbar.Collapse id="navbarScroll" >
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="../Movies">Movies</Nav.Link>
            <Nav.Link href="#action2">Favorite</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}