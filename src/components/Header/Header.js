import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";

const Header = (props) => {
  const handleSearch = (e) => {
    const searchKey = e.target.value;
    props.updateUrl(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKey}`
    );
  };
  const handleKey = (e) => {
    if (e.key === "enter") {
      e.preventdefault();
    }
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">MealDB Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/manage">Manage Order</Nav.Link>
            <Nav.Link href="/order">Order Review</Nav.Link>
          </Nav>
          <Form className="d-flex ms-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onChange={handleSearch}
              onKeyPress={handleKey}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
