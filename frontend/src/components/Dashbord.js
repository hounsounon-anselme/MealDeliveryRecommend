import React from 'react';
import { BrowserRouter as  Link } from 'react-router-dom';
import { FaChartBar, FaCog, FaInfoCircle } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

const Dashboard = () => {
  return (
      <div className="dashboard-container">
      
	  <Header /> 
        <aside className="sidebar">
          <ul className="nav-links">
            <li>
              <Link to="/dashboard">
                <FaChartBar /> Tableau de bord
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <FaCog /> Paramètres
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FaInfoCircle /> À propos
              </Link>
            </li>
          </ul>
        </aside>

		<Footer /> 
      </div>
  );
};

const DashboardPage = () => {
  return (
    <div>
      <h2>Tableau de bord</h2>
      {/* Ajoutez ici vos composants de tableau de bord, graphiques, etc. */}
    </div>
  );
};

const SettingsPage = () => {
  return (
    <div>
      <h2>Paramètres</h2>
      {/* Ajoutez ici vos composants de paramètres */}
    </div>
  );
};

const AboutPage = () => {
  return (
    <div>
      <h2>À propos</h2>
      {/* Ajoutez ici des informations sur votre application */}
    </div>
  );
};

export default Dashboard
