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
  FlatList,
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

export default function ReadingHistory({ navigation }) {
  const initialState = [
    {
      id: "absownfign",
      title: "Stop, Honey",
      image: novel1,
      date: "2 Sep, 2021 19:54:25",
      read: "1",
    },
    {
      id: "absownfigasaaan",
      title: "His Mission",
      image: novel2,
      date: "2 Sep, 2021 19:54:25",
      read: "3",
    },
    {
      id: "absowdfdf",
      title: "His Revenge",
      image: novel3,
      date: "2 Sep, 2021 19:54:25",
      read: "3",
    },
    {
      id: "aasfgtrtfigasaaan",
      title: "My Stepbrother",
      image: novel4,
      date: "2 Sep, 2021 19:54:25",
      read: "1",
    },
  ];
  const [cardData, setCardData] = useState(initialState);

  const renderCard = () => {
    return cardData.map((item) => (
      <TouchableOpacity
        activeOpacity={0.9}
        key={item.id}
        onPress={() => {
          navigation.navigate("Details", { name: item.title });
        }}
      >
        <View style={[styles.popularCard]}>
          <View style={styles.popularCardLeft}>
            <Image source={item.image} style={styles.popularCardImage} />
          </View>
          <View style={styles.popularCardRight}>
            <Text style={styles.popularCardRightTitle} numberOfLines={3}>
              {item.title}
            </Text>
            <Text style={styles.popularCardRightDesc}>{item.date}</Text>
            <View style={styles.popularCardRightTagContainer}>
              <Text style={styles.popularCardRightTag}>
                Read to: Chapter {item.read}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.popular}>
        <View style={styles.popularCards}>{renderCard()}</View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  //   Popular Card Css
  popular: {
    flex: 1,
    backgroundColor: "#fff",
  },
  popularText: {
    fontSize: 18,
    color: "#444",
    marginTop: 10,
    marginLeft: 5,
  },
  popularCards: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
    marginTop: 10,
  },
  popularCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 5,
    margin: 5,
  },
  popularLeft: {},
  popularCardImage: {
    height: 110,
    width: 80,
    // marginRight: 10,
    borderRadius: 5,
  },
  popularCardRight: {
    fontSize: 30,
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 10,
    maxWidth: 150,
  },
  popularCardRightTitle: {
    fontSize: 16,
  },
  popularCardRightDesc: {
    fontSize: 10,
    color: "#777",
  },
  popularCardRightTagContainer: {
    alignItems: "flex-start",
  },
  popularCardRightTag: {
    color: "#413ACA",
    fontWeight: "bold",
    paddingVertical: 3,
  },
});
