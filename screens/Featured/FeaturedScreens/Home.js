import * as React from "react";
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
import { MaterialIcons, Fontisto } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import styles from "./HomeCss.js";
import ScreenModal from '../../../components/Modal';

const novel1 = require(`../../../assets/images/novel2.jpg`);
const novel2 = require(`../../../assets/images/novel2.jpg`);
const novel3 = require(`../../../assets/images/novel3.jpg`);
const novel4 = require(`../../../assets/images/novel4.jpg`);
export default function Home({ navigation }) {
  const cardData = [
    { id: "1", novelImage: novel1, title: "Novel Card 1" },
    { id: "4", novelImage: novel2, title: "Novel Card 2" },
    { id: "3", novelImage: novel3, title: "Novel Card 3" },
    { id: "2", novelImage: novel4, title: "Novel Card 4" },
    { id: "6", novelImage: novel1, title: "Novel Card 5" },
    { id: "5", novelImage: novel2, title: "Novel Card 6" },
  ];
  const renderCard = () => {
    return cardData.map((item, i) => (
      <View style={styles.bestNovelCard} key={item.id}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate("Details", { name: item.title });
          }}
        >
          <ImageBackground
            imageStyle={{ borderRadius: 5 }}
            source={item.novelImage}
            resizeMode="cover"
            style={styles.bestNovelCardImage}
          >
            <Text style={{ height: 150 }}></Text>
          </ImageBackground>
          <Text style={styles.bestNovelCardTitle}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    ));
  };
  const renderRankingCard = () => {
    return cardData.map((item, i) => (
      <View key={item.id} style={[styles.rankingCard]}>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details", { name: item.title });
          }}
        > */}

        <View style={styles.rankingCardLeft}>
          <Image source={item.novelImage} style={styles.rankingCardImage} />
        </View>
        <View style={styles.rankingCardRight}>
          <Text style={styles.rankingCardRightTitle}>{item.title}</Text>
          <Text style={styles.rankingCardRightDesc}>Ranking Card Desc</Text>
        </View>
        {/* </TouchableOpacity> */}
      </View>
    ));
  };
  const renderCategoryCard = ({ item }) => (
    <View style={styles.categoryCard} key={item.id}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate("More", { name: item.title });
        }}
      >
        <ImageBackground
          imageStyle={{ borderRadius: 5 }}
          source={item.novelImage}
          resizeMode="cover"
          style={styles.categoryCardImage}
        >
          <Text style={styles.categoryCardTitle}>News</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {/* <ScreenModal /> */}
      <View style={styles.container}>
        <View style={styles.container}>
          <Swiper
            style={styles.wrapper}
            autoplay={true}
            activeDotColor="#413ACA"
          >
            <ImageBackground
              imageStyle={{ opacity: 0.8 }}
              source={novel1}
              resizeMode="cover"
              style={{ height: 150 }}
            >
              <Text> </Text>
            </ImageBackground>
            <ImageBackground
              imageStyle={{ opacity: 0.8 }}
              source={novel4}
              resizeMode="cover"
              style={{ height: 150 }}
            >
              <Text> </Text>
            </ImageBackground>
            <ImageBackground
              imageStyle={{ opacity: 0.8 }}
              source={novel2}
              resizeMode="cover"
              style={{ height: 150 }}
            >
              <Text> </Text>
            </ImageBackground>
          </Swiper>

          {/* Best Novel */}
          <View style={styles.bestNovel}>
            <View style={styles.bestNovelTitleContainer}>
              <Text style={styles.bestNovelTitle}>NovelCat Best</Text>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.bestNovelTitleMore}
                onPress={() => {
                  navigation.navigate("More", { name: "NovelCat Best" });
                }}
              >
                <Text style={styles.bestNovelTitleMoreText}>More </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={styles.bestNovelTitleMoreIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.bestNovelCards}>{renderCard()}</View>
          </View>

          {/* Category Cards */}
          <View style={styles.categoryCards}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={cardData}
              renderItem={renderCategoryCard}
              keyExtractor={(item) => item.id}
              scrollIndicatorInsets={{ color: "white" }}
            />
          </View>

          {/* Live Ranking */}
          <View style={styles.liveRanking}>
            <View style={styles.bestNovelTitleContainer}>
              <Text style={styles.bestNovelTitle}>Live Ranking</Text>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.bestNovelTitleMore}
                onPress={() => {
                  navigation.navigate("More", { name: "Live Ranking" });
                }}
              >
                <Text style={styles.bestNovelTitleMoreText}>View All </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={styles.bestNovelTitleMoreIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.rankingCards}>{renderRankingCard()}</View>
          </View>

          {/* Banner */}
          <View style={styles.imageWrapper}>
            <ImageBackground
              source={require("../../../assets/images/banner.jpg")}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              style={styles.image}
            >
              <Text> </Text>
            </ImageBackground>
          </View>

          {/* Top Tags */}
          <View style={styles.topTagsContainer}>
            <Text style={styles.bestNovelTitle}>Top tags</Text>
            <View style={styles.topTags}>
              <Text style={styles.topTagsSingle}>CEO</Text>
              <Text style={styles.topTagsSingle}>fated</Text>
              <Text style={styles.topTagsSingle}>love-triangle</Text>
              <Text style={styles.topTagsSingle}>revenge</Text>
              <Text style={styles.topTagsSingle}>drama</Text>
              <Text style={styles.topTagsSingle}>sweet</Text>
              <Text style={styles.topTagsSingle}>bgx</Text>
              <Text style={styles.topTagsSingle}>dominant</Text>
              <Text style={styles.topTagsSingle}>lust</Text>
            </View>
          </View>

          {/* Editor's Favorite */}

          <View style={styles.editorFav}>
            <View style={styles.bestNovelTitleContainer}>
              <Text style={styles.bestNovelTitle}>Editor's Favorite</Text>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.bestNovelTitleMore}
                onPress={() => {
                  navigation.navigate("More", { name: "Editor's Favorite" });
                }}
              >
                <Text style={styles.bestNovelTitleMoreText}>More </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={styles.bestNovelTitleMoreIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.editorFavCards}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate("Details", { name: "Lustful Hearts" });
                }}
              >
                <View style={styles.editorFavCard}>
                  <View style={styles.editorFavCardLeft}>
                    <Image source={novel1} style={styles.editorFavCardImage} />
                  </View>
                  <View style={styles.editorFavCardRight}>
                    <Text style={styles.editorFavCardRightTitle}>
                      Lustful Hearts
                    </Text>
                    <Text
                      style={styles.editorFavCardRightDesc}
                      numberOfLines={3}
                    >
                      They say there's a fine line between love and lust. When
                      it comes in the form of a hot, tattood boy which has a
                      good enough physic and love to get hangout with him
                    </Text>
                    <View style={styles.editorFavCardRightRating}>
                      <Text style={styles.editorFavCardRightRatingTitle}>
                        General Romance
                      </Text>
                      <Text style={styles.editorFavCardRightRatingStar}>
                        <Fontisto name="star" style={styles.ratingIcon} /> 5.0
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.bestNovelCards}>{renderCard()}</View>
            </View>
          </View>

          {/* Your Picks */}

          <View style={styles.editorFav}>
            <View style={styles.bestNovelTitleContainer}>
              <Text style={styles.bestNovelTitle}>Your Picks</Text>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.bestNovelTitleMore}
                onPress={() => {
                  navigation.navigate("More", { name: "Your Picks" });
                }}
              >
                <Text style={styles.bestNovelTitleMoreText}>More </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={styles.bestNovelTitleMoreIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.editorFavCards}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate("Details", { name: "L.U.A.H.U" });
                }}
              >
                <View style={styles.editorFavCard}>
                  <View style={styles.editorFavCardLeft}>
                    <Image source={novel2} style={styles.editorFavCardImage} />
                  </View>
                  <View style={styles.editorFavCardRight}>
                    <Text style={styles.editorFavCardRightTitle}>
                      L.U.A.H.U
                    </Text>
                    <Text
                      style={styles.editorFavCardRightDesc}
                      numberOfLines={2}
                    >
                      They say there's a fine line between love and lust
                    </Text>
                    <View style={styles.editorFavCardRightRating}>
                      <Text style={styles.editorFavCardRightRatingTitle}>
                        General Romance
                      </Text>
                      <Text style={styles.editorFavCardRightRatingStar}>
                        <Fontisto name="star" style={styles.ratingIcon} /> 4.2
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate("Details", { name: "If the crown Fits" });
                }}
              >
                <View style={styles.editorFavCard}>
                  <View style={styles.editorFavCardLeft}>
                    <Image source={novel4} style={styles.editorFavCardImage} />
                  </View>
                  <View style={styles.editorFavCardRight}>
                    <Text style={styles.editorFavCardRightTitle}>
                      If the Crown Fits
                    </Text>
                    <Text
                      style={styles.editorFavCardRightDesc}
                      numberOfLines={2}
                    >
                      They say there's a fine line between love and lust. When
                      it comes in the form of a hot, tattood boy which has a
                      good enough physic and love to get hangout with him
                    </Text>
                    <View style={styles.editorFavCardRightRating}>
                      <Text style={styles.editorFavCardRightRatingTitle}>
                        Fantasy
                      </Text>
                      <Text style={styles.editorFavCardRightRatingStar}>
                        <Fontisto name="star" style={styles.ratingIcon} /> 5.0
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.bestNovelCards}>{renderCard()}</View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
