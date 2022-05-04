// App.js
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Dimensions } from "react-native";
import * as Keychain from "react-native-keychain";
export default function LoginScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    (async () => {
        const username = 'zuck';
        const password = 'poniesRgr8';
      
        // Store the credentials
        await Keychain.setGenericPassword(username, password);
      
        try {
          // Retrieve the credentials
          const credentials = await Keychain.getGenericPassword();
          if (credentials) {
            console.log(
              'Credentials successfully loaded for user ' + credentials.username
            );
          } else {
            console.log('No credentials stored');
          }
        } catch (error) {
          console.log("Keychain couldn't be accessed!", error);
        }
        await Keychain.resetGenericPassword();
      })();
  }, []);
  const handleLogin = async () => {
    const username = 'zuck';
        const password = 'poniesRgr8';
      
        // Store the credentials
        await Keychain.setGenericPassword(username, password);
      
        try {
          // Retrieve the credentials
          const credentials = await Keychain.getGenericPassword();
          if (credentials) {
            console.log(
              'Credentials successfully loaded for user ' + credentials.username
            );
          } else {
            console.log('No credentials stored');
          }
        } catch (error) {
          console.log("Keychain couldn't be accessed!", error);
        }
        await Keychain.resetGenericPassword();

  };
  const handleLogout = async()=>{
    const logout = await Keychain.resetGenericPassword();
    console.log({logout});
    if(logout){
      setIsLoggedIn(false);
      setUserDetails({});
    }
  }
  return (
    <View style={styles.container}>
      {!isLoggedIn ? (
        <View>
          <Text style={styles.helloText}>Hello There!</Text>
          <TextInput placeholder="email" style={styles.textInput} />
          <TextInput
            placeholder="password"
            secureTextEntry
            style={styles.textInput}
          />
          <Text style={styles.loginBtn} onPress={handleLogin}>
            Login
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.welcomeText}>
            Welcome back! {userDetails.username}
          </Text>
          <Text style={styles.logoutBtn} onPress={handleLogout} >Logout</Text>
        </View>
      )}
    </View>
  );
}
const screenWidth = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
    alignItems: "center",
    // justifyContent: 'center',
    paddingTop: 250,
  },
  helloText: {
    color: "white",
    marginBottom: 20,
    fontSize: 30,
  },
  textInput: {
    padding: 5,
    paddingStart: 15,
    backgroundColor: "#3b3b3b",
    width: screenWidth * 0.8,
    borderRadius: 25,
    marginBottom: 15,
    color: "white",
    fontWeight: "600",
  },
  loginBtn: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: "#ff1178",
    borderRadius: 25,
    color: "white",
    textAlign: "center",
  },
  welcomeText: {
    color: "white",
    marginBottom: 20,
    fontSize: 30,
  },
  logoutBtn: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: "#ff1178",
    borderRadius: 25,
    color: "white",
    textAlign: "center",
  },
});