import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ScreenModal from "../../components/Modal";

const novel1 = require(`../../assets/images/novel1.jpg`);
const novel2 = require(`../../assets/images/novel2.jpg`);
const novel3 = require(`../../assets/images/novel3.jpg`);
const novel4 = require(`../../assets/images/novel4.jpg`);

export default function Library({ navigation }) {
  const initialState = [
    {
      id: "absownfign",
      title: "Don't Stop Kissing Me 1",
      image: novel1,
      desc: "Lorem ipsum ki jay ho the ka bbeeb asjjs",
      tag: "Billionaires",
    },
    {
      id: "absownfigasaaan",
      title: "Don't Stop Kissing Me 2",
      image: novel2,
      desc: "Lorem ipsum ki jay ho the ka bbeeb asjjs",
      tag: "Billionaires",
    },
    {
      id: "absowdfdf",
      title: "Don't Stop Kissing Me 3",
      image: novel3,
      desc: "Lorem ipsum ki jay ho the ka bbeeb asjjs",
      tag: "Billionaires",
    },
    {
      id: "aasfgtrtfigasaaan",
      title: "Don't Stop Kissing Me 4",
      image: novel4,
      desc: "Lorem ipsum ki jay ho the ka bbeeb asjjs",
      tag: "Billionaires",
    },
  ];
  const [cardData, setCardData] = useState(initialState);

  const renderCard = ({ item }) => (
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
          <Text style={styles.popularCardRightDesc}>{item.desc}</Text>
          <View style={styles.popularCardRightTagContainer}>
            <Text style={styles.popularCardRightTag}>{item.tag}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {/* <ScreenModal /> */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Library</Text>
          <View style={styles.headerIcons}>
            <MaterialCommunityIcons
              name="download-outline"
              style={[styles.headerIcon, styles.headerDownloadIcon]}
              size={24}
            />
            <MaterialCommunityIcons
              activeOpacity={0.9}
              onPress={() => navigation.navigate("ReadingHistory")}
              style={styles.headerIcon}
              name="menu-open"
              size={24}
            />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.imageWrapper}>
            <ImageBackground
              source={require("../../assets/images/banner.jpg")}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              style={styles.image}
            >
              <Text> </Text>
            </ImageBackground>
          </View>

          <View style={styles.noNovel}>
            <Entypo name="colours" style={styles.noNovelIcon} size={40} />
            <Text style={styles.noNovelText}>
              You have no novels in your library
            </Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate("Detail")}
            >
              <Text style={styles.noNovelLink}>Find a novel~</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.popular}>
            <Text style={styles.popularText}>Popular Reading</Text>
            <View style={styles.popularCards}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={cardData}
                renderItem={renderCard}
                keyExtractor={(item) => item.id}
                scrollIndicatorInsets={{ color: "white" }}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: "#fff",
  },

  //   Header Css
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  headerIcon: {
    color: "gray",
  },
  headerDownloadIcon: {
    paddingRight: 15,
  },

  //   Banner
  imageWrapper: {
    flex: 1,
    paddingVertical: 20,
    borderRadius: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 100,
    borderRadius: 10,
  },
  // Empty Novel List
  noNovel: {
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  noNovelIcon: {
    color: "#777",
    textAlign: "center",
  },
  noNovelText: {
    textAlign: "center",
    color: "#777",
  },
  noNovelLink: {
    textAlign: "center",
    color: "#413ACA",
  },
  //   Popular Card Css
  popular: {
    flex: 1,
  },
  popularText: {
    fontSize: 18,
    color: "#444",
    marginTop: 10,
    marginLeft: 5,
  },
  popularCards: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10,
  },
  popularCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 5,
    margin: 5,
    // borderColor: "red",
    // borderWidth: 1,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  popularLeft: {},
  popularCardImage: {
    height: 120,
    width: 80,
    // marginRight: 10,
    borderRadius: 5,
  },
  popularCardRight: {
    fontSize: 30,
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    maxWidth: 150,
  },
  popularCardRightTitle: {
    fontSize: 15,
  },
  popularCardRightDesc: {
    fontSize: 10,
    color: "#777",
  },
  popularCardRightTagContainer: {
    alignItems: "flex-start",
  },
  popularCardRightTag: {
    fontSize: 10,
    backgroundColor: "#99999999",
    borderRadius: 10,
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
});
