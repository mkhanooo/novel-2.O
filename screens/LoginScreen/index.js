import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { Entypo, FontAwesome5, Ionicons, FontAwesome, Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";

import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
import axios from "axios";

const logo = require("../../assets/foodie.png");
const window = Dimensions.get("window");

export default function LoginScreen({ navigation }) {
  // Login with google
  const handleGoogleAuth = () => {
    const config = {
      androidClientId: `281886094355-vmsso1u2o12rfo6e917s4l9e0o3qdj6c.apps.googleusercontent.com`,
      iosClientId: `281886094355-4g34gdkhhpb5k5hpvpve26j71d45ognq.apps.googleusercontent.com`,
      scopes: ["profile", "email"],
    };
    // Google auth
    Google.logInAsync(config)
      .then((result) => {
        if(result.type !== "cancel"){

          axios
          .post("http://192.168.18.22:3001/api/public/loginUser", result)
          .then((res) => {
            console.log('res===',res.data);
          });
          console.log("result===", result);
        }else{
          Alert.alert("Request Cancelled");
        }
      })
      .catch((err) => {
        console.log("catch", err);
      });
  };

  // Facebook login with direct expo
  async function handleFBAuth() {
    try {
      await Facebook.initializeAsync({
        appId: "2990351421221097",
      });
      const { type, token, expirationDate, permissions, declinedPermissions } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  return (
    <View>
      <StatusBar></StatusBar>
      <ScrollView>
        {/* <ScreenModal /> */}
        <View style={styles.pageWrapper}>
          <Feather name="arrow-left" style={styles.headerIcon} onPress={() => navigation.goBack()} />
          <Text name="arrow-left" style={styles.headerSkip} onPress={() => navigation.navigate("Library")}>
            Skip
          </Text>
          <View style={styles.logo}>
            <Image style={styles.logoImage} source={logo} />
            <Text style={styles.logoText}>Hi, NovelCat</Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => handleFBAuth()} activeOpacity={0.8} style={styles.facebook}>
              <Entypo name="facebook-with-circle" size={24} color="#fff" />
              <Text style={styles.facebookText}>Sign in with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGoogleAuth()} activeOpacity={0.8} style={styles.google}>
              <FontAwesome5 name="google-plus" size={24} color="#fff" />
              <Text style={styles.googleText}>Sign in with Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.bottomOr}>---------------- Or ----------------</Text>
            <View style={styles.bottomIcons}>
              <View style={styles.bottomLineWrapper}>
                <Ionicons name="md-chatbubble-ellipses-sharp" style={styles.bottomIcon} />
              </View>
              <View style={styles.bottomMailWrapper}>
                <FontAwesome style={styles.bottomIcon} name="envelope" />
              </View>
            </View>
            <Text style={styles.bottomText}>By creating an account, I accept NovelCat's</Text>
            <Text style={styles.bottomLink}>Terms of Services</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    minHeight: window.height,
    maxHeight: window.height,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIcon: {
    position: "absolute",
    top: "2%",
    left: "5%",
    fontSize: 22,
  },
  headerSkip: {
    position: "absolute",
    top: "2%",
    right: "5%",
    fontWeight: "bold",
  },
  logo: {
    marginTop: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 25,
    fontWeight: "800",
  },
  buttons: {},
  facebook: {
    backgroundColor: "#3b5998",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 100,
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  facebookText: {
    color: "#fff",
    marginLeft: 5,
  },
  google: {
    backgroundColor: "rgb(219, 68, 55)",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 100,
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
  },
  googleText: {
    color: "#fff",
    marginLeft: 5,
  },
  bottom: { textAlign: "center", marginVertical: 20 },
  bottomOr: {
    textAlign: "center",
  },
  bottomIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 30,
  },
  bottomLineWrapper: {
    backgroundColor: "#00B900",
    borderRadius: 100,
    padding: 10,
  },
  bottomMailWrapper: {
    backgroundColor: "#FD5DAB",
    borderRadius: 100,
    padding: 10,
  },
  bottomIcon: {
    fontSize: 25,
    color: "#fff",
  },
  bottomText: {
    justifyContent: "center",
    color: "#222",
  },
  bottomLink: {
    textAlign: "center",
    marginBottom: 10,
    textDecorationLine: "underline",
    color: "#413ACA",
  },
});
