import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'India', value: '1' },
  { label: 'USA', value: '2' },
  { label: 'Singapore', value: '3' },
  { label: 'Malaysia', value: '4' },
  { label: 'Dubai', value: '5' },
  { label: 'SriLanka', value: '6' },
  { label: 'New Zealand', value: '7' },
  { label: 'Australia', value: '8' },
];

const DropdownComponent = ({setState}) => {
  const [value, setValue] = useState(data[0].value);
  const [isFocus, setIsFocus] = useState(false);
  // const [drop,setDrop]=useState()

  return (
    <View style={styles.container}>
     <View style={{backgroundColor:"#fff",borderRadius:10,margin:10}}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Search Country' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(false)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          setState((prev)=>({
          ...prev,country:item.label
        })
        )
        }}
       
      />
      </View>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});