import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ClientsPremisesCards(props: any) {
  const item=props.item;
  

  return (
    <View>
      
          <View style={styles.container}>
            <View style={styles.container1}>
              <View>
                <Image
                  source={{
                    uri: item.image
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.discountContainer}>
                <View>
                  <Text style={styles.discountType}>{item.discountType}</Text>
                </View>
                <View>
                  <Text style={styles.discountPercent}>{item.discountPercent}</Text>
                </View>
                <View>
                  <Text style={styles.off}>{item.off}</Text>
                </View>
              </View>
            </View>
            <View style={styles.premisesDetailsContainer}>
              <View style={styles.premisesContainer}>
                <View>
                  <Text style={styles.premisesName}>{item.premisesName}</Text>
                </View>
                <View>
                  <Text style={styles.premisesType}>{item.premisesType}</Text>
                </View>
              </View>
              <View style={styles.premisesLocDets1}>
                <View style={styles.premisesLocDets}>
                  <View style={styles.ratingDets}>
                    <View>
                      <Icon
                        name={item.ratingIcon}
                        size={10}
                        color="#F8DE22"
                        style={styles.ratingIcon}
                      />
                    </View>
                    <View>
                      <Text style={styles.ratingStarsCount}>{item.ratingStarsCount}</Text>
                    </View>
                  </View>
                  <View>
                    <Icon name='map-marker' size={10} color="#75C2F6" style={styles.mapMarker} />
                  </View>
                  <View>
                    <Text style={styles.distance}>{item.distance}</Text>
                  </View>
                </View>
                <View style={styles.instore}>
                  <Text>{item.instore}</Text>
                </View>
              </View>
            </View>
          </View>
        


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    flex: 1,
    marginVertical: 20,
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 20
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    height: 150,
    width: 370,
    backgroundColor: '#F5F5DC',
    borderRadius: 10
  },
  image: {
    height: 150,
    width: 225,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  discountContainer: {
    marginTop: 10,
    marginLeft: 10
  },
  discountType: {
    fontSize: 10,
    color: '#000',
    fontWeight: 'bold'
  },
  discountPercent: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#75C2F6'
  },
  off: {
    fontSize: 10,
    color: '#000',
    fontWeight: 'bold'
  },
  premisesDetailsContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  premisesContainer: {
    paddingTop: 10
  },
  premisesName: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold'
  },
  premisesLocDets1: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingRight: 10
  },
  premisesLocDets: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // alignItems: 'flex-end'
    // paddingLeft: 200
  },
  ratingDets: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 30
    // marginRight: 
  },
  ratingIcon: {
    top: 5
  },
  ratingStarsCount: {
    left: 3
  },
  mapMarker: {
    top: 5,
    right: 3
  },
  premisesType: {
    fontSize: 12,
    paddingTop: 5
  },
  instore: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10
  },
  distance: {
    paddingRight: 10
  }
})