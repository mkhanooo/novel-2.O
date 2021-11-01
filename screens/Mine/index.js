import React, { useState, useEffect } from "react";
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
  MaterialCommunityIcons,
  EvilIcons,
  SimpleLineIcons,
  Feather,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-swiper";
import ScreenModal from "../../components/Modal";
import RatingModal from "./RatingModal/index";

const novel1 = require(`../../assets/images/novel1.jpg`);
const novel2 = require(`../../assets/images/novel2.jpg`);

export default function Mine({ navigation }) {
  const [ratingModal, setRatingModal] = useState(false);

  const childSetModal = (value) => {
    setRatingModal(value);
    console.log("called", value);
  };

  return (
    <View>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScreenModal />
      <RatingModal
        navigation={navigation}
        childSetModal={childSetModal}
        ratingModal={ratingModal}
      />
      <ScrollView>
        {/* Profile Section */}
        <View style={styles.profileWrapper}>
          <View style={styles.profileLeft}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfilePage")}
              style={{ flexDirection: "row" }}
            >
              <Image style={styles.profileImage} source={novel1} />
              <Text style={styles.profileName}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileRight}>
            <AntDesign name="questioncircle" style={styles.profileRightIcon} />
            <Text style={styles.profileRightText}>CHECK IN</Text>
          </View>
        </View>

        <View style={styles.sectionsWrapper}>
          {/* Balance Section */}
          <View style={styles.balanceWrapper}>
            <View style={styles.balanceTitle}>
              <Text style={styles.balanceTitleText}>
                Balance <AntDesign name="questioncircle" color="#999" />
              </Text>
            </View>
            <View>
              <View style={styles.balanceItemsWrapper}>
                <View style={styles.balanceItemWrapper}>
                  <View style={styles.balanceItemTop}>
                    <MaterialIcons
                      name="stars"
                      style={styles.balanceItemTopIcon}
                      color="#rgb(255,165,52)"
                    />
                    <Text style={styles.balanceItemValue}>0</Text>
                  </View>
                  <Text style={styles.balanceItemTopName}>Coins</Text>
                </View>
                <View style={styles.balanceItemWrapper}>
                  <View style={styles.balanceItemTop}>
                    <Entypo
                      name="bookmarks"
                      color="#e06614"
                      style={styles.balanceItemTopIcon}
                    />
                    <Text style={styles.balanceItemValue}>0</Text>
                  </View>
                  <Text style={styles.balanceItemTopName}>Vouchers</Text>
                </View>
                <View style={styles.balanceItemWrapper}>
                  <View style={styles.balanceItemTop}>
                    <FontAwesome5
                      name="gem"
                      color="#14bbe0"
                      style={styles.balanceItemTopIcon}
                    />
                    <Text style={styles.balanceItemValue}>0</Text>
                  </View>
                  <Text style={styles.balanceItemTopName}>Gems</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <LinearGradient
              colors={["#888", "#666", "#444"]}
              start={{ x: 1, y: 0.25 }}
              end={{ x: 0, y: 0.75 }}
              style={styles.primeWrapper}
            >
              <View style={styles.primeImageWrapper}>
                <Image
                  source={require("../../assets/splash2.png")}
                  style={styles.primeImage}
                />
              </View>
              <View style={styles.primeRightSection}>
                <View style={styles.primeTextWrapper}>
                  <Text
                    onPress={() => navigation.navigate("PrimeMembership")}
                    style={styles.primeTextPrime}
                  >
                    Prime
                  </Text>
                  <Text style={styles.primeTextVoucher}>
                    Daily Claim Vouchers
                  </Text>
                </View>
                <View style={styles.primeButtonWrapper}>
                  <Text
                    onPress={() => navigation.navigate("PrimeMembership")}
                    style={styles.primeButton}
                  >
                    Try Prime
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </View>

          {/* Double Section */}
          <View style={styles.doubleWrapper}>
            {/* Left Recharge */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.doubleLeftWrapper}
              onPress={() => navigation.navigate("Recharge")}
            >
              <View style={styles.doubleIconWrapper}>
                <MaterialCommunityIcons
                  name="folder-plus"
                  color="#ff6666"
                  style={styles.doubleIcon}
                />
              </View>
              <View style={styles.doubleTextWrapper}>
                <Text style={styles.doubleTextTitle}>Recharge</Text>
                <Text style={styles.doubleTextDesc}>Get more coins</Text>
              </View>
            </TouchableOpacity>
            {/* Right Reward */}
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.navigate("Rewards");
              }}
              style={styles.doubleRightWrapper}
            >
              <View style={styles.doubleIconWrapper}>
                <MaterialCommunityIcons
                  name="gift"
                  color="#rgb(255,165,52)"
                  style={styles.doubleIcon}
                />
              </View>
              <View style={styles.doubleTextWrapper}>
                <Text style={styles.doubleTextTitle}>Earn Rewards</Text>
                <Text style={styles.doubleTextDesc}>Get free vouchers</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Swiper */}
          <Swiper
            style={styles.swiperWrapper}
            autoplay={true}
            activeDotColor="#413ACA"
          >
            <ImageBackground
              imageStyle={{ opacity: 0.8 }}
              source={novel1}
              resizeMode="cover"
              style={{ height: 150 }}
            >
              <Text></Text>
            </ImageBackground>
            <ImageBackground
              imageStyle={{ opacity: 0.8 }}
              source={novel2}
              resizeMode="cover"
              style={{ height: 150 }}
            >
              <Text></Text>
            </ImageBackground>
          </Swiper>

          {/* History Section */}
          <View style={styles.historyWrapper}>
            <View style={styles.balanceItemsWrapper}>
              <View style={styles.balanceItemWrapper}>
                <View style={styles.balanceItemTop}>
                  <MaterialIcons
                    name="stars"
                    style={styles.balanceItemTopIcon}
                    color="#rgb(255,165,52)"
                    onPress={() => navigation.navigate("RechargeHistory")}
                  />
                </View>
                <Text
                  style={styles.balanceItemTopName}
                  onPress={() => navigation.navigate("RechargeHistory")}
                >
                  Recharge History
                </Text>
              </View>
              <View style={styles.balanceItemWrapper}>
                <View style={styles.balanceItemTop}>
                  <Entypo
                    name="bookmarks"
                    color="#e06614"
                    style={styles.balanceItemTopIcon}
                    onPress={() => navigation.navigate("MyUnlocked")}
                  />
                </View>
                <Text
                  style={styles.balanceItemTopName}
                  onPress={() => navigation.navigate("MyUnlocked")}
                >
                  My Unlocked
                </Text>
              </View>
              <View style={styles.balanceItemWrapper}>
                <View style={styles.balanceItemTop}>
                  <FontAwesome5
                    name="gem"
                    color="#14bbe0"
                    style={styles.balanceItemTopIcon}
                    onPress={() => navigation.navigate("VouchersHistory")}
                  />
                </View>
                <Text
                  style={styles.balanceItemTopName}
                  onPress={() => navigation.navigate("VouchersHistory")}
                >
                  Vouchers History
                </Text>
              </View>
            </View>
          </View>

          {/* setting options */}
          <View style={styles.settingOptions}>
            <TouchableOpacity
              onPress={() => navigation.navigate("BecomeWriter")}
              activeOpacity={0.7}
              style={styles.settingOption}
            >
              <View style={styles.settingOptionLeft}>
                <Feather name="edit" style={styles.settingOptionLeftIcon} />
                <Text style={styles.settingOptionLeftText}>Write My Story</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.MoreIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
              activeOpacity={0.7}
              style={styles.settingOption}
            >
              <View style={styles.settingOptionLeft}>
                <MaterialCommunityIcons
                  style={styles.settingOptionLeftIcon}
                  name="message-processing-outline"
                />
                <Text style={styles.settingOptionLeftText}>Notifications</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.MoreIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("LiveChat")}
              activeOpacity={0.7}
              style={styles.settingOption}
            >
              <View style={styles.settingOptionLeft}>
                <Feather
                  name="headphones"
                  style={styles.settingOptionLeftIcon}
                />
                <Text style={styles.settingOptionLeftText}>
                  Online Support Service
                </Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.MoreIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.settingOption}
              onPress={() => navigation.navigate("HelpCenter")}
            >
              <View style={styles.settingOptionLeft}>
                <SimpleLineIcons
                  name="envelope-letter"
                  style={styles.settingOptionLeftIcon}
                />
                <Text style={styles.settingOptionLeftText}>Help Center</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.MoreIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setRatingModal(!ratingModal)}
              style={styles.settingOption}
            >
              <View style={styles.settingOptionLeft}>
                <AntDesign
                  name="questioncircleo"
                  style={styles.settingOptionLeftIcon}
                />
                <Text style={styles.settingOptionLeftText}>Rating</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.MoreIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
              activeOpacity={0.7}
              style={styles.settingOption}
            >
              <View style={styles.settingOptionLeft}>
                <Feather name="share-2" style={styles.settingOptionLeftIcon} />
                <Text style={styles.settingOptionLeftText}>
                  Share with Friends
                </Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.MoreIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Setting")}
              activeOpacity={0.7}
              style={styles.settingOption}
            >
              <View style={styles.settingOptionLeft}>
                <Ionicons
                  name="settings-outline"
                  style={styles.settingOptionLeftIcon}
                />
                <Text style={styles.settingOptionLeftText}>Settings</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.MoreIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.plusiconbox}>
        <TouchableOpacity style={styles.plusicon} onPress={() => navigation.navigate("AddPost")}>
          <AntDesign name="pluscircle" size={50} color="#800000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Profile Section
  profileWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingBottom: 70,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileLeft: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    paddingVertical: 10,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  profileName: {
    marginTop: 20,
    fontSize: 20,
    marginLeft: 10,
    color: "#fff",
  },
  profileRight: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6666",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  profileRightIcon: {
    marginRight: 10,
    fontSize: 16,
    color: "#fff",
  },
  profileRightText: {
    fontSize: 16,
    color: "#fff",
  },

  sectionsWrapper: {
    // paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: -70,
  },
  // Balance Wrapper
  balanceWrapper: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  balanceTitle: {},
  balanceTitleText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  balanceItemsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  balanceItemWrapper: {},
  balanceItemTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  balanceItemTopIcon: {
    fontSize: 20,
  },
  balanceItemValue: {
    fontSize: 20,
    color: "#413ACA",
  },
  balanceItemTopName: {
    color: "#666",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: "700",
  },

  // Prime Wrapper
  primeWrapper: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  primeImageWrapper: {},
  primeImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  primeRightSection: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  primeTextWrapper: {},
  primeTextPrime: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },
  primeTextVoucher: {
    color: "#fff",
    fontSize: 12,
  },
  primeButtonWrapper: {},
  primeButton: {
    backgroundColor: "#f2f2f2",
    fontSize: 12,
    color: "#777",
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  // Double section
  doubleWrapper: {
    flex: 1,
    flexDirection: "row",
    // paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  doubleLeftWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginRight: 5,
    borderRadius: 10,
  },
  doubleIconWrapper: {
    marginRight: 5,
  },
  doubleIcon: {
    fontSize: 25,
  },
  doubleTextWrapper: {},
  doubleTextTitle: {
    fontWeight: "bold",
    fontSize: 12,
  },
  doubleTextDesc: {
    fontSize: 12,
  },
  doubleRightWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  // Swiper Section

  swiperWrapper: {
    height: 100,
    marginBottom: 20,
  },

  // History section
  historyWrapper: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  // setting options
  settingOptions: {
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 10,
    padding: 5,
  },
  settingOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  settingOptionLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settingOptionLeftIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  MoreIcon: {
    fontSize: 25,
    color: "#888",
  },
  plusiconbox: {

  },
  plusicon: {
    //borderWidth: 1,
    //borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 50,

    //backgroundColor: '#fff',
    //borderRadius: 120,
  },
});
