import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Layout.css";

const Layout = () => {
  // Array de links e seus respectivos destinos
  const links = [
    { to: "/", text: "Home" },
    { to: "/sobre", text: "Sobre" },
    { to: "/cadastro", text: "Cadastrar" }
  ];

  return (
    <>
    <nav>
        <div className="logo-container">
          <img src="../assets/Logo.png" alt="Logo" className="logo" />
          <span className="titulo">Amigo de Quatro Patas</span>
        </div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
      <Outlet />
    </>
  );
};

export default Layout;
