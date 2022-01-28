import React from 'react';
import DashboardNav from '../Shared/DashboardNav/DashboardNav';
import './Dashboard.css'
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <DashboardNav>
            </DashboardNav>
            <Outlet />
        </div>
    );
};

export default Dashboard;