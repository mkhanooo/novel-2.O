import React, { useState } from "react";
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
  Modal,
} from "react-native";
import { RadioButton } from "react-native-paper";
import {
  Entypo,
  MaterialIcons,
  FontAwesome5,
  AntDesign,
  Ionicons,
  FontAwesome,
  EvilIcons,
} from "@expo/vector-icons";
import CountryPicker from "react-native-country-picker-modal";
import EditorModal from "./EditorModal";

export default function RegisterNovel({ navigation }) {
  const [checked, setChecked] = useState("first");
  const [modalVisible, setModalVisible] = useState(true);


  const [termchecked, settermChecked] = useState("");
  const [country, setCountry] = useState();
  const onSelect = (country) => {
    setCountry(country.name);
  };

  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.mainBody}>
        <View style={styles.penBox}>
          <View style={styles.startPenTextBox}>
            <Text style={styles.star}>* </Text>
            <Text style={styles.pen}>Pen name</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="(Pen name will be displayed in your novel details)"
            />
          </View>
        </View>
        <View style={styles.genderBox}>
          <View style={styles.genderTextBox}>
            <Text style={styles.star}>* </Text>
            <Text style={styles.genderText}>Gender</Text>
          </View>
          <View style={styles.textRadioButtonBox}>
            <RadioButton
              theme="no theme"
              color="#4461A5"
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text style={styles.innerText}>Male</Text>
            <RadioButton
              color="#4461A5"
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
            <Text style={styles.innerText}>Female</Text>
            <RadioButton
              color="#4461A5"
              value="third"
              status={checked === "third" ? "checked" : "unchecked"}
              onPress={() => setChecked("third")}
            />
            <Text style={styles.innerText}>Rathor not say</Text>
          </View>
        </View>
        <View style={styles.countryBox}>
          <View style={styles.countryTextBox}>
            <Text style={styles.star}>* </Text>
            <Text style={styles.countryText}>Country/Region</Text>
          </View>
          <View
            
            style={styles.countryModel}
          >
            <CountryPicker

             onPress={() => setModalVisible(!modalVisible)}
              {...{
                onSelect,
              }}
            ></CountryPicker>
            <Text style={styles.countryName}>{country}</Text>
          </View>
        </View>

        <View style={styles.editorMainBox}>
          <View style={styles.editorTextBox}>
            <Text style={styles.star}>* </Text>
            <Text style={styles.editorText}>Editor</Text>
          </View>
          <View style={styles.editorModal}>
            <EditorModal />
          </View>
        </View>
        <View style={styles.emailBox}>
          <View style={styles.emailTextBox}>
            <Text style={styles.star}>* </Text>
            <Text style={styles.emailText}>E-mail</Text>
          </View>
          <View style={[{ marginBottom: 2 }, styles.inputBox]}>
            <TextInput
              style={styles.input}
              placeholder="(We'll contact you via email)"
            />
          </View>
        </View>
        <View style={styles.termBox}>
          <View style={styles.termRadioButton}>
            <RadioButton
              theme="no theme"
              color="#4461A5"
              value="term"
              status={termchecked === "term" ? "checked" : "unchecked"}
              onPress={() => settermChecked("term")}
            />
            <View style={styles.termText}>
              <Text>I agree to the </Text>
              <Text style={{ color: "#4576BB" }}>Privacy Terms</Text>
            </View>
          </View>
        </View>
        <View style={styles.inputButton}>
          <TouchableOpacity
            style={styles.roundButton1}
            onPress={() => navigation.navigate("AddNovel")}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contactBox}>
          <TouchableOpacity onPress={() => navigation.navigate("ContactUs")}>
            <Text style={styles.contactText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainBody: {},
  penBox: {
    width: "100%",
    height: 120,
    backgroundColor: "white",
  },
  startPenTextBox: {
    flexDirection: "row",
    padding: 10,
  },
  star: {
    fontWeight: "bold",

    color: "red",
  },
  pen: {
    fontWeight: "bold",
  },
  line: {
    borderTopWidth: 1,
    marginLeft: 10,
    marginRight: 20,
    marginTop: 10,
    // borderColor: "#FCFCFC",
    borderColor: "lightgrey",
  },
  inputBox: {},
  input: {
    padding: 15,
  },
  genderBox: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    marginTop: 10,
    flexDirection: "row",
  },
  genderTextBox: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  genderText: { fontWeight: "bold" },
  textRadioButtonBox: {
    flexDirection: "row",
    marginTop: 7,
  },
  innerText: {
    marginTop: 8,
  },
  countryBox: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    marginTop: 10,
    flexDirection: "row",
  },
  countryTextBox: {
    flexDirection: "row",
    padding: 10,
  },
  countryText: {
    fontWeight: "bold",
  },
  countryModel: {
    paddingLeft: 10,
    paddingTop: 8,
    flexDirection: "row",
  },
  countryName: {
    fontSize: 17,
  },
  editorMainBox: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    marginTop: 10,
    flexDirection: "row",
  },
  editorTextBox: { flexDirection: "row", padding: 10 },
  editorText: { color: "black", fontWeight: "bold" },
  editorModal: { marginLeft: 60 },
  emailBox: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    marginTop: 10,
    flexDirection: "row",
  },
  emailTextBox: { flexDirection: "row", padding: 10 },
  emailText: { fontWeight: "bold" },
  termBox: {
    padding: 20,
    alignItems: "center",
  },
  termRadioButton: {
    flexDirection: "row",
    // width:30,
  },
  termText: {
    fontSize: 15,
    flexDirection: "row",
    marginTop: 7,
  },
  inputButton: {
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  roundButton1: {
    width: 290,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 60,
    backgroundColor: "#3154A5",
  },
  contactBox: {
    marginTop: 10,
    alignItems: "center",
  },
  contactText: {
    color: "#4377E4",
    fontWeight: "bold",
  },
});
