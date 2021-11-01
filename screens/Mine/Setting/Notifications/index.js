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
  MaterialIcons,
  FontAwesome5,
  AntDesign,
  Ionicons,
  FontAwesome,
  EvilIcons,
  Feather,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Card, ListItem, Icon } from "react-native-elements";

export default function Notifications({navigation}) {
  const notificationCard = [
    {
      title: "900 Free Gems",
      posttime: "14 Sep, 2021 09:36:38",
      dicsheading: "Dear readers:",
      discription:
        "This is discription this is discription This is discription this is discription This is discription this is discription",
      time: "9.14-9.18 (GMT+8)",
      moreinfo: "Click Me and Learn More",
    },
    {
      title: "900 Free Gems",
      posttime: "14 Sep, 2021 09:36:38",
      dicsheading: "Dear readers:",
      discription:
        "This is discription this is discription This is discription this is discription This is discription this is discription",
      time: "9.14-9.18 (GMT+8)",
      moreinfo: "Click Me and Learn More",
    },
    {
      title: "900 Free Gems",
      posttime: "14 Sep, 2021 09:36:38",
      dicsheading: "Dear readers:",
      discription:
        "This is discription this is discription This is discription this is discription This is discription this is discription",
      time: "9.14-9.18 (GMT+8)",
      moreinfo: "Click Me and Learn More",
    },
    {
      title: "900 Free Gems",
      posttime: "14 Sep, 2021 09:36:38",
      dicsheading: "Dear readers:",
      discription:
        "This is discription this is discription This is discription this is discription This is discription this is discription",
      time: "9.14-9.18 (GMT+8)",
      moreinfo: "Click Me and Learn More",
    },
  ];

  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.notificationContainer}>
        <View style={styles.notificationIcons}>
          <View>
            <TouchableOpacity onPress={()=> navigation.navigate("System")}>
            <FontAwesome5 style={styles.icon} name="bell" color="skyblue" />
            <Text style={styles.iconText}>System</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={()=> navigation.navigate("Comments")}>
            <AntDesign style={styles.icon} name="message1" color="#f46530" />
            <Text style={styles.iconText}>Comments</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={()=> navigation.navigate("Follow")}>
            <Ionicons
              style={styles.icon}
              name="person-add-outline"
              color="orange"
            />
            <Text style={styles.iconText}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.mainBody}>
        <View style={styles.bodyHeading}>
          <Text style={styles.headingText}> Activity Notifications</Text>
        </View>
        <View style={styles.cardContainer}>
          <View>
            {notificationCard.map((u, i) => {
              return (
                <View style={styles.cardMain} key={i}>
                  <View style={styles.cardTextContainer}>
                    <Text style={styles.cardtitle}>{u.title}</Text>
                    <Text style={styles.cardposttime}>{u.posttime}</Text>
                    <Text style={styles.cardDiscription}>{u.discription}</Text>
                    <View style={styles.validTime}>
                      <Text>Valid Time: </Text>
                      <Text style={styles.cardtime}>{u.time}</Text>
                    </View>
                    <TouchableOpacity>
                      <Text style={styles.cardmoreinfo}>{u.moreinfo}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    backgroundColor: "white",
  },
  notificationIcons: {
    justifyContent: "space-around",
    alignContent: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  icon: {
    alignSelf: "center",
    fontSize: 35,
  },
  iconText: {
    fontSize: 12,
    marginBottom: 5,
  },
  mainBody: {
    backgroundColor: "white",
    marginTop: 5,
  },
  bodyHeading: {
    paddingTop: 15,
    paddingLeft: 15,
  },
  headingText: { fontSize: 15, fontWeight: "bold" },
  cardContainer: {
    margin: 0,
    padding: 15,
  },
  cardMain: {
    marginBottom: 15,
    backgroundColor: "#F9F9F9",
  },
  cardTextContainer: {
    padding: 15,
  },
  cardtitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  cardposttime: {
    color: "lightgrey",
  },
  cardDiscription: {},
  validTime: {
    flexDirection: "row",
  },
  cardtime: {
    color: "red",
  },
  cardmoreinfo: {
    color: "blue",
    fontSize: 15,
    textDecorationLine: "underline",
  },
});
