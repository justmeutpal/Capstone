import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'


const Ordercard = ({item}) => {
    console.log(item.imageurl)
  return (
    <View style={{flexDirection:"row",width:"90%",height:150,marginTop:50,alignItems:"center",borderWidth:0.5,alignSelf:"center",borderRadius:4}}>
        <View style={{width:"40%"}}>
      <Image source={{uri:item.imageurl}} style={{width:"100%",height:100,resizeMode:"contain"}} />
      </View>
      <View style={{width:"60%",paddingLeft:20,borderLeftColor:"black",borderLeftWidth:1,justifyContent:"space-around",height:"100%"}}>
      <Text>ordered on {item.orderDateTime} </Text>
      <Text>{item.name}</Text>
      <Text>order placed by : {item.orderMethod}</Text>
      </View>
    </View>
  )
}

export default Ordercard

const styles = StyleSheet.create({})