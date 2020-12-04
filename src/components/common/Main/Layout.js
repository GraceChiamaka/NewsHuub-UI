import React from 'react';
import Nav from './Nav';

const MainLayout = ({ children }) => (
    <div className="layout-2">
        <Nav />
        {children}
    </div>
);

export default MainLayout;
