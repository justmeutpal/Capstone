import { View, Text,TouchableOpacity,Alert } from 'react-native'
import React,{ useContext, useState } from 'react'
import { CheckBox } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CartContext from '../CartContext'
import Addresscontext from '../Addresscontext'
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';


const Checkout = ({navigation}) => {
   
  const { items } = useContext(CartContext);
  const {address} = useContext(Addresscontext);
  console.log(address)
   
    const [isUpiChecked,setIsUpiChecked]=useState(false)
    const [isCashChecked,setIsCashchecked]=useState(true)

    async function handlePlaceOrderClick() {
      const user = await AsyncStorage.getItem("userData");
      const previousOrders = await AsyncStorage.getItem("orders");
      const _previousOrders = await JSON.parse(previousOrders);
      const _user = JSON.parse(user);
      const currentDate = new Date();
      const orderDateTime = currentDate.toISOString();
      const modifiedItems = items.map(item => ({
        ...item,
        orderDateTime,
        orderMethod: isCashChecked?"cash on delivery":"upi", 
        shippingAddress:address,
        orderid:uuidv4()
      }));
      if(address){
        if (_previousOrders) {
          const userOrders = _previousOrders?.users?.[_user?.id];
          if (userOrders) {
            _previousOrders.users[_user?.id] = userOrders.concat(modifiedItems);
            await AsyncStorage.setItem('orders', JSON.stringify(_previousOrders));
            
            
          } else {
            _previousOrders.users[_user?.id] = modifiedItems;
            await AsyncStorage.setItem('orders', JSON.stringify(_previousOrders));
          }
        } else {
          const mockOrder = {
            users: {
              [_user?.id]: modifiedItems,
            },
          };
          await AsyncStorage.setItem("orders", JSON.stringify(mockOrder));
        }
        navigation.navigate('orderplace')
      }else{
        ErrorAlert()
      }
     
     
     
    }
    const ErrorAlert = () => {
  Alert.alert("Add your address", null, [{ text: "OK" }]);
};


  return (
    <View style={{marginTop:48}}>
      <Text style={{textAlign:"center",fontSize:24,fontWeight:"bold",color:"#000"}}>checkout</Text>
      {address?
      <View>
      <Text>shipping addresss</Text>
      <Text>{address.name}</Text>
      <Text>{address.flat}</Text>
      <Text>{address.area}</Text>
      <Text>{address.town}</Text>
      <Text>{address.state}</Text>
      <Text>{address.pincode}</Text>
      <Text>{address.country}</Text>
      <Text>{address.mobilenumber}</Text>
      </View>: 
      <View  style={{backgroundColor:"lightblue",padding:20,marginTop:20,width:"98%",alignSelf:"center",borderRadius:10}} >
        <Text onPress={()=>navigation.navigate('akarurddress')} style={{fontSize:16}}>Add your address</Text>
      </View>}
     
      <View style={{marginTop:20}}>
        <Text style={{fontWeight:"700",marginLeft:10,marginBottom:20}}>payment method</Text>
      <CheckBox title={"UPI"}
      checked={isUpiChecked}
      checkedColor='orange'
      onPress={()=>{
        setIsUpiChecked(true);
        setIsCashchecked(false)
      }}
      />
      <CheckBox title={"cash on delivery"}
      checked ={isCashChecked}
      checkedColor='orange'
      onPress={()=>{
        setIsCashchecked(true)
        setIsUpiChecked(false)
      }}
      />
      </View>
    <TouchableOpacity style={{marginTop:20,alignSelf:"center",padding:10,backgroundColor:"orange",width:"80%",borderRadius:10,}} onPress={handlePlaceOrderClick}>
        <Text style={{textAlign:"center",fontWeight:"500"}}>Proceed to buy</Text>
    </TouchableOpacity>

    </View>
  )
}

export default Checkout