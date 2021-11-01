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

export default function ContactUs() {
  const data = [
    {
      id: "Computer website",
      contnet: "http://author.novel-cat.com",
    },
    {
      id: "Email",
      contnet: "inovalcat@gmai.com",
    },
    {
      id: "Facebook account",
      contnet: "Kerenian Anna",
    },
  ];
  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.mainBody}>
        <View style={styles.contactusBox}>
          {data.map((item, i) => {
            return (
              <View style={styles.mainBox} key={i}>
                <View style={styles.idcontentBox}>
                  <Text style={styles.idtext}>{item.id}</Text>
                  <Text style={styles.contenttext}>{item.contnet}</Text>
                </View>
                <View style={styles.line}></View>
              </View>
            );
          })}
        </View>
        <View style={styles.lowertextbox}>
          <Text style={styles.lowertext}>
            If any questions about your submission, please feel free to contact
            us.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contactusBox: {
    backgroundColor: "white",
    height: 190,
  },
  mainBox: {
    height: 50,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  idcontentBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  idtext: {
    fontSize: 15,
    fontWeight: "bold",
  },
  contenttext: {
    fontSize: 15,
    color: "grey",
  },
  line: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  lowertextbox: {
    height: 70,
    width: "100%",
    backgroundColor: "white",
  },
  lowertext: {
    padding: 15,
  },
});
