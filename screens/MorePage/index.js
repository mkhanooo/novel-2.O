import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const novel1 = require(`../../assets/images/novel1.jpg`);
const novel2 = require(`../../assets/images/novel2.jpg`);
const novel3 = require(`../../assets/images/novel3.jpg`);
const novel4 = require(`../../assets/images/novel4.jpg`);

export default function MorePage({ navigation }) {
  const arr = [
    {
      id: "1",
      novelImage: novel1,
      title: "Saving Mr President",
      tag: "General Romance",
    },
    {
      id: "4",
      novelImage: novel2,
      title: "The Romance of Mr. Popular",
      tag: "General Romance",
    },
    {
      id: "3",
      novelImage: novel3,
      title: "Be Your Exclusive Princess",
      tag: "Billionaire",
    },
    {
      id: "2",
      novelImage: novel4,
      title: "The Girl with Lycan Blood",
      tag: "General Romance",
    },
    {
      id: "6",
      novelImage: novel1,
      title: "My Second Love",
      tag: "Billionaire",
    },
    {
      id: "5",
      novelImage: novel2,
      title: "The Vampire's Mate",
      tag: "Vampire",
    },
  ];

  const renderCards = () => {
    return arr.map((el, i) => {
      return (
        <View style={styles.editorFavCard} key={el.id}>
          <View style={styles.editorFavCardLeft}>
            <Image source={el.novelImage} style={styles.editorFavCardImage} />
          </View>
          <View style={styles.editorFavCardRight}>
            <Text style={styles.editorFavCardRightTitle} numberOfLines={1}>
              {el.title}
            </Text>
            <Text style={styles.editorFavCardRightDesc} numberOfLines={3}>
              They say there's a fine line between love and lust. When it comes
              in the form of a hot, tattood boy which has a good enough physic
              and love to get hangout with him
            </Text>
            <View style={styles.editorFavCardRightRating}>
              <Text style={styles.editorFavCardRightRatingTitle}>{el.tag}</Text>
            </View>
          </View>
        </View>
      );
    });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {/* Editor's Favorite */}

      <View style={styles.editorFav}>
        <View style={styles.editorFavCards}>{renderCards()}</View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  // editors favorite
  editorFavCards: {},
  editorFavCard: {
    flexDirection: "row",
    flexBasis: "100%",
    marginHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  editorFavLeft: {},
  editorFavCardImage: {
    height: 130,
    width: 90,
    marginRight: 5,
    borderRadius: 5,
  },
  editorFavCardRight: {
    flex: 1,
    fontSize: 30,
    paddingHorizontal: 3,
    alignContent: "space-around",
    justifyContent: "space-around",
  },
  editorFavCardRightTitle: {
    fontSize: 15,
    color: "#000",
    flexWrap: "wrap",
  },
  editorFavCardRightDesc: {
    color: "#888",
    fontSize: 12,
    flexWrap: "wrap",
  },
  editorFavCardRightRating: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  editorFavCardRightRatingTitle: {
    color: "#413ACA",
    fontSize: 12,
  },
  editorFavCardRightRatingStar: {
    alignItems: "center",
    color: "#000",
    fontSize: 12,
  },
  ratingIcon: {
    fontSize: 15,
    color: "rgba(255,165,52,0.9)",
  },
});
