import React from 'react'
import Button from '../button/Button';

import './CartDropDown.styles.scss';

const CartDropDown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            
        </div>
        <Button>Go to checkout</Button>
    </div>
  )
}

export default CartDropDown