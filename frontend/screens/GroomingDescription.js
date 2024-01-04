import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import VetHeader from '../components/VetHeader'
import VetDescriptionContent from '../components/VetDescriptionContent'

const GroomingDescription = ({route}) => {
  const {item} = route.params;
  console.log(item)
  const images = [1, 2, 3, 4];
  return (
    <ScrollView style={{ flex: 1 }}>
    <VetHeader/>
    <VetDescriptionContent images={images}  item={item}/>
   </ScrollView>
  )
}

export default GroomingDescription