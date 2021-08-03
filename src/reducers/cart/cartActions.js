import { API_URL } from "../../utils/Config";
import { timeoutPromise } from "../../utils/Tools";
export const CART_LOADING = "CART_LOADING";
export const CART_FAILURE = "CART_FAILURE";
export const FETCH_CART = "FETCH_CART";
export const ADD_CART = "ADD_CART";
export const RESET_CART = "RESET_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const DES_CART_QUANTITY = "DES_CART_QUANTITY";

//Fetch Cart
export const fetchCart = () => {
  return async (dispatch, getState) => {
    const user = getState().auth.user;
    const emptyCart = {
      items: [],
    };
    if (user.userid != undefined) {
      dispatch({
        type: CART_LOADING,
      });
      try {
        dispatch({
          type: FETCH_CART,
          carts: user.cart ? user.cart : emptyCart,
        });
      } catch (err) {
        throw err;
      }
    }
    return;
  };
};
//Add Add to Cart
export const addToCart = (item) => {
  return async (dispatch, getState) => {
    dispatch({
      type: CART_LOADING,
    });
    //const user = getState().auth.user;
    try {
      dispatch({
        type: "ADD_CART",
        cartItem: item,
      });
    } catch (err) {
      throw err;
    }
  };
};

//Remove from Cart
export const removeFromCart = (cartId, itemId) => {
  return async (dispatch, getState) => {
    dispatch({
      type: CART_LOADING,
    });
    const user = getState().auth.user;
    try {
      const response = await timeoutPromise(
        fetch(`${API_URL}/cart/cartitem/${cartId}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "auth-token": user.token,
          },
          method: "DELETE",
          body: JSON.stringify({
            item: itemId,
          }),
        })
      );
      if (!response.ok) {
        dispatch({
          type: CART_FAILURE,
        });
        throw new Error("Something went wrong!");
      }
      dispatch({
        type: "REMOVE_FROM_CART",
        itemId,
      });
    } catch (err) {
      throw err;
    }
  };
};
//Decrease cart quantity
export const decCartQuantity = (cartId, itemId) => {
  return async (dispatch, getState) => {
    dispatch({
      type: CART_LOADING,
    });
    const user = getState().auth.user;
    try {
      const response = await timeoutPromise(
        fetch(`${API_URL}/cart/cartitem/${cartId}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "auth-token": user.token,
          },
          method: "PUT",
          body: JSON.stringify({
            item: itemId,
            quantity: "decrease",
          }),
        })
      );
      if (!response.ok) {
        dispatch({
          type: CART_FAILURE,
        });
        throw new Error("Something went wrong!");
      }
      dispatch({
        type: "DES_CART_QUANTITY",
        cartItemId: itemId,
      });
    } catch (err) {
      throw err;
    }
  };
};

//Reset Cart
export const resetCart = (cartId) => {
  return async (dispatch, getState) => {
    dispatch({
      type: CART_LOADING,
    });
    const user = getState().auth.user;
    try {
      const response = await timeoutPromise(
        fetch(`${API_URL}/cart/${cartId}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "auth-token": user.token,
          },
          method: "DELETE",
        })
      );
      if (!response.ok) {
        dispatch({
          type: CART_FAILURE,
        });
        throw new Error("Something went wrong!");
      }

      dispatch({
        type: "RESET_CART",
      });
    } catch (err) {
      throw err;
    }
  };
};
