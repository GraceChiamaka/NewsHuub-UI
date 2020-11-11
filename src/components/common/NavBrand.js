import React from 'react';
import styled from 'styled-components';

const NavBrand = ({ className }) => (
    <div className={className}>
        <h3>newsHUUB</h3>
    </div>
);

export default styled(NavBrand)`
    h3 {
        color: #fff;
    }
`;
