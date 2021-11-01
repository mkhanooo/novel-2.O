import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
  StatusBar,
  Feather,
} from "react-native";
import {
  Entypo,
  MaterialIcons,
  FontAwesome5,
  AntDesign,
  Ionicons,
  FontAwesome,
  EvilIcons,
} from "@expo/vector-icons";
import ShowPosts from "../../ShowPost";
import Questions from "./Questions";

export default function TabDetail({ name }) {
  return (
    <View style={styles.mainbody}>
      <View style={styles.profilemainbox}>
        <View style={styles.profiletxt}>
          <Text style={{ fontWeight: "bold" }}>Profile</Text>
        </View>
        <View style={styles.mostrecent}>
          <Text>Most Recent</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="grey" />
        </View>
      </View>
      <View>
        {name === "Questions" && <Questions />}
        {name === "Profile" && <ShowPosts />}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainbody: {
    
  },
  profilemainbox: {
    marginTop: 5,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profiletxt: {
    paddingLeft: 15,
  },
  mostrecent: {
    flexDirection: "row",
    paddingRight: 10,
  },
});
