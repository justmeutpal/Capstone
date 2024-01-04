import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Button,
  Alert
} from "react-native";
import DropdownComponent from "../components/DropDownMenu";
import Addresscontext from "../Addresscontext";
import { useContext } from "react";

const Addressinput = ({navigation}) => {

const{setAddress,address}=useContext(Addresscontext)


  const [value,setValue]=useState({
    country:"",
    name:"",
    mobilenumber:"",
    flat:"",
    area:"",
    pincode:"",
    town:"",
    state:"",
  })


function handleSubmit(){
setAddress(value)
successAlert()
navigation.navigate("address")
}
const successAlert = () => {
  Alert.alert("Address added successfully", null, [{ text: "OK" }]);
};

  return (
    

    <ScrollView style={{ backgroundColor: "#f2f4f7" }}>
      
      <KeyboardAvoidingView
    
        style={{ justifyContent: "center", marginTop: 50 ,paddingBottom:70}}
      >
       
        
        <Text style={{ fontWeight: "bold", marginLeft: 10, fontSize: 20 }}>
          Edit Your Delivery Address
        </Text>
        <DropdownComponent setState={setValue}/>
        <Text style={{ fontWeight: "bold", marginLeft: 10 }}>Full Name</Text>
        <TextInput
          style={{
            borderWidth: 0.5,
            padding: 10,
            margin: 10,
            borderRadius: 10,
            backgroundColor: "#fff",
          }}
        value={value.name} 
        onChangeText={(val)=>
          setValue((prev) => ({...prev,name:val}))
        }

        ></TextInput>
        <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
          Mobile Number
        </Text>
        <TextInput
          style={{
            borderWidth: 0.5,
            padding: 10,
            margin: 10,
            borderRadius: 10,
            backgroundColor: "#fff",
          }}

          value={value.mobilenumber} 
        onChangeText={(val)=>
          setValue((prev) => ({...prev,mobilenumber:val}))
        }

          keyboardType="numeric"
          placeholder="10 Digit Mibile Number Without Prefixes"
        ></TextInput>
        <Text>( May be used to assist Delivery )</Text>
        <Text numberOfLines={1} style={{ opacity: 0.5 }}>
          ___________________________________________________________
        </Text>
        <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
          Flat, House no., Building, Company, Apartment
        </Text>
        <TextInput
          style={{
            borderWidth: 0.5,
            padding: 10,
            margin: 10,
            borderRadius: 10,
            backgroundColor: "#fff"
          }}
          value={value.flat} 
        onChangeText={(val)=>
          setValue((prev) => ({...prev,flat:val}))
        }
        ></TextInput>
        <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
          Area, Street, Sector, Village{" "}
        </Text>
        <TextInput
          style={{
            borderWidth: 0.5,
            padding: 10,
            borderRadius: 10,
            margin: 10,
            backgroundColor: "#fff",
          }}
          value={value.area} 
        onChangeText={(val)=>
          setValue((prev) => ({...prev,area:val}))
        }
        ></TextInput>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <View style={{ width: "40%" }}>
            <Text style={{ fontWeight: "bold" }}>Pin-Code</Text>
            <TextInput
              style={{
                borderWidth: 0.5,
                padding: 10,
                borderRadius: 10,
                width: "100%",
                backgroundColor: "#fff",
              }}
              value={value.pincode} 
        onChangeText={(val)=>
          setValue((prev) => ({...prev,pincode:val}))
        }
              keyboardType="numeric"
            ></TextInput>
          </View>
          <View style={{ width: "40%" }}>
            <Text style={{ fontWeight: "bold" }}>Town/City</Text>
            <TextInput
              style={{
                borderWidth: 0.5,
                padding: 10,
                marginRight: 10,
                borderRadius: 10,
                width: "100%",
                backgroundColor: "#fff",
              }}
              value={value.town} 
        onChangeText={(val)=>
          setValue((prev) => ({...prev,town:val}))
        }
            ></TextInput>
          </View>
        </View>
        <Text style={{ fontWeight: "bold", margin: 10 }}>State</Text>
        <TextInput
          style={{
            borderWidth: 0.5,
            padding: 10,
            margin: 10,
            borderRadius: 10,
            backgroundColor: "#fff",
          }}
          value={value.state} 
        onChangeText={(val)=>
          setValue((prev) => ({...prev,state:val}))
        }
        ></TextInput>
        <View style={{ padding: 10 }}>
          <Button title="Add address"  onPress={handleSubmit}/>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Addressinput;
