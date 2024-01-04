import React, { useContext, useEffect, useState,   } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Pressable, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { Icon } from '@rneui/themed';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import { ip } from '../ip';
import CartContext from '../CartContext';
const PetAccessories = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [allProducts, setAllProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const API = activeCategory === 'Dogs' ? 'dog' : (activeCategory === 'Cats' ? 'cat' : (activeCategory === 'fish' ? 'fish' : 'pet'));
  const {addToCart}=useContext(CartContext);
  const { addToWish, removeFromWish, items , list } = useContext(CartContext);
  const [wishlistStatus, setWishlistStatus] = useState({});
  const [searchTerm,setSearchTerm] = useState("")
  // console.log(data);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://${ip}:3000/api/${API}products`);
        const data = await response.json();
        setAllProducts(data.map((product) => ({ ...product, isActive: false })))

        // .then((data) => setProd(data.map((product) => ({ ...product, isActive: false }))));

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [API]);
  const handleSearch = async () => {
    try {
      const response = await fetch(`http://${ip}:3000/api/searchproducts?name=${searchTerm}`);
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);}
};
  const navigateToProductDescription = (product) => {
    
    navigation.navigate('ProductDescription', product);

  };
  const toggleWishlist = (productId,product) => {
    setAllProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId ? { ...product, isActive: !product.isActive } : product
      )
    );
    addToWish(product)
  };
  
  

 
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: 'white',}}>
      <Navbar allProducts={allProducts}   navigation={navigation} setSearch={setSearchTerm} handleSearch={handleSearch}/>
      
      <Banner />
      <Categories style={styles.Categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      <FlatList
        data={allProducts}
        keyExtractor={(item) => item._id}
        horizontal={false}
        numColumns={2}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => navigateToProductDescription(item)}>
            <ProductCard key={index} imageurl={item.imageurl} name={item.name} price={item.price} ratings={item.rating} add={item.add}  handleCart={() => addToCart(item)} actionButton={{
                 icon: (
                  <TouchableOpacity onPress={() => toggleWishlist(item._id,item)}>
                    <Icon
                      name={item.isActive ? "heart" : "hearto"}
                      type="antdesign"
                      color={item.isActive ? "red" : "black"}
                      size={20}
                    />
                  </TouchableOpacity>
                ),

              }}/>
          </Pressable>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Categories: {
    marginBottom: 0,
  },
  sortButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 70,
    right: 0,
    alignItems: 'center',
  },
  sortButton: {
    backgroundColor: '#F3F6F7',
    borderRadius: 5,
    margin: 1,
    width: '50%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PetAccessories;
