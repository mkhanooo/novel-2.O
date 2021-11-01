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
} from "react-native";
import {
  Entypo,
  Feather,
  MaterialIcons,
  FontAwesome5,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  EvilIcons,
} from "@expo/vector-icons";

export default function Profile({navigation}) {
  const data = [
    {
      id: "ID",
      name: "3598862",
      logo: "google",
      color:"red"
    },
    {
      id: "NickName",
      name: "Muhammad_khan_15",
      logo: "greater-than",
      color:"lightgrey"
    },
    {
      id: "Reading Referance",
      name: "",
      logo: "greater-than",
      color:"lightgrey"
    },
    {
      id: "Followed Authors",
      name: "",
      logo: "greater-than",
      color:"lightgrey"
    },
  ];
  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.mainBody}>
        <View style={styles.profilePictureBox}>
          <View style={styles.profilePicture}>
            <Image
              style={styles.profileImg}
              source={require("../../../../assets/images/novel4.jpg")}
            />
          </View>
          <View style={styles.pictureLogo}>
            <Feather
              style={{ padding: 3 }}
              name="image"
              size={20}
              color="white"
            />
          </View>
        </View>
        <View style={styles.mainDataBox}>
          <View style={styles.dataBox}>
            {data.map((item, i) => {
              return (
                <View style={styles.lowerdata} key={i}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={styles.dataTextBox}>
                      <Text style={styles.idText}>{item.id}</Text>
                    </View>
                    <View style={styles.idnamelogo}>
                      <Text style={styles.nameText}>{item.name}</Text>
                      <TouchableOpacity>
                        <MaterialCommunityIcons
                          style={{ marginLeft: 8 }}
                          name={item.logo}
                          size={20}
                          color={item.color}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.line}></View>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.inputButton}>
          <TouchableOpacity
            style={styles.roundButton1}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    backgroundColor: "white",
    height: 900,
  },
  profilePictureBox: {
    height: 200,
    backgroundColor: "#F7F8FC",
  },
  profilePicture: {
    alignItems: "center",
  },
  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginTop: 40,
    borderWidth: 2,
    borderColor: "lightgrey",
  },
  pictureLogo: {
    alignSelf: "center",
    alignItems: "center",
    height: 30,
    width: 30,
    backgroundColor: "#6B9AE1",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
    marginTop: -25,
    marginLeft: 60,
  },
  mainDataBox: {
    backgroundColor: "white",
    height: 200,
  },
  dataBox: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  lowerdata: {},
  dataTextBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  idnamelogo: {
    flexDirection: "row",
    padding: 10,
  },
  idText: {
    marginTop: 5,
    fontWeight: "bold",
  },
  nameText: {
    fontWeight: "bold",
    color: "grey",
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#F7F7F7",
  },
  inputButton: {
    marginTop: 20,
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  roundButton1: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 60,
    backgroundColor: "#1781E5",
  },
});
