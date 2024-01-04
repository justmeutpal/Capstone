import { View, Text } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import Addresscontext from '../Addresscontext'
import Addressinput from '../components/Addressinput'

const Address = ({navigation}) => {
  const {address} = useContext(Addresscontext)
  console.log(address)
  return (
    <View>
      {address?
      <View >
        <View><Text style={{fontWeight:"bold",fontSize:20,margin:5}}>Your Address</Text></View> 
      <View style={{backgroundColor:"#2525",padding:10,borderColor:"#252525",margin:5}}>
        <View>
        <Text style={{color:"black", fontWeight:"bold",fontSize:18}}>{address.name}</Text>
        </View>
        <View style={{position:"absolute",right:5,top:10,borderWidth:0.5,borderColor:"black",opacity:0.7,padding:3}}>
        <Text onPress={()=>navigation.navigate("addressinput")} style={{color:"red"}}>Edit New Address</Text>
      </View>
      <View style={{}}>
      <Text style={{color:"#fff",fontSize:20}}>{address.flat}</Text>
      <Text style={{color:"#fff",fontSize:20}}>{address.area}</Text>
      <Text style={{color:"#fff",fontSize:20}}>{address.town}</Text>
      <Text style={{color:"#fff",fontSize:20}}>{address.state}</Text>
      <Text style={{color:"#fff",fontSize:20}}>{address.pincode}</Text>
      <Text style={{color:"#fff",fontSize:20}}>{address.country}</Text>
      <Text style={{color:"#fff",fontSize:20}}>{address.mobilenumber}</Text>
      </View>
      </View>
      
      </View>
      :<Addressinput navigation={navigation}/>
      } 
    </View>
  )
}

export default Address