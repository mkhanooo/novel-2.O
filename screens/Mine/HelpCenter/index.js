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

export default function HepCenter({navigation}) {
    
  const [copyright, setCopyright] = useState([]);
  const arr = [
    {
      id: `1`,
      title: `How does this app work?`,
      desc: `We provide both free and paid novels. All novels include free
      chapters for free chapters for free preview. Chapters of paid
      novels can be unlocked or purchased using Coins and Vouchers.`,
    },
    {
      id: `2`,
      title: `How to get Coins?`,
      desc: `We provide both free and paid novels. All novels include free
      chapters for free chapters for free preview. Chapters of paid
      novels can be unlocked or purchased using Coins and Vouchers.`,
    },
    {
      id: `3`,
      title: `What if I don't receive Coins after purchasing?`,
      desc: `We provide both free and paid novels. All novels include free
      chapters for free chapters for free preview. Chapters of paid
      novels can be unlocked or purchased using Coins and Vouchers.`,
    },
    {
      id: `4`,
      title: `Why the coins charged for each chapter are varied?`,
      desc: `We provide both free and paid novels. All novels include free
      chapters for free chapters for free preview. Chapters of paid
      novels can be unlocked or purchased using Coins and Vouchers.`,
    },
    {
      id: `5`,
      title: `What is the difference between Coins and Vouchers?`,
      desc: `We provide both free and paid novels. All novels include free
      chapters for free chapters for free preview. Chapters of paid
      novels can be unlocked or purchased using Coins and Vouchers.`,
    },
    {
      id: `6`,
      title: `How to get more Vouchers?`,
      desc: `We provide both free and paid novels. All novels include free
      chapters for free chapters for free preview. Chapters of paid
      novels can be unlocked or purchased using Coins and Vouchers.`,
    },
    {
      id: `7`,
      title: `How to check my Coins and Vouchers?`,
      desc: `We provide both free and paid novels. All novels include free
      chapters for free chapters for free preview. Chapters of paid
      novels can be unlocked or purchased using Coins and Vouchers.`,
    },
    {
      id: `8`,
      title: `How to get my purchased list?`,
      desc: `We provide both free and paid novels. All novels include free
      chapters for free chapters for free preview. Chapters of paid
      novels can be unlocked or purchased using Coins and Vouchers.`,
    },
  ];
  const renderList = () => {
    return arr.map((el, i) => (
      <View key={el.id}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setCopyright((oldCopyright) => ({
              ...oldCopyright,

              [i]: !oldCopyright[i],
            }));
          }}
        >
          <View style={styles.contentsHeader}>
            <Text style={styles.detailBodyIntroTitle}>
              {el.id}. How does this app work?
            </Text>
            <Text style={styles.contentsChapters}>
              <MaterialIcons
                style={styles.contentsChaptersIcon}
                name="keyboard-arrow-down"
              />
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          {copyright[i] ? (
            <View style={styles.copyright}>
              <Text style={styles.copyrightDesc}>
                We provide both free and paid novels. All novels include free
                chapters for free chapters for free preview. Chapters of paid
                novels can be unlocked or purchased using Coins and Vouchers.
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    ));
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView>
        <View style={styles.body}>
          <Text style={styles.helpHeading}>Help Center</Text>
          {renderList()}
        </View>
      </ScrollView>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('LoginScreen')}>
          <Text style={styles.feedbackButton}>To Submit a feedback</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: "5%",
  },
  helpHeading: {
    paddingVertical: "5%",
    fontWeight: "bold",
    fontSize: 16,
  },
  contentsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    paddingVertical: "5%",
  },
  detailBodyIntroTitle: {
    fontWeight: "bold",
  },

  // Copyright information
  copyright: {
    paddingVertical: 10,
  },
  copyrightDesc: {
    color: "#777",
  },

  // Report Section
  reportContainer: {
    flex: 1,
    marginVertical: 10,
    justifyContent: "center",
  },
  reportButton: {
    color: "#999",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#555",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },

  //   content
  contentsChaptersIcon: {
    fontSize: 20,
    color: "#777",
  },
  feedbackButton:{
      backgroundColor: '#413ACA',
      color: '#fff',
      paddingVertical: '4%',
      textAlign: 'center',
      fontSize: 18
  },
});
