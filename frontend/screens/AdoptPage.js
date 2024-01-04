import React ,{ useState,useEffect } from 'react';
import {View, StyleSheet, ScrollView,Image,TextInput, SafeAreaView} from 'react-native';
import AdoptCard from '../components/AdoptCard';
import { Feather } from '@expo/vector-icons';
import {ip} from '../ip'

const AdoptPage = ({onSearch}) => {
    const [pet,setPet]=useState([])
    const [searchText, setSearchText] = useState('');
      
    const handleSearch = async () => {
      try {
        const response = await fetch(`http://${ip}:3000/api/searchpet?location=${searchText}`);
        const data = await response.json();
        setPet(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    useEffect(()=>{
        fetch(`http://${ip}:3000/api/adoptpets`)
        .then((res)=>res.json())
        .then((data)=>setPet(data))
    },[])

    console.log(pet)

    return (
       
        <SafeAreaView style={styles.container}>
        <View style={styles.search}>
        <TextInput
        style={styles.input}
        placeholder="Search by Location"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={handleSearch}
      />
       <Feather name="search" size={20} color="green" style={styles.icon} onPress={handleSearch} />
        </View>
       
        <ScrollView style={{backgroundColor:'#2525' }} contentContainerStyle={{alignItems:"center" , paddingBottom: 100}}>
        {pet.map((item)=>(
            
            <AdoptCard 
                key={item._id}
                image={item.image}
                name={item.name}
                breed={item.breed}
                guardian={item.guardianname}
                phone={item.phonenumber}
                location={item.location}
                desc={item.desc}
                sex={item.sex}
            />  
        ))}
        
      </ScrollView>
      </SafeAreaView>
        
       
    );
}

const styles = StyleSheet.create({
    container: {
        // marginRight:3,
        marginTop: 40,
        flex: 1,
      },
      input: {
        height:40,
        width:"80%",
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius:5,
        backgroundColor:"#fff"
      },
      icon:{
        borderWidth:0.5,
        height:35,
        width:35,
        borderRadius:35,
        padding:7,
        backgroundColor:"aliceblue",
        

      },
      search:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:9,
        margin:10
        
      }
      
})

export default AdoptPage;
