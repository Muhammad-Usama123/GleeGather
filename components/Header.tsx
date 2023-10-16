import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose other icon sets as well
import Geolocation from 'react-native-geolocation-service';
import { grey100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';


export default function Header() {
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerDiv}>
        <View style={styles.headerDivFlex}>
          <View style={styles.headerDivLeftContent}>
            <View>
              <Icon name="map-marker" size={23} color="white" />
            </View>
            <View>
              <Text style={styles.locationTextStyle}>Current Location</Text>
            </View>
            <View>
              <Icon name="caret-down" size={23} color="white" />
            </View>
          </View>
          <View style={styles.headerDivRightContent}>
            <View>
              <Icon name="bell" size={23} color="white" />
            </View>
            <View>
              <Icon name="shopping-cart" size={23} color="white" />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.searchBar}>
        <View style={styles.searchBarFlex}>
          <View style={styles.searchBarLeftContent}>
            <View>
              <Icon style={styles.searchIcon} name='search' size={15} color='grey' />
            </View>
            <View>
              <TextInput
                placeholder='Search GleeGather'
              />
            </View>
          </View>
          <View style={styles.searchBarRightContent}>
            <View>
              <Icon name='qrcode' size={23} color='grey' />
            </View>
            <View>
              <Text>Categories</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerDiv: {
    flex: 1,
    height: 80,
    width: 413,
    backgroundColor: '#75C2F6',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 10,
    position: 'relative'
  },
  headerDivFlex: {
    flex: 1,
    flexDirection: 'row'
  },
  headerDivLeftContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // paddingLeft: 20,
    gap: 20
  },
  locationTextStyle: {
    color: '#ffffff'
  },
  headerDivRightContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // paddingRight: 20,
    gap: 20
  },
  searchBar: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    width: 350,
    height: 45,
    top: 60,
    marginLeft: 30,
    borderRadius: 10,
    paddingHorizontal: 20
  },
  searchBarFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBarLeftContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20
  },
  searchIcon: {
    top: 15
  },
  searchBarRightContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 20
  }
})