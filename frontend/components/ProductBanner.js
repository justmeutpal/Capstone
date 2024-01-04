import { View, Image, Dimensions } from "react-native";
import React, { useContext, useState } from "react";
import { Icon } from "react-native-elements";
import CartContext from "../CartContext";
const ProductBanner = ({ imageurl, data }) => {
  const windowWidth = Dimensions.get("window").width;
  const { addToWish, removeFromWish, items , list } = useContext(CartContext);
  const [active , setActive] = useState(false);

  return (
    <View>
      <Image
        source={{uri: imageurl}}
        style={{
          width: windowWidth,
          height: 300,
          resizeMode: "contain", // Use 'contain' to crop from the bottom
          marginTop: 20,
          alignSelf: "flex-end", // Align the image to the bottom
          borderColor: "grey",
          borderWidth: 0.5,
        }}
      />
      <Icon
        name="heart"
        type="octicon"
        color={active ? "red" : "black"}
        onPress={() => {setActive(!active)
          addToWish(data)
         }}
        containerStyle={{
          backgroundColor: "transparent",
          borderWidth: 0,
          borderColor: "white",
          width: 25,
          height: 23,
          marginLeft: 2,
          marginTop: 43,
          marginBottom: 0,
          marginRight: 10,
          position: "absolute",
          zIndex: 1,
          right: 5,
          bottom: 10,
        }}
      />
    </View>
  );
};

export default ProductBanner;
