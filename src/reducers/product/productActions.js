import { API_URL } from "../../utils/Config";
import { timeoutPromise } from "../../utils/Tools";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const PRODUCT_LOADING = "PRODUCT_LOADING";
export const PRODUCT_FAILURE = "PRODUCT_FAILURE";
/**
 * product format:
 * {
 * description,
 * origin,
 * price,
 * standard,
 * thumb(image link),
 * }
 *
 */
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: PRODUCT_LOADING,
    });
    try {
      const products = [];
      dispatch({
        type: FETCH_PRODUCTS,
        products: products,
      });
    } catch (err) {
      throw err;
    }
  };
};
