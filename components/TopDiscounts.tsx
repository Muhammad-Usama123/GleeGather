import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function TopDiscounts() {
  return (
    <View style={styles.mainDiv}>
      <Text style={styles.headingTextStyle}>Top Discounts</Text>
      <View style={styles.mainCirclesDiv}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.circles}></View>
      <View style={styles.circles}></View>
      <View style={styles.circles}></View>
      <View style={styles.circles}></View>
      <View style={styles.circles}></View>
      <View style={styles.circles}></View>
      <View style={styles.circles}></View>
      <View style={styles.circles}></View>
      </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainDiv: {
        marginTop: 40,
        backgroundColor: '#fff'
        },
    headingTextStyle: {
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000"
    },
    mainCirclesDiv: {
        marginHorizontal: 20
        },
    circles: {
        width: 70,
        height: 70,
        backgroundColor: 'red',
        marginTop: 10,
        borderRadius: 100/2,
        marginLeft: 20
    },
})