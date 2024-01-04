import { View, Text , Image } from 'react-native'
import React from 'react'

const InviteFriends = () => {
  return (
    <View style={{flex: 1, marginTop: 70}}>
     <Image source={require('../assets/friends.jpg')} style={{width: '100%', height: '20%' , resizeMode: 'cover' }} />
     <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 20 , marginLeft: 20}}>Gift Your best friend's four-legged BFF a special surprise</Text>
     
    </View>
  )
}

export default InviteFriends