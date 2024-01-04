import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useContext, useState } from "react";
import CartContext from "../CartContext";
import Cartcard from "../components/Cartcard";
import{RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET} from '@env';
import RazorpayCheckout from 'react-native-razorpay';

const Cart = ({ navigation }) => {
  // const { items, updateCartItemQuantity } = useContext(CartContext);
  // const {items,updatecart}=useContext(CartContext);
  const { items } = useContext(CartContext);
  console.log(RAZORPAY_KEY_ID);
  const razorPayKeyID = 'rzp_test_Z9f4lPCbOQTDEi';
  const razorPayKeySecret = 'NTG8XPtmVgdmAdmWvNJZy4T1';
  
  console.log(items.length);
  const totalPrice = items.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  const isitems = items.length > 0;
  console.log(isitems);
 
  console.log(totalPrice);
  // const hadlePayment = () => {
  //   var options = {
  //     description: 'Credits towards consultation',
  //     image: 'https://i.imgur.com/3g7nmJC.jpg',
  //     currency: 'INR',
  //     key: razorPayKeyID,
  //     amount: totalPrice*100,
  //     name: 'User',
  //     order_id: 'gfdgfdfd',//Replace this with an order_id created using Orders API.
  //     prefill: {
  //       email: 'xyz@gmail.com',
  //       contact: '9999999999',
  //       name: 'test'
  //     },
  //     theme: {color: '#53a20e'}
  //   }
  //   RazorpayCheckout.open(options).then((data) => {
  //     // handle success
  //     alert(`Success: ${data.razorpay_payment_id}`);
  //   }).catch((error) => {
  //     // handle failure
  //     alert(`Error: ${error.code} | ${error.description}`);
  //   });
  //  }
  return (
    <View style={styles.container}>
      {isitems ? (
        <ScrollView>
          <View>
            {items.map((cart) => (
              <Cartcard
                key={cart._id}
                id={cart._id}
                image={cart.imageurl}
                name={cart.name}
                ratings={cart.rating}
                price={cart.price}
                quantity={cart.quantity}
              />
            ))}
            <View>
              <Text>totalPrice: {totalPrice}</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>navigation.navigate("checkout")}
            >
              <Text style={styles.buttonText}>Proceed To Buy</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24 }}>YOUR CART IS EMPTY</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F77A3B",
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    marginLeft: 25,
    width: "70%",
    marginBottom: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    margin: 20,
    marginTop: 50,
  },
});

export default Cart;
