import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
  Modal,
  Button,
  StatusBar,
} from "react-native";
import {
  Entypo,
  MaterialIcons,
  FontAwesome5,
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
  FontAwesome,
  EvilIcons,
} from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabDetail from "./Profiletabscreen/tabDetail";

export default function ProfilePage() {
  const Tab = createMaterialTopTabNavigator();
  const profileData = {
    name: "Md Khan",
    title: "Aussie Blogger with 500M",
    hobby: "Views | Self-Help | Money | Writing",
    img: "https://i.ibb.co/tpQtTTZ/1.png",
    follwers: "6,012 followers .",
    follwing: " 61 following",
    profiledesc:
      "Join my private mail list 50K+ smart people for more helpful by going here:",
    website: " https://www.timdenning.com ",
    credential: "Credentials & Highlights",
    profession: "Badass Enterpreneur & Writer",
    professiontime: "2021-present",
    address: "Live in Melbourne, Victoria, Australia",
    views: "10M content views",
    currentviews: "5.8M  this month",
    activespaces: "Active in 3 Spaces",
    joindate: "Joined December 2014",
  };
  const spacesdata = [
    {
      title: "Simplify Your Life",
      admin: "admin",
      items: "172 items",
      img: "https://i.ibb.co/tpQtTTZ/1.png",
    },
    {
      title: "Tim Denning",
      admin: "admin",
      items: "16 items",
      img: "https://i.ibb.co/VxJ4Jng/7e627fe40fe1a528ae6fcf235bafc989-0.jpg",
    },
    {
      title: "Tim Denning's Posts",
      admin: "admin",
      items: "",
      img: "https://i.ibb.co/SXJkH4G/Screenshot-10.png",
    },
  ];
  const buttondata = [
    {
      bname: "Profile",
    },
    {
      bname: "Answers",
      num: "167",
    },
    {
      bname: "Questions",
      num: "3",
    },
    {
      bname: "Posts",
      num: "290",
    },
    {
      bname: "Following",
    },
  ];
  const moreoption = [
    {
      option: "Edit",
    },
    {
      option: "Delete",
    },
    {
      option: "Answer Later",
    },
    {
      option: "Share",
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [active, setActive] = useState("Profile");
  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.mainbody}>
        <View style={styles.mainprofilebox}>
          <View style={styles.profilebox}>
            <View style={styles.imgbox}>
              <Image style={styles.img} source={{ uri: profileData.img }} />
            </View>
            <View style={styles.profiledatatxtbox}>
              <Text style={{ fontWeight: "bold" }}>{profileData.name}</Text>
              <Text style={{ fontWeight: "600" }}>{profileData.title}</Text>
              <Text style={{ fontWeight: "600" }}>{profileData.hobby}</Text>
              <Text style={{ fontSize: 12, color: "grey" }}>
                {profileData.follwers}
                {profileData.follwing}
              </Text>
            </View>
          </View>
          <View style={styles.profiledescbox}>
            <Text style={{ color: "grey" }}>
              {profileData.profiledesc}
              <Text style={styles.profiledexweb}>{profileData.website}</Text>
            </Text>
          </View>
          <View style={styles.upericonbox}>
            <View>
              <TouchableOpacity>
                <AntDesign style={styles.icon} name="adduser" color="grey" />
                <Text style={styles.iconText}>Follow</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <FontAwesome5 style={styles.icon} name="bell" color="grey" />
                <Text style={styles.iconText}>Notify me</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <MaterialIcons
                  style={styles.icon}
                  name="people-outline"
                  color="grey"
                />
                <Text style={styles.iconText}>Ask</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <TouchableWithoutFeedback
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>
                <View style={styles.modalmainbox}>
                  {moreoption.map((items, i) => {
                    return (
                      <View style={{ backgroundColor: "white" }} key={i}>
                        <TouchableOpacity style={styles.deletebutton}>
                          <Text>{items.option}</Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
              </Modal>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Entypo
                  style={styles.icon}
                  name="dots-three-horizontal"
                  color="grey"
                />
                <Text style={styles.iconText}>More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.credentialbox}>
          <Text style={{ fontWeight: "bold" }}>{profileData.credential}</Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", color: "grey" }}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.highlightsbox}>
          <View style={styles.professionbox}>
            <MaterialCommunityIcons
              style={styles.iconstylebox}
              name="briefcase-variant-outline"
              size={20}
              color="grey"
            />
            <Text style={{ paddingLeft: 5, paddingTop: 11 }}>
              {profileData.profession}
            </Text>
            <Text style={{ color: "grey", paddingLeft: 7, paddingTop: 11 }}>
              {profileData.professiontime}
            </Text>
          </View>
          <View style={styles.professionbox}>
            <Ionicons
              style={styles.iconstylebox}
              name="location-outline"
              size={20}
              color="grey"
            />
            <Text style={{ paddingLeft: 5, paddingTop: 11 }}>
              {profileData.address}
            </Text>
          </View>
          <View style={styles.professionbox}>
            <AntDesign
              style={styles.iconstylebox}
              name="eyeo"
              size={20}
              color="grey"
            />
            <Text style={{ paddingLeft: 5, paddingTop: 11 }}>
              {profileData.views}
            </Text>
            <Text style={{ color: "grey", paddingLeft: 7, paddingTop: 11 }}>
              {profileData.currentviews}
            </Text>
          </View>
          <View style={styles.professionbox}>
            <Ionicons
              style={styles.iconstylebox}
              name="people-outline"
              size={20}
              color="grey"
            />
            <Text style={{ paddingLeft: 5, paddingTop: 11 }}>
              {profileData.activespaces}
            </Text>
          </View>
          <View style={styles.professionbox}>
            <Feather
              style={styles.iconstylebox}
              name="calendar"
              size={20}
              color="grey"
            />
            <Text style={{ paddingLeft: 5, paddingTop: 11, paddingBottom: 10 }}>
              {profileData.joindate}
            </Text>
          </View>
        </View>
        <View style={styles.spacestxt}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              paddingLeft: 20,
              paddingTop: 3,
              paddingBottom: 8,
            }}
          >
            Spaces
          </Text>
        </View>
        <View style={styles.spacesmainbox}>
          {spacesdata.map((items, i) => {
            return (
              <View style={styles.spacesbox} key={i}>
                <View style={styles.spaceimgbox}>
                  <Image style={styles.spaceimg} source={{ uri: items.img }} />
                </View>
                <View style={styles.spacesdatatxt}>
                  <Text style={{ fontWeight: "bold" }}>{items.title}</Text>
                  <Text style={{ color: "grey" }}>
                    {items.admin}

                    <Text> {items.items}</Text>
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.tabnavmainbox}>
          <ScrollView
            style={styles.tabnavbuttonbox}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {buttondata.map((items, k) => {
              return (
                <TouchableOpacity
                  onPress={() => setActive(items.bname)}
                  style={styles.navbutton}
                  key={k}
                >
                  <Text style={styles.buttonnavtxt}>{items.bname}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.lowerprofile}>
          {active === "Profile" && <TabDetail name={"Profile"} />}
          {active === "Answers" && <TabDetail name={"Answers"} />}
          {active === "Questions" && <TabDetail name={"Questions"} />}
          {active === "Posts" && <TabDetail name={"Posts"} />}
          {active === "Following" && <TabDetail name={"Following"} />}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainbody: {},
  mainprofilebox: {
    backgroundColor: "white",
  },
  profilebox: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  imgbox: {
    width: 80,
    marginTop: 20,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 100,
  },
  profiledatatxtbox: {
    marginTop: 10,
    paddingTop: 5,
  },
  profiledescbox: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 10,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
  profiledexweb: {
    color: "#195B9E",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  upericonbox: {},
  upericonbox: {
    justifyContent: "space-around",
    alignContent: "center",
    flexDirection: "row",
    marginTop: 15,
    marginRight: 10,
    marginLeft: 10,
  },
  icon: {
    alignSelf: "center",
    fontSize: 20,
  },
  iconText: {
    fontSize: 12,
    marginBottom: 5,
  },

  credentialbox: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 5,
    paddingBottom: 5,
    paddingTop: 5,
  },
  highlightsbox: {
    backgroundColor: "white",
    marginTop: 1,
  },
  professionbox: {
    flexDirection: "row",
  },
  iconstylebox: {
    width: 30,
    height: 30,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    marginLeft: 15,
    marginTop: 5,
    paddingTop: 4,
    paddingLeft: 4.8,
  },
  threedotsbox: {},
  threedots: {
    paddingRight: 8,
    paddingTop: 4,
  },
  modalmainbox: {
    height: "auto",
    marginTop: "auto",
    marginBottom: 3,
    backgroundColor: "white",
  },
  deletebutton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderWidth: 0.3,
    borderColor: "lightgrey",
    // borderRadius: 4,
    // elevation: 3,
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0)",
  },
  spacestxt: {
    backgroundColor: "white",

    marginTop: 5,
  },
  spacesmainbox: {},
  spacesbox: {
    marginTop: 1,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "white",
    flexDirection: "row",
  },
  spaceimgbox: {
    paddingLeft: 15,
  },
  spaceimg: {
    height: 50,
    width: 50,
    borderRadius: 15,
  },
  spacesdatatxt: {
    paddingLeft: 10,
    paddingTop: 5,
  },
  tabnavmainbox: {
    marginTop: 5,
    backgroundColor: "white",
    paddingRight: 10,
  },
  tabnavbuttonbox: {},
  navbutton: {
    paddingLeft: 15,
    paddingTop: 10,

    paddingBottom: 5,
  },
  buttonnavtxt: {
    fontWeight: "bold",
    fontSize: 15,
    color: "grey",
  },
});
