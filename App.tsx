import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import SwipeableElevatedCards from './components/SwipeableElevatedCardsMainAdvertising';
import CardStack from './components/SwipeableElevatedCardsMainAdvertising';
import Header from './components/Header';
import TopDiscounts from './components/TopDiscounts';
import ClientsPremisesCards from './components/ClientsPremisesCards';
import SignUpForm from './components/SignUpForm';
import LogInPage from './components/LogInPage';
import SwipeableElevatedCardsMainAdvertising from './components/SwipeableElevatedCardsMainAdvertising';

const App = () => {
  const Users = [
    {
      id: 1,
      image: 'https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      discountType: 'FLAT',
      discountPercent: '15%',
      off: 'OFF',
      premisesName: "EF'S Cafe",
      premisesType: "Food & Beverages",
      ratingIcon: 'star',
      ratingStarsCount: '0',
      distance: '0.9km',
      instore: 'In Store',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1512386233331-f023884a92e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1495&q=80',
      discountType: 'FLAT',
      discountPercent: '15%',
      off: 'OFF',
      premisesName: "Soda and Shawarma",
      premisesType: "Food & Beverages",
      ratingIcon: 'star',
      ratingStarsCount: '0',
      distance: '0.34km',
      instore: 'In Store'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1512386233331-f023884a92e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1495&q=80',
      discountType: 'FLAT',
      discountPercent: '15%',
      off: 'OFF',
      premisesName: "ABC",
      premisesType: "Food & Beverages",
      ratingIcon: 'star',
      ratingStarsCount: '0',
      distance: '123km',
      instore: 'In Store'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1512386233331-f023884a92e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1495&q=80',
      discountType: 'FLAT',
      discountPercent: '15%',
      off: 'OFF',
      premisesName: "ABC",
      premisesType: "Food & Beverages",
      ratingIcon: 'star',
      ratingStarsCount: '0',
      distance: '123km',
      instore: 'In Store'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1512386233331-f023884a92e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1495&q=80',
      discountType: 'FLAT',
      discountPercent: '15%',
      off: 'OFF',
      premisesName: "ABC",
      premisesType: "Food & Beverages",
      ratingIcon: 'star',
      ratingStarsCount: '0',
      distance: '123km',
      instore: 'In Store'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1512386233331-f023884a92e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1495&q=80',
      discountType: 'FLAT',
      discountPercent: '15%',
      off: 'OFF',
      premisesName: "ABC",
      premisesType: "Food & Beverages",
      ratingIcon: 'star',
      ratingStarsCount: '0',
      distance: '123km',
      instore: 'In Store'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1512386233331-f023884a92e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1495&q=80',
      discountType: 'FLAT',
      discountPercent: '15%',
      off: 'OFF',
      premisesName: "ABC",
      premisesType: "Food & Beverages",
      ratingIcon: 'star',
      ratingStarsCount: '0',
      distance: '123km',
      instore: 'In Store'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1512386233331-f023884a92e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1495&q=80',
      discountType: 'FLAT',
      discountPercent: '15%',
      off: 'OFF',
      premisesName: "ABC",
      premisesType: "Food & Beverages",
      ratingIcon: 'star',
      ratingStarsCount: '0',
      distance: '123km',
      instore: 'In Store'
    }
  ]
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      {/* <View> */}
      {/* <SignUpForm/> */}
      {/* <LogInPage/> */}
      <Header />
      <TopDiscounts />
      <SwipeableElevatedCardsMainAdvertising/>
      {/* <View style={styles.container}> */}
      <Text style={styles.containerHeading}>Nearby Discounts</Text>
      <FlatList
        data={Users}
        renderItem={({ item }) => <ClientsPremisesCards item={item} />
      }
      />
      </ScrollView>
      {/* </ScrollView> */}
      {/* </View> */}
      {/* </View> */}
    {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // paddingLeft: 30,
  //   height: 475,
  //   width: 400,
    backgroundColor: '#fff',
    // marginBottom: 20
  },
  containerHeading: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#fff',
    marginTop: 30
  },
})

export default App;
