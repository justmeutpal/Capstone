import { View, Text , FlatList , Pressable} from 'react-native'
import React from 'react'
import VetHeader from '../components/VetHeader'
import VetCard from '../components/VetCard';

const Grooming = ({navigation}) => {
  const petServiceData = [
    {
      id: 1,
      image: require('../assets/salon.jpg'),
      name: "The Groomery",
      location: "Greater Noida",
      rating: 4.6,
      phone: "09810336573",
      latitude: 28.439774954531035,
      longitude: 77.51728057559993,
    },
    {
      id: 2,
      image: require('../assets/salon.jpg'),
      name: "Velvett Spa",
      location: "Noida",
      rating: 4.8,
      phone: "07233822822",
      latitude: 28.563119460531286,
      longitude: 77.33247838654862,
    },
    {
      
      id: 3,
      image: require('../assets/salon.jpg'),
      name: "Wiggly Pups",
      location: "Delhi",
      rating: 4.6,
      phone: "08368017353",
      latitude: 28.525176811359895,
      longitude: 77.19862198654862,
    },
    {
      id: 4,
      image: require('../assets/salon.jpg'),
      name: "Pet O Spa",
      location: "Gurugram",
      rating: 4.8,
      phone: "07002176373",
      latitude: 28.468462510832357,
      longitude: 77.05927864108425,
    },
  ];
  return (
    <View>
     <VetHeader/>
     <FlatList 
        data={petServiceData}
        keyExtractor={(item) => item.id}
        renderItem={({ item , index }) => (
        <Pressable onPress={() => navigation.navigate("GroomingDescription", { item })}>
          <VetCard  key = {index} image={item.image} name={item.name} rating={item.rating} phone={item.phone} location={item.location} Latitude={item.latitude} Longitude={item.longitude}/>
        </Pressable>
        )}
        showsVerticalScrollIndicator={false}

      />
    </View>
  )
}

export default Grooming