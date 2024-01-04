import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

const AccountSettings = ({ route }) => {
  const { userData } = route.params;
  console.log(userData);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 20,
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <Icon
          name="arrowleft"
          type="antdesign"
          containerStyle={{
            backgroundColor: "transparent",
            borderWidth: 0,
            borderColor: "transparent",
            width: 20,
            height: 19,
            marginLeft: 1,
            marginTop: 40,
            marginBottom: 0,
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 10,
            marginTop: 40,
          }}
        >
          Account Settings
        </Text>
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 15,
          marginLeft: 20,
          marginTop: 20,
          marginBottom: 0,
        }}
      >
        PetGuardianName:
      </Text>
      <TextInput
        placeholder="Name"
        placeholderTextColor={"black"}
        value={userData.petguardian}
        style={{
          marginLeft: 20,
          marginTop: 5,
          width: 300,
          height: 40,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "black",
          paddingLeft: 10,
        }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 15,
          marginLeft: 20,
          marginTop: 20,
          marginBottom: 0,
        }}
      >
        PetName:
      </Text>
      <TextInput
        placeholder="Name"
        placeholderTextColor={"black"}
        value={userData.petname}
        style={{
          marginLeft: 20,
          marginTop: 5,
          width: 300,
          height: 40,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "black",
          paddingLeft: 10,
        }}
      />
      <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 20, marginTop: 20, marginBottom: 0}}>Email:</Text>
     <TextInput placeholder='Name' placeholderTextColor={'black'} value={userData.email}
         style={{marginLeft: 20, marginTop: 5, width: 300, height: 40, borderWidth: 1, borderRadius: 5, borderColor: 'black' ,paddingLeft: 10}}/>
    
     <TouchableOpacity>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 20, marginTop: 20, marginBottom: 0 , color: 'red'}}>Delete Account</Text>
     </TouchableOpacity>
    </View>
  );
};

export default AccountSettings;
