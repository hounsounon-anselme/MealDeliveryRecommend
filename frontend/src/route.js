import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateUserForm from './components/createUserForm.js';

const AppRoutes = () => {
    return ( 
        <Router>
            <Routes>
            <Route path="/sign" element={<CreateUserForm />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
