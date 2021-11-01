import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./HomeCss.js";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const novel1 = require(`../../../assets/images/novel1.jpg`);
const novel2 = require(`../../../assets/images/novel2.jpg`);
const novel3 = require(`../../../assets/images/novel3.jpg`);
const novel4 = require(`../../../assets/images/novel4.jpg`);

export default function Genres({ navigation }) {
  const cardData = [
    { id: "1", novelImage: novel1, title: "Romance" },
    { id: "4", novelImage: novel2, title: "History" },
    { id: "3", novelImage: novel3, title: "Xuan Huan" },
    { id: "2", novelImage: novel4, title: "Modern" },
    { id: "6", novelImage: novel2, title: "Horror" },
    { id: "5", novelImage: novel1, title: "Sci-fi" },
    { id: "7", novelImage: novel3, title: "Billionaires" },
    { id: "8", novelImage: novel4, title: "Fantasy" },
    { id: "9", novelImage: novel2, title: "Literature" },
  ];
  const renderCard = () => {
    return cardData.map((item, i) => (
      <View style={styles.bestNovelCard} key={item.id}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate("More", { name: item.title });
          }}
        >
          <ImageBackground
            source={item.novelImage}
            resizeMode="cover"
            style={styles.bestNovelCardImage}
          >
            <Text style={{ height: 130 }}></Text>
          </ImageBackground>
          <Text style={(styles.bestNovelCardTitle, { textAlign: "center" })}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.bestNovel}>
          <View style={styles.body}>
            <View style={styles.bestNovelCards}>{renderCard()}</View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// const styles = StyleSheet.create({});
