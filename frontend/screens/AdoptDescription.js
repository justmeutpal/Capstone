import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Linking,
  ScrollView,
} from "react-native";
// import { useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

const AdoptDescription = ({ route }) => {
  const [isImageModalVisible, setImageModalVisible] = useState(false);

  const { name, breed, guardian, phone, location, image, desc, sex } =
    route.params;

  const handleCallPress = () => {
    const phoneNumber = `tel:+${phone}`;
    Linking.openURL(phoneNumber);
  };

  const handleLocationPress = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      location
    )}`;
    Linking.openURL(mapUrl);
  };

  const toggleImageModal = () => {
    setImageModalVisible(!isImageModalVisible);
  };

  return (
    <ScrollView style={{ backgroundColor: "#E3FFD6", color: "#252525" }}>
      <TouchableOpacity onPress={toggleImageModal}>
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: 300,
            objectFit: "cover",
          }}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isImageModalVisible}
        onRequestClose={toggleImageModal}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={{ uri: image }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={toggleImageModal}
          >
            <Text style={{ color: "white" }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={handleCallPress}
          style={styles.callButton}
          activeOpacity={0.8}
        >
          <Feather name="phone-call" size={20} color="aliceblue" />
          <Text style={styles.text}>{phone}</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 50, marginLeft: 40, color: "darkblue" }}>
        {name}
      </Text>
      <View style={styles.desc}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 17, color: "orange" }}>Breed Name </Text>
          <Text style={{ marginLeft: 10, fontSize: 20, color: "#252525" }}>
            {breed}
          </Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 17, color: "orange" }}>Guardian </Text>
          <Text style={{ marginLeft: 10, fontSize: 20, color: "#252525" }}>
            {guardian}
          </Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 17, color: "orange" }}>Sex </Text>
          <Text style={{ marginLeft: 10, fontSize: 20, color: "#252525" }}>
            {sex}
          </Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 17, color: "orange" }}>About me </Text>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              color: "#252525",
              textAlign: "justify",
            }}
          >
            {desc}
          </Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              marginLeft: 5,
              borderWidth: 0.2,
              justifyContent: "center",
              padding: 5,
            }}
          >
            <Icon
              name="map-marker"
              size={20}
              color="orange"
              onPress={handleLocationPress}
            />
            <Text onPress={handleLocationPress}>{location}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  callButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    padding: 13,
    borderRadius: 50,
    position: "absolute",
    top: -28,
    right: 15,
  },
  text: {
    fontSize: 0,
  },
  desc: {
    width: "80%",
    height: 300,
    // backgroundColor:"lightgreen",
    marginLeft: 40,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
  },
});
export default AdoptDescription;
