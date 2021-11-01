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
import { MaterialIcons, Feather,AntDesign } from "@expo/vector-icons";
import styles from "./RankingCss";

const novel1 = require(`../../../assets/images/novel1.jpg`);
const novel2 = require(`../../../assets/images/novel2.jpg`);
const novel3 = require(`../../../assets/images/novel3.jpg`);
const novel4 = require(`../../../assets/images/novel4.jpg`);

export default function Ranking({ navigation }) {
  const cardData = [
    { id: "1", novelImage: novel1, title: 'The Alpha Kinkg"s Hated Story' },
    { id: "4", novelImage: novel2, title: "Submitting to My Mate" },
    { id: "3", novelImage: novel3, title: "My Stepbrother" },
    { id: "2", novelImage: novel4, title: "Never Getting Enough of Her" },
    { id: "6", novelImage: novel1, title: "Begin Again" },
    {
      id: "5",
      novelImage: novel2,
      title: "Infuated wuth My Mysterio lives along",
    },
  ];
  const renderCard = ({ item }) => (
    <View style={styles.bestNovelCard} key={item.id}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate("Details", { name: item.title });
        }}
      >
        <ImageBackground
          imageStyle={{ borderRadius: 7 }}
          source={item.novelImage}
          resizeMode="cover"
          style={styles.bestNovelCardImage}
        >
          <Text style={{ height: 120 }}></Text>
        </ImageBackground>
        <Text style={styles.bestNovelCardTitle} numberOfLines={2}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.rankingBack}>
          <ScrollView>
            <View style={styles.bestNovel}>
              <View style={styles.bestNovelTitleContainer}>
                <Text style={styles.bestNovelTitle}>Weekly Hot</Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.bestNovelTitleMore}
                  onPress={() => {
                    navigation.navigate("More", { name: "Weekly hot" });
                  }}
                >
                  <Text style={styles.bestNovelTitleMoreText}>More </Text>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    style={styles.bestNovelTitleMoreIcon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.bestNovelCards}>
                <ScrollView horizonta={true}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={cardData}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                    scrollIndicatorInsets={{ color: "white" }}
                  />
                </ScrollView>
              </View>
            </View>
            <View style={styles.bestNovel}>
              <View style={styles.bestNovelTitleContainer}>
                <Text style={styles.bestNovelTitle}>Reward Ranking</Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.bestNovelTitleMore}
                  onPress={() => {
                    navigation.navigate("More", { name: "Reward Ranking" });
                  }}
                >
                  <Text style={styles.bestNovelTitleMoreText}>More </Text>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    style={styles.bestNovelTitleMoreIcon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.bestNovelCards}>
                <ScrollView horizonta={true}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={cardData}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                    scrollIndicatorInsets={{ color: "white" }}
                  />
                </ScrollView>
              </View>
            </View>
            <View style={styles.bestNovel}>
              <View style={styles.bestNovelTitleContainer}>
                <Text style={styles.bestNovelTitle}>Popular Stories</Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.bestNovelTitleMore}
                  onPress={() => {
                    navigation.navigate("More", { name: "Popular Stories" });
                  }}
                >
                  <Text style={styles.bestNovelTitleMoreText}>More </Text>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    style={styles.bestNovelTitleMoreIcon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.bestNovelCards}>
                <ScrollView horizonta={true}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={cardData}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                    scrollIndicatorInsets={{ color: "white" }}
                  />
                </ScrollView>
              </View>
            </View>
            <View style={styles.bestNovel}>
              <View style={styles.bestNovelTitleContainer}>
                <Text style={styles.bestNovelTitle}>Daily Trending</Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.bestNovelTitleMore}
                  onPress={() => {
                    navigation.navigate("More", { name: "Daily Trending" });
                  }}
                >
                  <Text style={styles.bestNovelTitleMoreText}>More </Text>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    style={styles.bestNovelTitleMoreIcon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.bestNovelCards}>
                <ScrollView horizonta={true}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={cardData}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                    scrollIndicatorInsets={{ color: "white" }}
                  />
                </ScrollView>
              </View>
            </View>
            <View style={styles.bestNovel}>
              <View style={styles.bestNovelTitleContainer}>
                <Text style={styles.bestNovelTitle}>Rising Novels</Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.bestNovelTitleMore}
                  onPress={() => {
                    navigation.navigate("More", { name: "Rising Novels" });
                  }}
                >
                  <Text style={styles.bestNovelTitleMoreText}>More </Text>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    style={styles.bestNovelTitleMoreIcon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.bestNovelCards}>
                <ScrollView horizonta={true}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={cardData}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                    scrollIndicatorInsets={{ color: "white" }}
                  />
                </ScrollView>
              </View>
            </View>
            <View style={styles.bestNovel}>
              <View style={styles.bestNovelTitleContainer}>
                <Text style={styles.bestNovelTitle}>
                  WereWolf Contest Nominee
                </Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.bestNovelTitleMore}
                  onPress={() => {
                    navigation.navigate("More", {
                      name: "WareWolf Contest Nominee",
                    });
                  }}
                >
                  <Text style={styles.bestNovelTitleMoreText}>More </Text>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    style={styles.bestNovelTitleMoreIcon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.bestNovelCards}>
                <ScrollView horizonta={true}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={cardData}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                    scrollIndicatorInsets={{ color: "white" }}
                  />
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
