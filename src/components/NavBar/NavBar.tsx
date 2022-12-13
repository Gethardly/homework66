import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-secondary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">Calorie tracker</NavLink>
      </div>
    </div>
  );
};

export default Navbar;