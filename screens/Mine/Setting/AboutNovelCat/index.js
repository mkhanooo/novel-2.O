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
  Linking,
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
} from "@expo/vector-icons";
import { Dimensions } from "react-native";

const window = Dimensions.get("screen");
const logo = require("../../../../assets/foodie.png");

export default function AboutNovelCat({ navigation }) {
  const [date, setDate] = useState(new Date().getFullYear());
  return (
    <View style={styles.pageWrapper}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.header}>
        <Feather
          name="arrow-left"
          style={styles.headerIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>About NovelCat</Text>
      </View>
      <View style={styles.bodyWrapper}>
        {/* Top Logo Section */}
        <View style={styles.logo}>
          <Image style={styles.logoImage} source={logo} />
          <Text style={styles.logoText}>Ver 2.1.3 build d5411578</Text>
        </View>

        {/* Center Buttons */}
        <View style={styles.modalView}>
          <View style={[styles.buttonBorder, styles.buttonWidth]}>
            <TouchableOpacity activeOpacity={0.7} style={styles.cacheButton} onPress={() => navigation.navigate('Terms')}>
              <Text style={styles.settingButton}>Terms of Services</Text>
              <AntDesign name="right" />
            </TouchableOpacity>
          </View>
          <View style={[styles.buttonBorder, styles.buttonWidth]}>
            <TouchableOpacity activeOpacity={0.7} style={styles.cacheButton} onPress={() => navigation.navigate('Privacy')}>
              <Text style={styles.settingButton}>Privacy Policy</Text>
              <AntDesign name="right" />
            </TouchableOpacity>
          </View>
          <View style={[styles.buttonBorder, styles.buttonWidth]}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.cacheButton}
              onPress={() => Linking.openURL("mailto:business@novelcat.com")}
            >
              <View style={{ paddingVertical: 15 }}>
                <Text style={[styles.settingButton, { paddingVertical: 0 }]}>
                  Copyright Business Email
                </Text>
                <Text style={styles.settingEmail}>business@novelcat.com</Text>
              </View>
              <AntDesign name="right" />
            </TouchableOpacity>
          </View>
        </View>

        {/* BottomCopyRight */}
        <View style={styles.bottom}>
          <Text style={styles.bottomCopyright}>
            Copyright <AntDesign name="copyright" />
            {date} NovelCat
          </Text>
          <Text style={styles.bottomRights}>All Rights Reserved</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageWrapper: {
    minHeight: window.height - 50,
    maxHeight: window.height - 50,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 50,
    paddingHorizontal: "5%",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },
  headerIcon: {
    fontSize: 22,
    color: "#777",
  },
  bodyWrapper: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "10%",
  },

  // top

  logo: {
    // paddingTop: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "800",
  },

  // Center Buttons
  modalView: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },
  cacheButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cacheValue: {
    color: "#413ACA",
    fontWeight: "bold",
  },
  buttonWidth: {
    width: "100%",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  buttonBorder: {
    borderTopColor: "rgba(0,0,0,0.1)",
    borderTopWidth: 1,
  },
  settingButton: {
    paddingVertical: 15,
    fontSize: 15,
    textAlign: "left",
    color: "#333",
  },
  settingEmail: {
    color: "#999",
  },

  // Bottom
  bottom: {},
  bottomCopyright: {
    color: "#999",
    textAlign: "center",
  },
  bottomRights: {
    color: "#999",
    textAlign: "center",
  },
});
