import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';
import Ordercard from '../components/OrderCard';


const Order = () => {
    const [data , setData]=useState([])
    useEffect(() => {
        const fetchOrderData = async () => {
          try {
            const userData = await AsyncStorage.getItem('userData')
            const parsedUserData = JSON.parse(userData)
            const storedOrderData = await AsyncStorage.getItem('orders');
            const parsedOrderData = JSON.parse(storedOrderData);
            const userid = parsedUserData.id
            console.log(userid)
            
            setData(parsedOrderData.users[userid]);
            // console.log(parsedOrderData.users[userid])
            //  console.log(parsedUserData.users["6595016377705cc20dfd69cd"])
            console.log(data)
           
          } catch (error) {
            console.error('Error fetching user data:', error.message);
          }
        };
    
        fetchOrderData();
      }, []);
  return (
<ScrollView>
    {data? 
    <>
    <Text>Order Details</Text>
         {data?.map((item)=>(
             <Ordercard 
             key={item.orderid}
            item={item}
             />
        ))}</> :<Text>order page is empty</Text>}
    
       
     
    
    </ScrollView >
  )
}

export default Order

const styles = StyleSheet.create({})