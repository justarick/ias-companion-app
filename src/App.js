import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './shared/Layout/Layout';
import StartPage from './pages/Start/StartPage';
import ChallengePage from './pages/Challenge/ChallengePage';
import CombatPage from './pages/Combat/CombatPage';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={<Layout />}>
                    <Route
                        path='/'
                        element={<StartPage />}
                    />
                    <Route
                        path='challenge'
                        element={<ChallengePage />}
                    />
                    <Route
                        path='combat'
                        element={<CombatPage />}
                    />
                </Route>
            </Routes>
        </Router>
    );
}
