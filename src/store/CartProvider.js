import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items = [],
    totalAmount = 0
}

const CartReducer = (state, action) => {
    if (action.type == 'ADD') {

    }
    return defaultCartState;
}


const CartProvider = (props) => {
    // useReducer: returns two values
        // FIRST: state snapshot
        // SECOND: function which allows you to dispatch an action to the reducer
    const [cartState, dispatchCartAction] = useReducer(CartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    }

    const cartContext = {
        items: cartState.items, 
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    
  return (<CartContext.Provider value={cartContext}>
      {props.children}
  </CartContext.Provider>);
};

export default CartProvider;
