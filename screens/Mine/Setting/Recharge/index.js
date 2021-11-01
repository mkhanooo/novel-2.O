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

export default function Recharge() {
  const offer = [
    {
      title: "2100 Coins",
      discription: "Get 1050 Voucher for FREE",
      price: "US$4.99",
      tag: " First Charge Offer ",
    },
    {
      title: "1260 Coins",
      discription: "           ",
      price: "US$2.99",
    },
    {
      title: "4200 Coins",
      discription: "Get 4200 Voucher for FREE",
      price: "US$9.99",
      tag: " First Charge Offer ",
    },
    {
      title: "8400 Coins",
      discription: "Get 1200 Voucher for FREE",
      price: "US$19.99",
    },
    {
      title: "12600 Coins",
      discription: "Get 2000 Voucher for FREE",
      price: "US$29.99",
    },
    {
      title: "21000 Coins",
      discription: "Get 5000 Voucher for FREE",
      price: "US$49.99",
    },
  ];
  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.mainBody}>
        <View style={styles.uppertopBox}>
          <View style={styles.uppertagBox}>
            <Text style={styles.uppertagText}>hot</Text>
          </View>
          <View style={styles.innertextmainBox}>
            <View style={styles.leftsidetext}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                Daily Claim Vouchers
              </Text>
              <Text style={{ paddingTop: 7, color: "#6F94DA", fontSize: 15, }}>
                4200 Coins + 3000 Vouchers
              </Text>
            </View>
            <View style={styles.rightsidetext}>
              <Text
                style={{ fontWeight: "bold", color: "#828282", fontSize: 20 }}
              >
                US$9.99
              </Text>
              <Text style={{paddingLeft:8, paddingTop:1, color: "#6F94DA", fontSize: 12 }}>
                Learn More
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.topTextBox}>
          <Text style={styles.topText}>Current Payment Method</Text>
        </View>
        <View style={styles.playButtonBox}>
          <TouchableOpacity style={styles.playButton}>
            <View style={styles.playbuttonarea}>
              <AntDesign name="google" size={27} color="red" />
              <Text style={styles.playButtonText}>Google Play</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.topTextBox}>
          <Text style={styles.topText}>Select Top-up Amount</Text>
        </View>
        <View style={styles.mainBannerContainer}>
          <View>
            {offer.map((u, i) => {
              return (
                <View style={styles.bannerMainBox} key={i}>
                  {u.tag && (
                    <View style={styles.tagBox}>
                      <Text style={styles.tagText}>{u.tag}</Text>
                    </View>
                  )}
                  <View style={styles.bannerText}>
                    <Text style={styles.titleText}>{u.title}</Text>
                  </View>
                  <View style={styles.discriptionPriceTextBox}>
                    <Text style={styles.discriptionText}>{u.discription}</Text>
                    <Text style={styles.priceText}>{u.price}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.tipsTextBox}>
          <View style={styles.tipsText}>
            <Text style={styles.tips}>Tips</Text>
          </View>
          <View style={styles.tipsList}>
            <Text>
              1.If Coins do not arrive after purchase, click "Restore" and have
              a retry.
            </Text>
            <Text>
              2.Coins and Vouchers are available on NovelCat to unlock any
              novels you want.
            </Text>
            <View style={styles.tipsHelpCenter}>
              <Text>3.If you any other question,go to </Text>
              <TouchableOpacity>
                <Text style={styles.helpCenterText}>Help Center.</Text>
              </TouchableOpacity>
            </View>
            <Text>
              4.Coins and Vouchers are virtual items, we do not support refund.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    backgroundColor: "white",
  },
  uppertopBox: {
    height: 113,
    backgroundColor: "#F1F8FF",
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
    borderRadius:4,
  },
  uppertagBox: {
    backgroundColor: "#FD6602",
    position: "absolute",
    right: 0,
    top: 0,

    borderTopLeftRadius: 2,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 1,
    borderBottomLeftRadius: 15,
  },
  uppertagText: {
    fontSize: 10,
    padding: 4,
    color: "white",
    paddingLeft: 25,
    paddingRight: 25,
  },
  innertextmainBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 30,
  },
  leftsidetext: {},
  rightsidetext: {
    paddingTop:5,
  },
  topTextBox: {
    marginTop: 10,
    marginLeft: 16,
  },
  topText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  playButtonBox: {
    marginLeft: 16,
  },
  playButton: {
    borderColor: "#395697",
    backgroundColor: "white",
    width: 130,
    height: 50,
    borderRadius: 7,
    borderWidth: 2,
    marginTop: 10,
  },
  playbuttonarea: {
    marginTop: 5,
    flexDirection: "row",
    padding: 5,
  },
  playButtonText: {
    fontSize: 16,
    marginTop: 2,
  },
  mainBannerContainer: {},
  bannerMainBox: {
    backgroundColor: "#F7F8FC",
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#F7F8FC",
    borderRadius: 5,
    height: 55,
  },
  tagBox: {
    backgroundColor: "#FFD419",
    position: "absolute",
    right: 0,
    top: 0,

    borderTopLeftRadius: 2,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 1,
    borderBottomLeftRadius: 15,
  },
  tagText: {
    fontSize: 10,
    padding: 4,
    color: "white",
  },
  bannerText: {},
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
  discriptionPriceTextBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  discriptionText: {
    color: "#67A2EE",
    marginLeft: 5,
  },
  priceText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#88898D",
    marginRight: 15,
  },
  tipsTextBox: { marginTop: 5,
     marginLeft: 15,
     paddingBottom:15,},
  tips: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 3,
  },
  tipsList: {},
  tipsHelpCenter: {
    flexDirection: "row",
  },
  helpCenterText: {
    textDecorationLine: "underline",
    color: "#67A2EE",
  },
});
