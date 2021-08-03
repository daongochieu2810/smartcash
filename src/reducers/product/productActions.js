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
 * name
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
    name: "GrabFood $20",
    description:
      "Your favourite food delivered hot and fresh! Satisfy your cravings by getting the food you love from your favourite restaurants. GrabFood is available islandwide. Enjoy this $20 QR Voucher.",
    origin: "Singapore",
    price: 10,
    standard: "New",
    thumb: "https://assets.nst.com.my/images/articles/grabfooda_1601356379.jpg",
    type: "bracelet",
  },
  {
    _id: 1,
    name: "Courts $20",
    description:
      "Singapore’s Leading Consumer Electronics, IT & Furniture Store. Enjoy this $20 QR Voucher.",
    origin: "Singapore",
    price: 10,
    standard: "New",
    thumb:
      "https://www.courts.com.sg/media/wysiwyg/courts-gift-card-620x420px.png",
    type: "bracelet",
  },
  {
    _id: 2,
    name: "Nike $20",
    description: "Just Do It! Enjoy this $20 QR Voucher.",
    origin: "Singapore",
    price: 10,
    standard: "New",
    thumb:
      "https://c.static-nike.com/a/images/w_1200,c_limit/bzl2wmsfh7kgdkufrrjq/seo-title.jpg",
    type: "bracelet",
  },
  {
    _id: 3,
    name: "Adidas $20",
    description:
      "Shop for adidas shoes, clothing and collections, adidas Originals, Running, Football, Training and more on the official adidas SG website. Enjoy this $20 QR Voucher.",
    origin: "Singapore",
    price: 10,
    standard: "New",
    thumb: "https://www.changicitypoint.com.sg/images/Adidas_logo.jpg",
    type: "bracelet",
  },
  {
    _id: 4,
    name: "Redmart $15",
    description:
      "Buy Groceries At The Best Prices Online With Our Price Match Promise On RedMart. Enjoy this $15 QR Voucher.",
    origin: "Singapore",
    price: 8,
    standard: "New",
    thumb: "https://www.wogi.sg/uploads/brands/88/list_logo.jpg",
    type: "stone",
  },
  {
    _id: 5,
    name: "Deliveroo $15",
    description:
      "The best local restaurants and takeaways are here to deliver. Order on Deliveroo today! Enjoy this $15 QR Voucher.",
    origin: "Singapore",
    price: 8,
    standard: "New",
    thumb:
      "https://cdn2.downdetector.com/static/uploads/logo/deliveroo_2_SLJPKaS.png",
    type: "stone",
  },
  {
    _id: 6,
    name: "GrabFood $15",
    description:
      "Your favourite food delivered hot and fresh! Satisfy your cravings by getting the food you love from your favourite restaurants. GrabFood is available islandwide. Enjoy this $15 QR Voucher.",
    origin: "Singapore",
    price: 8,
    standard: "New",
    thumb: "https://assets.nst.com.my/images/articles/grabfooda_1601356379.jpg",
    type: "stone",
  },
  {
    _id: 7,
    name: "Courts $15",
    description:
      "Singapore’s Leading Consumer Electronics, IT & Furniture Store. Enjoy this $15 QR Voucher.",
    origin: "Singapore",
    price: 8,
    standard: "New",
    thumb:
      "https://www.courts.com.sg/media/wysiwyg/courts-gift-card-620x420px.png",
    type: "stone",
  },
  {
    _id: 8,
    name: "Redmart $15",
    description:
      "Buy Groceries At The Best Prices Online With Our Price Match Promise On RedMart. Enjoy this $15 QR Voucher.",
    origin: "Singapore",
    price: 8,
    standard: "New",
    thumb: "https://www.wogi.sg/uploads/brands/88/list_logo.jpg",
    type: "ring",
  },
  {
    _id: 9,
    name: "Deliveroo $15",
    description:
      "The best local restaurants and takeaways are here to deliver. Order on Deliveroo today! Enjoy this $15 QR Voucher.",
    origin: "Singapore",
    price: 8,
    standard: "New",
    thumb:
      "https://cdn2.downdetector.com/static/uploads/logo/deliveroo_2_SLJPKaS.png",
    type: "ring",
  },
  {
    _id: 10,
    name: "Courts $15",
    description:
      "Singapore’s Leading Consumer Electronics, IT & Furniture Store. Enjoy this $15 QR Voucher.",
    origin: "Singapore",
    price: 8,
    standard: "New",
    thumb:
      "https://www.courts.com.sg/media/wysiwyg/courts-gift-card-620x420px.png",
    type: "ring",
  },
  {
    _id: 11,
    name: "GrabFood $15",
    description:
      "Your favourite food delivered hot and fresh! Satisfy your cravings by getting the food you love from your favourite restaurants. GrabFood is available islandwide. Enjoy this $15 QR Voucher.",
    origin: "Singapore",
    price: 8,
    standard: "New",
    thumb: "https://assets.nst.com.my/images/articles/grabfooda_1601356379.jpg",
    type: "ring",
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
