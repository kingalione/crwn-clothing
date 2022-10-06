import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as CrnwLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-drop-down/CartDropDown";

import { selectCurrentUser } from "../../store/user/UserSelector";
import { selectIsCartOpen } from "../../store/cart/CartSelector";

import { signOutUser } from "../../utils/firebase/Firebase";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./NavigationBar.styles.jsx";

const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrnwLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
