// SidebarMenu.js
import React from 'react';
import { Link } from 'react-router-dom'; // Si vous utilisez React Router

const SidebarMenu = () => {
  return (
    <div className="sidebar-menu">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/sign">Tableau de bord</Link>
        </li>
        <li>
          <Link to="/register">Profil</Link>
        </li>
        {/* Ajoutez d'autres éléments de menu selon vos besoins */}
      </ul>
    </div>
  );
};

export default SidebarMenu;
