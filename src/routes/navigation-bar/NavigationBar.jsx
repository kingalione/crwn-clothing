import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import {ReactComponent as CrnwLogo } from '../../assets/crown.svg';

import './NavigationBar.styles.scss';

const NavigationBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrnwLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
