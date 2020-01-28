import {CartActionTypes} from './cart.actiontype';

export const toggleCart = () => ({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
    type:CartActionTypes.ADD_ITEM,
    payload: item
})