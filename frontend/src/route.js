import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateUserForm from './components/createUserForm.js';
import Dashboard from './components/Dashbord.js';
import LoginPage from './components/Login.js'

const AppRoutes = () => {
    return ( 
        <Router>
            <Routes>
            <Route path="/sign" element={<CreateUserForm />} />
            <Route path="/" element={<Dashboard/>} />
            <Route path="/login" element={<LoginPage/>} />

          

            </Routes>
        </Router>
    );
};

export default AppRoutes;
