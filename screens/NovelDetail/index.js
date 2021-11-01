import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import {
  MaterialIcons,
  AntDesign,
  Fontisto,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const novel1 = require(`../../assets/images/novel2.jpg`);
const novel2 = require(`../../assets/images/novel2.jpg`);
const novel3 = require(`../../assets/images/novel3.jpg`);
const novel4 = require(`../../assets/images/novel4.jpg`);

export default function Detail({ navigation, route }) {
  const [showText, setShowText] = useState(false);
  const [copyright, setCopyright] = useState(false);

  const cardData = [
    { id: "1", novelImage: novel1, title: "Novel Card 1" },
    { id: "4", novelImage: novel2, title: "Novel Card 2" },
    { id: "3", novelImage: novel3, title: "Novel Card 3" },
    { id: "2", novelImage: novel4, title: "Novel Card 4" },
    { id: "6", novelImage: novel1, title: "Novel Card 5" },
    { id: "5", novelImage: novel2, title: "Novel Card 6" },
  ];

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
          <Text numberOfLines={2} style={styles.rankingCardRightTitle}>
            {item.title}
          </Text>
          <Text style={styles.rankingCardRightDesc}>
            <Fontisto name="star" style={styles.ratingIcon} /> 5.0
          </Text>
        </View>
        {/* </TouchableOpacity> */}
      </View>
    ));
  };

  const renderCategoryCard = ({ item }) => (
    <View style={styles.tagsCard} key={item.id}>
      <View style={styles.tagsCardContainer}>
        <Text style={styles.tagsCardText}>Billionaires</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        
        barStyle="light-content"
      />
      <View style={styles.headerStatic}>
        <Feather
          name="arrow-left"
          style={styles.headerIcon}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.headerIcons}>
          <Ionicons
            style={[styles.headerIcon, styles.headerDownloadIcon]}
            name="md-flag-sharp"
          />
          <FontAwesome name="share-square-o" style={styles.headerIcon} />
        </View>
      </View>
      <ScrollView
      // contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.detailContainer}>
          <View style={styles.detailHeader}>
            <View style={styles.detailNovelTitle}>
              <Image
                style={styles.detailNovelTitleImage}
                source={require("../../assets/images/novel1.jpg")}
              />
              <Text style={styles.detailNovelTitleText}>
                The Secret Necklace
              </Text>
            </View>
          </View>
          <View style={styles.detailBody}>
            <View style={styles.detailbodyFirstContainer}>
              <View style={styles.detailBodyRight}>
                <View style={styles.detailBodyRightAuthor}>
                  <Text>Author:</Text>
                  <TouchableOpacity activeOpacity={0.9}>
                    <View style={styles.detailBodyRightAuthorName}>
                      <Text numberOfLines={1}> Entri eieie</Text>
                      <MaterialIcons name="keyboard-arrow-right" />
                    </View>
                  </TouchableOpacity>
                </View>
                <Text style={styles.detailBodyRightCategory}>
                  General Romance
                </Text>
                <Text style={styles.detailBodyRightCompleted}>Completed</Text>
                <Text style={styles.detailBodyRightStars}>
                  <Fontisto name="star" style={styles.ratingIcon} />
                  <Fontisto name="star" style={styles.ratingIcon} />
                  <Fontisto name="star" style={styles.ratingIcon} />
                  <Fontisto name="star" style={styles.ratingIcon} />
                  <Fontisto name="star" />
                </Text>
              </View>
              <Text style={styles.detailBodyDisclaimer}>
                The content and images uploaded by the authors and users only
                and supoprt their personal opinions, does not represent
                NodelCat's position.
                <Text style={styles.detailBodyDisclaimerReport}>Report</Text>
              </Text>
              <View style={styles.detailBodyIntro}>
                <Text style={styles.detailBodyIntroTitle}>Introduction</Text>
                <Text
                  style={styles.detailBodyIntroDesc}
                  numberOfLines={showText ? 0 : 3}
                >
                  Once a Princess. Once an ordinary village girl. Once an
                  psychopath King. Dawn, a village girl wanders into the forest
                  one peaceful evening as ususal to gather woods for her mother.
                  She is captured by warriors from another kingdom and she's
                  forced to impersonate a dead princess who had just commited
                  sucide.
                </Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => setShowText(!showText)}
                >
                  <Text style={styles.showHide}>
                    {showText ? "PACK UP" : "SHOW All"}
                    <AntDesign
                      name={showText ? "caretup" : "caretdown"}
                      size={15}
                      color="#777"
                    />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Content Section */}
        <View style={styles.contents}>
          <View style={styles.contentsHeader}>
            <Text style={styles.detailBodyIntroTitle}>View Contents</Text>
            <Text style={styles.contentsChapters}>
              203 Chapters
              <MaterialIcons name="keyboard-arrow-right" />
            </Text>
          </View>
          <Text style={styles.contentsUpdate}>
            Latest update: Chapter 203 Chapter 203 Final
          </Text>
        </View>

        {/* Tags Section */}
        <View style={styles.tags}>
          <Text style={styles.detailBodyIntroTitle}>Tags</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={cardData}
            renderItem={renderCategoryCard}
            keyExtractor={(item) => item.id}
            scrollIndicatorInsets={{ color: "white" }}
          />
        </View>

        {/* Fans Section */}
        <View style={styles.fans}>
          <View style={styles.fansContainer}>
            <Text style={styles.detailBodyIntroTitle}>Fans</Text>
            <Text style={styles.fansDesc}>
              1+ gifts received
              <MaterialIcons name="keyboard-arrow-right" />
            </Text>
          </View>

          <LinearGradient
            colors={["#7474bf", "#348ac7"]}
            start={{ x: 1, y: 0.25 }}
            end={{ x: 0, y: 0.75 }}
            style={styles.fansButton}
          >
            <Text style={styles.fansButtonText}>
              <MaterialCommunityIcons name="gift" size={16} color="#fff" /> Send
              Gift
            </Text>
          </LinearGradient>
        </View>

        {/* Comments section */}
        <View style={styles.comments}>
          <View style={styles.contentsHeader}>
            <Text style={styles.detailBodyIntroTitle}>Comments</Text>
            <Text style={styles.contentsChapters}>
              View All
              <MaterialIcons name="keyboard-arrow-right" />
            </Text>
          </View>
          <View style={styles.commentsContainer}>
            <View style={styles.commentsProfile}>
              <Image source={novel1} style={styles.commentsProfileImage} />
              <View style={styles.commentsProfileText}>
                <Text style={styles.commentsProfileName}>Zhang Yiyang</Text>
                <Text style={styles.commentsProfileComment}>
                  <AntDesign name="heart" color="red" />
                </Text>
                <View style={styles.commentsProfileBottomContainer}>
                  <Text style={styles.commentsProfileBottomContainerTime}>
                    6 days ago
                  </Text>
                  <View style={styles.commentsProfileBottomContainerIcons}>
                    <Feather
                      style={styles.commentProfileThumb}
                      name="thumbs-up"
                    />
                    <Ionicons
                      style={styles.commentProfileFlag}
                      name="md-flag-sharp"
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.addCommentWrapper}>
              <TouchableOpacity activeOpacity={0.8} style={styles.addComment}>
                <FontAwesome color="#777" name="pencil" size={16} />
                <Text style={styles.addCommentText}>Add a Comment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Vote Section */}
        <View style={styles.fans}>
          <View style={styles.fansContainer}>
            <Text style={styles.detailBodyIntroTitle}>Vote for the Novel</Text>
            <Text style={styles.fansDesc}>
              No vote for this novel currently
            </Text>
          </View>

          <LinearGradient
            colors={["#7474bf", "#348ac7"]}
            style={styles.fansButton}
            start={{ x: 1, y: 0.25 }}
            end={{ x: 0, y: 0.75 }}
          >
            <Text style={styles.fansButtonText}>
              <MaterialCommunityIcons name="vote" size={16} color="#fff" /> Vote
            </Text>
          </LinearGradient>
        </View>

        {/* Popular with same Genres */}
        <View style={styles.popular}>
          <Text style={styles.detailBodyIntroTitle}>
            Popular With Same Genres
          </Text>

          <View style={styles.writerProfile}>
            <View style={styles.commentsProfile}>
              <Image source={novel1} style={styles.commentsProfileImage} />
              <View style={styles.commentsProfileText}>
                <Text style={styles.commentsProfileName}>Zhang Yiyang</Text>
                <Text style={styles.commentsProfileComment}>486 Followers</Text>
              </View>
            </View>
            <View style={styles.writerNovelContainer}>
              <Image style={styles.writerNovel} source={novel1} />
            </View>
          </View>

          <View style={styles.rankingCards}>{renderRankingCard()}</View>

          {/* Copyright Info */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setCopyright(!copyright)}
          >
            <View style={styles.contentsHeader}>
              <Text style={styles.detailBodyIntroTitle}>
                Copyright Information
              </Text>
              <Text style={styles.contentsChapters}>
                <MaterialIcons name="keyboard-arrow-down" size={30} />
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Report Section */}
        <View style={styles.reportContainer}>
          {copyright ? (
            <View style={styles.copyright}>
              <View
                style={{ borderBottomColor: "#888", borderBottomWidth: 0.5 }}
              >
                <Text style={styles.copyrightAuthor}>Author---</Text>
                <Text style={styles.copyrightAuthorDesc}>
                  Published by NovelCat with Authority Of xinmokeji
                </Text>
              </View>
              <Text style={styles.copyrightDisclaimer}>Disclaimer:</Text>
              <Text style={styles.copyrightDisclaimerDesc}>
                The content and images provided by the third party, does not
                represent NovelCat's position.
              </Text>
            </View>
          ) : null}
          <Text style={styles.reportButton}>
            <Ionicons style={styles.commentProfileFlag} name="md-flag-sharp" />
            Report
          </Text>
        </View>
      </ScrollView>
      <View style={styles.footerStatic}>
        <MaterialCommunityIcons
          name="download-outline"
          style={styles.footerDownloadIcon}
        />

        <LinearGradient
          colors={["#7474bf", "#348ac7"]}
          start={{ x: 1, y: 0.25 }}
          end={{ x: 0, y: 0.75 }}
          style={styles.fansButton}
        >
          <Text style={styles.footerButton}>Read Now</Text>
        </LinearGradient>
        {/* <Button title="Book Now" style={styles.footerButton} /> */}

        <AntDesign name="hearto" style={styles.footerHeartIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Navbar css

  headerStatic: {
    backgroundColor: "rgba(52, 91, 99, 1)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: "2%",
    position: "relative",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  headerIcon: {
    color: "#fff",
    fontSize: 20,
  },
  headerDownloadIcon: {
    paddingRight: 15,
  },

  detailContainer: {
    backgroundColor: "rgba(52, 91, 99, 1)",
  },
  detailNovelTitle: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 10,
    position: "relative",
  },
  detailNovelTitleImage: {
    width: 100,
    height: 160,
    position: "absolute",
    top: "50%",
    left: "10%",
    zIndex: 100,
    borderRadius: 7,
  },
  detailNovelTitleText: {
    marginLeft: "40%",
    fontSize: 18,
    // fontWeight: "bold",
    color: "#fff",
  },
  detailBody: {},
  detailbodyFirstContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
  },
  detailBodyRight: {
    marginLeft: "40%",
    minHeight: 110,
    justifyContent: "space-around",
  },
  detailBodyRightAuthor: {
    alignItems: "center",
    flexDirection: "row",
    // justifyContent: "center",
  },
  detailBodyRightAuthorName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailBodyRightCategory: {
    color: "#777",
  },
  detailBodyRightCompleted: {
    color: "rgb(255,165,52)",
  },
  ratingIcon: {
    color: "#413ACA",
  },
  detailBodyDisclaimer: {
    paddingHorizontal: "10%",
    paddingTop: "5%",
    color: "#777",
    fontSize: 10,
  },
  detailBodyDisclaimerReport: {
    textDecorationLine: "underline",
    color: "blue",
  },
  detailBodyIntro: {
    paddingHorizontal: "5%",
  },
  detailBodyIntroTitle: {
    borderLeftColor: "blue",
    borderLeftWidth: 4,
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  detailBodyIntroDesc: {
    lineHeight: 20,
    fontSize: 13,
    color: "#111",
  },
  showHide: {
    alignSelf: "flex-end",
    marginVertical: 15,
    color: "#777",
  },

  // Content Section CSS
  contents: {
    marginTop: 10,
    paddingHorizontal: "5%",
    backgroundColor: "#fff",
  },
  contentsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentsChapters: {
    fontSize: 12,
    color: "#777",
  },
  contentsUpdate: {
    fontWeight: "bold",
    paddingVertical: 10,
  },

  // Tags section
  tags: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 10,
    paddingLeft: "5%",
    backgroundColor: "#fff",
  },
  TagsCard: {},
  tagsCardContainer: {
    alignItems: "flex-start",
    marginHorizontal: 5,
  },
  tagsCardText: {
    fontSize: 14,
    backgroundColor: "rgba(65, 58, 202, 0.1)",
    color: "rgb(65, 58, 202)",
    borderRadius: 10,
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 3,
  },

  // Fans Section
  fans: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: "5%",
    backgroundColor: "#fff",
  },
  fansContainer: {},
  fansDesc: {
    fontSize: 12,
    color: "#888",
  },
  fansButton: {
    padding: 10,
    alignItems: "center",
    borderRadius: 100,
  },
  fansButtonText: {
    color: "#fff",
    fontSize: 12,
  },

  // comments section
  comments: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: "5%",
    backgroundColor: "#fff",
  },
  commentsProfile: {
    flexDirection: "row",
    marginVertical: 10,
  },
  commentsProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 10,
  },
  commentsProfileText: {},
  commentsProfileName: {
    color: "#222",
  },
  commentsProfileComment: {
    paddingVertical: 5,
    color: "#777",
    fontSize: 12,
  },
  commentsProfileBottomContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commentsProfileBottomContainerTime: {
    fontSize: 14,
    flex: 1,
  },
  commentsProfileBottomContainerIcons: {
    flexDirection: "row",
    flex: 1,
  },
  commentProfileThumb: {
    fontSize: 16,
    marginRight: 10,
  },
  commentProfileFlag: {
    fontSize: 16,
  },
  addCommentWrapper: {
    borderTopWidth: 1,
    borderTopColor: "#999",
  },
  addComment: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addCommentText: {
    marginVertical: 5,
    color: "#777",
  },

  // Popular Genres

  // Writer Section
  writerProfile: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: "5%",
    backgroundColor: "rgba(65, 58, 202, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(65, 58, 202, 0.4)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  writerNovel: {
    width: 50,
    height: 70,
    borderRadius: 5,
  },
  popular: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: "5%",
    backgroundColor: "#fff",
  },
  rankingCards: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  rankingCard: {
    flexDirection: "row",
    flexBasis: "40%",
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 5,
  },
  rankingLeft: {},
  rankingCardImage: {
    height: 70,
    width: 55,
    marginRight: 5,
    borderRadius: 5,
  },
  rankingCardRight: {
    flex: 1,
    fontSize: 30,
    paddingHorizontal: 3,
    alignContent: "space-around",
    justifyContent: "space-between",
  },
  rankingCardRightTitle: {
    fontSize: 13,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  rankingCardRightDesc: {
    color: "#777",
    fontSize: 10,
    marginBottom: 3,
    flexWrap: "wrap",
  },
  ratingIcon: {
    fontSize: 15,
    color: "rgba(255,165,52,0.9)",
  },

  // Copyright information

  copyright: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  copyrightAuthor: {
    color: "#888",
    textTransform: "uppercase",
  },
  copyrightAuthorDesc: {
    marginBottom: 10,
    color: "#888",
  },
  copyrightDisclaimer: {
    marginTop: 10,
    color: "#888",

    fontSize: 12,
  },
  copyrightDisclaimerDesc: {
    fontSize: 12,
    color: "#888",
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

  // Footer Style

  footerStatic: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: "relative",
    justifyContent: "space-around",
  },
  footerDownloadIcon: {
    fontSize: 25,
    backgroundColor: "#fff",
    padding: 7,
    color: "#888",
    borderRadius: 100,
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  footerButton: {
    flex: 1,
    textTransform: "uppercase",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    fontWeight: "800",
    width: 150,
  },
  footerHeartIcon: {
    fontSize: 25,
    backgroundColor: "#fff",
    padding: 7,
    color: "red",
    borderRadius: 100,
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
