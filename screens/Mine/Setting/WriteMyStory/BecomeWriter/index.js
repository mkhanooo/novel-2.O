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

export default function BecomeWriter({ navigation }) {
  const txtdata = [
    {
      icon: "earth",
      txt1: "Influence spreads to over",
      txt2: " 200 ",
      txt3: "countries and regions",
    },
    {
      icon: "mobile1",
      txt1: "Over",
      txt2: " 10 ",
      txt3: "million users",
    },
    {
      icon: "user",
      txt1: "Over",
      txt2: " 10,000 ",
      txt3: "authors",
    },
    {
      icon: "barschart",
      txt1: "Top seller in the application market",
      txt2: "",
      txt3: "",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={styles.mainBody}>
          <View style={styles.upperImgBox}>
            <Image
              style={styles.Img}
              source={require("../../../../../assets/images/becomewriter.jpeg")}
            />
          </View>
          <View style={styles.mainTextBox}>
            <Text style={styles.mainText}>
              NovelCat is one of the world's well-known internet literature
              writing and reading platforms. Since the launch of the NovelCat
              app, its influence has spread to more than 200 countries and
              regions around the world such as United States, the United
              Kingdom, Canada, Austerlia, etc, with more than 10 million
              registered users. It has ranked first in the google Play and App
              store market reading lists in many countries. More than 50,000
              high-quality novels and over 10,000 authors from all over the
              world are here to realize their litrary dreams.
            </Text>
          </View>
          <View>
            {txtdata.map((item, i) => {
              return (
                <View style={styles.mainIconTextBox} key={i}>
                  <View style={styles.iconTextBox1}>
                    <View style={styles.iconBox}>
                      <AntDesign
                        style={styles.icon}
                        name={item.icon}
                        size={25}
                        color="white"
                      />
                    </View>
                    <View style={styles.textBox1}>
                      <Text style={styles.innerText1}>
                        {item.txt1}
                        <Text style={styles.innerNum}>{item.txt2}</Text>
                        <Text> {item.txt3} </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={styles.inputButton}>
            <TouchableOpacity
              style={styles.roundButton1}
              onPress={() => navigation.navigate("RegisterNovel")}
            >
              <Text style={styles.buttonText}>Become a writer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.contactBox}>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("ContactUs")}
            style={styles.contactText}
          >
            Contact Us
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {},
  upperImgBox: {},
  Img: {
    height: 150,
    width: "100%",
  },
  mainTextBox: {
    marginLeft: 15,
    marginRight: 25,
  },
  mainText: {
    marginTop: 15,
  },
  mainIconTextBox: {
    marginTop: 15,
    marginLeft: 15,
  },
  iconTextBox1: {
    flexDirection: "row",
  },
  iconBox: {
    width: 45,
    height: 45,
    backgroundColor: "#CD7AFE",
    borderRadius: 100,
  },
  icon: {
    alignSelf: "center",
    padding: 8,
  },

  textBox1: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 8,
    width: 300,
  },
  innerText1: {
    fontWeight: "bold",
  },

  innerNum: {
    fontWeight: "bold",
    color: "#4377E4",
  },
  inputButton: {
    marginTop: 25,
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
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
    width: "100%",
    height: 20,
    backgroundColor: "lightgrey",
    alignItems: "center",
  },
  contactText: {
    color: "#4377E4",
    fontWeight: "bold",
  },
});
