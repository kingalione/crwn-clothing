import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrnwLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-drop-down/CartDropDown";

import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/Firebase";

import "./NavigationBar.styles.scss";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrnwLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              Sign In
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
