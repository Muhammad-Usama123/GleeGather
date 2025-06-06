import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const LogInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
        <View style={styles.container1}>
            <View>
      <Text style={styles.registerHeading}>LOGIN PAGE</Text>
      </View>
      <View>
        <Text>A LOGIN PAGE IS TYPICALLY THE ENTRY POINT FOR</Text>
      </View>
      <View>
        <Text style={styles.registerDetails}>USERS TO ACCESS THEIR ACCOUNTS ON A WEBSITE .</Text>
        </View>
      </View>
      <View style={styles.createAccountContainer}>
        <View>
        <View style={styles.createAccount}>
            <View>
                <Text style={styles.createAccountHeading}>Login</Text>
            </View>
            <View>
                <Text style={styles.createAccountDetails}>Please login using account details below.</Text>
            </View>
            </View>
            <View>
                <View>
                <View>
                    <TextInput style={styles.userName} value={email} onChangeText={(text)=>setEmail(text)} placeholder='Email' keyboardType='email-address'/>
                </View>
                <View>
                    <TextInput style={styles.userName} value={password} onChangeText={(text)=>setPassword(text)} placeholder='Password'/>
                </View>
                </View>
                <View style={styles.buttons}>
                    <Button title='Log In'/>
                </View>
                <View style={[styles.buttons, styles.button2]}>
                    <Button title='Create Account'/>
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default LogInPage

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flex: 1,
    },
    container1: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    registerHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20
    },
    registerDetails: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    createAccountContainer: {
        borderColor: 'black',
        borderWidth: 1,
        // borderHeight: 700,
        borderRadius: 10
    },
    createAccount: {
        alignItems: 'center'
    },
    createAccountHeading: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 20
    },
    createAccountDetails: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 30
    },
    userName: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10
    },
    contactNumber: {
        marginBottom: 10
    },
    buttons: {
        borderRadius: 20,
        marginTop: 10,
        marginHorizontal: 20
    },
    button2: {
        marginBottom: 20
    }
})
