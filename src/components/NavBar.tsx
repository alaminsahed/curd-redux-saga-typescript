import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

import { useDispatch } from "react-redux";
import { searchUserStart } from "../redux/action";

//import { Link } from 'react-router-dom';

export default function App() {
  const [showNav, setShowNav] = useState(false);
  const [search, setSearch] = useState<string>("");

  const dispatch = useDispatch();

  const searchHandler = (e: any) => {
    e.preventDefault();
    dispatch(searchUserStart(search));
    setSearch("");
  };

  return (
    <MDBNavbar expand="lg" dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">CRUD</MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink href="/home">Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/about">About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/userinfo">Info</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/user">User</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/AddEditUser"> Add User</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <form
            className="d-flex w-auto input-group mt-5"
            onSubmit={searchHandler}
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <MDBBtn color="dark" type="submit">
              Search
            </MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
