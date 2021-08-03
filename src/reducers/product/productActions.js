import { API_URL } from "../../utils/Config";
import { timeoutPromise } from "../../utils/Tools";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const PRODUCT_LOADING = "PRODUCT_LOADING";
export const PRODUCT_FAILURE = "PRODUCT_FAILURE";

/**
 * product format:
 * {
 * id
 * description,
 * origin,
 * price,
 * standard,
 * thumb(image link),
 * }
 *
 */
// 3 types:
/**
 * bracelet -> 1st section
 * stones -> 2nd sectiom
 * rings -> 3rd
 */
const products = [
  {
    _id: 0,
    description: "Some meaningful things",
    origin: "Singapore",
    price: 7000,
    standard: "New",
    thumb: "https://imagesample.com",
    type: "bracelet",
  },
];
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: PRODUCT_LOADING,
    });
    try {
      // const response = await timeoutPromise(
      //   fetch(`${API_URL}/product`, {
      //     method: "GET",
      //   })
      // );

      // if (!response.ok) {
      //   dispatch({
      //     type: PRODUCT_FAILURE,
      //   });
      //   throw new Error("Something went wrong!, can't get the products");
      // }
      // const resData = await response.json();
      // console.log(resData);
      dispatch({
        type: FETCH_PRODUCTS,
        products: products,
      });
    } catch (err) {
      throw err;
    }
  };
};
