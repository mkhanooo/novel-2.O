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

const novel1 = require(`../../../assets/images/novel1.jpg`);
const novel2 = require(`../../../assets/images/novel2.jpg`);
const novel3 = require(`../../../assets/images/novel3.jpg`);
const novel4 = require(`../../../assets/images/novel4.jpg`);

export default function Main() {
  const initialState = [
    {
      id: "absownfign",
      title: "Multiple Gifts offers for new users",
      image: novel1,
    },
    {
      id: "absownfigasaaan",
      title: "Free Appointment",
      image: novel2,
    },
    {
      id: "absowdfdf",
      title: "Reading Rewards",
      image: novel3,
    },
    {
      id: "aasfgtrtfigasaaan",
      title: "Multiple Gifts offers for new users",
      image: novel4,
    },
  ];
  const [cardData, setCardData] = useState(initialState);

  const renderCard = () => {
    return cardData.map((item) => {
      return (
        <View style={styles.card} key={item.id}>
          <ImageBackground style={styles.cardBackImage} source={item.image}>
            <View style={styles.cardTagWrapper}>
              <Text style={styles.cardTag}>Ongoing</Text>
            </View>
          </ImageBackground>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardExpiry}>Expire on 15 Sep 2021</Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View>
      <StatusBar></StatusBar>
      <ScrollView>
        <View style={styles.curve}>
          <Text></Text>
        </View>
        <View style={styles.container}>
          <View style={styles.cards}>{renderCard()}</View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  curve: {
    backgroundColor: "rgba(65, 58, 202, 1)",
    paddingBottom: 70,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: -70,
  },
  card: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 5,
    marginVertical: 10,
  },
  cardBackImage: {
    width: "100%",
    height: 150,
  },
  cardTagWrapper: {
    alignItems: "flex-start",
  },
  cardTag: {
    backgroundColor: "#ff5959",
    paddingVertical: 5,
    paddingHorizontal: 15,
    color: "#fff",
    borderBottomRightRadius: 20,
  },
  cardTextContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  cardExpiry: {
    color: "#555",
  },
});
