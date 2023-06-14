import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <NavLink
          to="/"
          id="myLinks"
          style={({ isActive }) => {
            return isActive
              ? { color: "hotpink", fontWeight: "bold" }
              : { color: "rebeccapurple" };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/bollywood"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "hotpink" } : { color: "rebeccapurple" };
          }}
        >
          {" "}
          Bollywood{" "}
        </NavLink>
        <NavLink
          to="/Technology"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "hotpink" } : { color: "rebeccapurple" };
          }}
        >
          Technology
        </NavLink>
        <NavLink
          to="/hollywood"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "hotpink" } : { color: "rebeccapurple" };
          }}
        >
          Hollywood
        </NavLink>
        <NavLink
          to="/fitness"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "hotpink" } : { color: "rebeccapurple" };
          }}
        >
          Fitness
        </NavLink>
        <NavLink
          to="/food"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "hotpink" } : { color: "rebeccapurple" };
          }}
        >
          Food
        </NavLink>
      </div>
      <hr id='NavHr' />
    </>
  )
}

export default Navbar
