import { View, Text } from 'react-native'
import React from 'react'

const Orderplace = ({navigation}) => {
  return (
    <View style={{width:"100%",height:"100%",backgroundColor:"lightblue" ,justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:24}}>Your Orderplaced</Text>
      <Text style={{borderWidth:1,padding:5,margin:10,borderRadius:5}} onPress={()=>navigation.navigate('PetAcessories')}>go to home screen</Text>
    </View>
  )
}

export default Orderplace