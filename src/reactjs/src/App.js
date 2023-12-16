import React from 'react';

import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import './App.css';

import Layout from './shared/Layout/Layout';
import StartPage from './pages/Start/StartPage';
import ChallengePage from './pages/Challenge/ChallengePage';
import CombatPage from './pages/Combat/CombatPage';
import CharactersPage from './pages/Characters/CharactersPage';
import ItemsPage from './pages/Items/ItemsPage';
import GroupsPage from './pages/Groups/GroupsPage';
import SettingsPage from './pages/Settings/SettingsPage';

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
                    <Route
                        path='characters'
                        element={<CharactersPage />}
                    />
                    <Route
                        path='items'
                        element={<ItemsPage />}
                    />
                    <Route
                        path='groups'
                        element={<GroupsPage />}
                    />
                    <Route
                        path='settings'
                        element={<SettingsPage />}
                    />
                </Route>
            </Routes>
        </Router>
    );
}
