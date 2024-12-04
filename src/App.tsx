import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import SearchLeads from './pages/SearchLeads';
import MyLists from './pages/MyLists';
import ImportClean from './pages/ImportClean';
import Tools from './pages/Tools';
import Settings from './pages/Settings';
import Profile from './pages/settings/Profile';
import Credits from './pages/settings/Credits';
import Integrations from './pages/settings/Integrations';
import Team from './pages/settings/Team';
import Billing from './pages/settings/Billing';
import Security from './pages/settings/Security';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="search" element={<SearchLeads />} />
          <Route path="lists" element={<MyLists />} />
          <Route path="import" element={<ImportClean />} />
          <Route path="tools" element={<Tools />} />
          <Route path="settings" element={<Settings />}>
            <Route index element={<Profile />} />
            <Route path="credits" element={<Credits />} />
            <Route path="billing" element={<Billing />} />
            <Route path="security" element={<Security />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="team" element={<Team />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;