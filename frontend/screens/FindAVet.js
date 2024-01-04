import { View, Text, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import VetHeader from "../components/VetHeader";
import VetCard from "../components/VetCard";
import { ip } from "../ip";
const FindAVet = ({ navigation }) => {
  const [vetData,setVetData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://${ip}:3000/api/vetdata`);
        const data = await response.json();
        setVetData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);




  return (
    <View>
      <VetHeader />
      <FlatList 
        data={vetData}
        keyExtractor={(item) => item.id}
        renderItem={({ item , index }) => (
        <Pressable onPress={() => navigation.navigate("VetDescription", { item })}>
          <VetCard   image={item.imageurl} name={item.name} rating={item.rating} phone={item.phone} location={item.location} Latitude={item.latitude} Longitude={item.longitude}  adress={item.adress}/>
        </Pressable>
        )}
        showsVerticalScrollIndicator={false}

      />
    </View>
  );
};

export default FindAVet;
