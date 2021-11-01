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

export default function LiveChat() {
  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.mainBody}>
        <View style={styles.icon}>
          <Ionicons name="person-circle-outline" size={50} color="blue" />
        </View>
        <View style={styles.upperTextBox}>
          <Text style={styles.upperText}>
            Welcome to our LiveChat! Please fill in the form below before
            starting the Chat
          </Text>
        </View>
        <View style={styles.inputField}>
          <Text style={styles.inputText}>Name</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.inputText}>Email</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.inputText}>your APP and app ID</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.inputText}>Your problem about</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputButton}>
          <TouchableOpacity style={styles.roundButton1}><Text style={styles.buttonText}>Start the Chat</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 50,
    marginLeft: 40,
    marginRight: 40,
    borderRadius:8,
    padding:10
  },
  icon: {
    alignSelf: "center",
  },
  upperTextBox: {
    padding: 5,
  },
  upperText: {
    fontSize: 16,
  },
  inputField: {
    paddingLeft: 5,
  },
  inputText: {
    fontSize: 16,
    paddingTop:8,
    marginLeft: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    marginTop: 3,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    paddingLeft:5,
    
  },
  inputButton: {
    margin: 10,
    borderRadius: 100,
    alignItems:"center"
  },
  buttonText:{
    color:"white"
  },
  roundButton1:{
    width: 278,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
});
