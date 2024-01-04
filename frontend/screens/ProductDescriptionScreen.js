import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductBanner from "../components/ProductBanner";
import { Icon, Rating, RatingProps } from "@rneui/themed";
import Accordion from "../components/Accordion";
import CartContext from "../CartContext";


const ProductDescriptionScreen = ({route , navigation }) => {
  
  const windowWidth = Dimensions.get("window").width;
 
  const [data, setdata] = useState();
  const {addToCart}=useContext(CartContext);
  const { addToWish, removeFromWish, items , list } = useContext(CartContext);
  useEffect(() => {
    const param = route.params;

    setdata(param);
  
  }, []);
  console.log(data)
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Navbar style={{ zindex: 1 }}  navigation={navigation}/>
      <ScrollView>
        <ProductBanner  data={data} imageurl={data?.imageurl}/>
        <Text
          style={{
            marginTop: 10,
            fontSize: 18,
            fontWeight: "bold",
            paddingLeft: 20,
          }}
        >
          {data?.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text>4.5</Text>
          <Icon name="star" type="material" color="yellowgreen" size={20}  />
        </View>

        <View
          style={{
            flexDirection: "row",
            width: windowWidth,
            height: 100,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              marginBottom: 10,
              fontSize: 20,
              fontWeight: "bold",
              color: "green",
            }}
          >
           ₹{data?.price}
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => addToCart(data)}>
            <Text style={styles.buttonText}> Add To Cart </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 0,
            backgroundColor: "aliceblue",
            width: windowWidth,
            height: 100,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View style={styles.container}>
            <Icon
              name="truck-fast"
              type="material-community"
              color="black"
              size={40}
              containerStyle={{
                backgroundColor: "white",
                borderRadius: 50,
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <Text style={{ fontSize: 10 }}> Fast Delivery</Text>
          </View>
          <View style={styles.container}>
            <Icon
              name="sync-off"
              type="material-community"
              color="black"
              size={40}
              containerStyle={{
                backgroundColor: "white",
                borderRadius: 50,
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <Text style={{ fontSize: 10 }}>No return</Text>
          </View>
          <View style={styles.container}>
            <Icon
              name="hand-coin-outline"
              type="material-community"
              color="black"
              size={40}
              containerStyle={{
                backgroundColor: "white",
                borderRadius: 50,
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <Text style={{ fontSize: 10 }}>Cash on delivery</Text>
          </View>

          {/* <Icon name ="sync-off" type="material-community" color="black" size={40} />
         <Icon name ="hand-coin-outline" type="material-community" color="black" size={40} /> */}
        </View>
        <Accordion title="Description"  content={data?.desc}/>
        <Accordion title="Reviews"  content={data?.desc}/>
      </ScrollView>
    </View>
  );
};

export default ProductDescriptionScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#F77A3B",
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    marginLeft: 25,
    width: "50%",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
