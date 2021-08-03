import React, { useState, useEffect, useRef } from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, StyleSheet, ScrollView } from "react-native";
//Address
import Address from "./components/Address";
//Redux
import { useSelector } from "react-redux";
//Steps
import Colors from "../../utils/Colors";
import { Header, SummaryOrder, TotalButton, UserForm } from "./components";
import Loader from "../../components/Loaders/Loader";

export const PreOrderScreen = (props) => {
  const unmounted = useRef(false);
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(true);
  const carts = useSelector((state) => state.cart.cartItems);
  const { cartItems, total, cartId } = props.route.params;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [town, setTown] = useState("");
  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);
  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      const interval = setInterval(() => {
        setLoading(false);
      }, 1000);
      return () => clearInterval(interval);
    }
    return;
  }, [isFocused]);

  let orderItems = [];
  cartItems.map((item) => {
    orderItems.push({ item: item.item._id, quantity: item.quantity });
  });

  const toPayment = async () => {
    try {
      props.navigation.navigate("Payment", {
        screen: "PaymentScreen",
        params: {
          orderItems,
          name,
          phone,
          total,
          cartId,
          carts,
        },
      });
    } catch (err) {
      throw err;
    }
    // props.navigation.navigate("Payment", {
    //   screen: "PaymentScreen",
    //   params: {
    //     fullAddress,
    //     orderItems,
    //     name,
    //     phone,
    //     total,
    //     cartId,
    //     carts,
    //   },
    // });
  };
  useEffect(() => {
    if (carts.items.length === 0) {
      props.navigation.goBack();
    }
  }, [carts.items]);
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <ScrollView>
            <SummaryOrder cartItems={cartItems} total={total} />
          </ScrollView>
          <TotalButton toPayment={toPayment} />
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
});
