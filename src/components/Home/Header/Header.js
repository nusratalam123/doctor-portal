import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navber from '../Navber/Navber';
import './Header.css'
const Header = () => {
    return (
        <div className="header-container">
            <Navber></Navber>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;