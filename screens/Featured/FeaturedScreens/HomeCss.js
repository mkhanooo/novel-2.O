import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Header CSS
  container: {
    // marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
  },
  headerTitle: {
    fontSize: 18,
    justifyContent: "center",
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  headerIcon: {
    color: "#413ACA",
  },
  headerDownloadIcon: {
    paddingRight: 15,
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

  body: {},
  bestNovel: {
    flex: 1,
  },
  bestNovelTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  bestNovelTitle: {
    color: "#413ACA",
    fontSize: 20,
    fontWeight: "bold",
  },
  bestNovelTitleMore: {
    flexDirection: "row",
    alignItems: "center",
  },
  bestNovelTitleMoreText: {
    color: "#777",
    fontSize: 12,
  },
  bestNovelTitleMoreIcon: {
    color: "#777",
    fontSize: 16,
    alignSelf: "center",
  },
  bestNovelCards: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
  bestNovelCard: {
    width: "30%",
    marginVertical: 7,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 1,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  bestNovelCardImage: {
    borderRadius: 5,
  },
  bestNovelCardTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },

  // categoryCard
  categoryCards: {
    padding: 10,
  },
  categoryCard: {
    paddingHorizontal: 7,
    // borderColor: 'red',
    // borderWidth: 2,
    borderRadius: 5,
  },
  categoryCardImage: {},
  categoryCardTitle: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    color: "#fff",
    backgroundColor: "rgba(65, 58, 202, 0.6)",
    borderRadius: 5,
  },

  //   Ranking Card
  rankingCards: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  rankingCard: {
    flexDirection: "row",
    flexBasis: "45%",
    backgroundColor: "#fff",
    margin: 5,
    // borderColor: "red",
    // borderWidth: 1,
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

  //   Slider
  wrapper: {
    height: 160,
    marginBottom: 10,
  },

  //   Top Tags

  topTagsContainer: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: "rgba(65, 58, 202, 0.1)",
  },
  topTags: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "space-between",
    marginVertical: 10,
    flexWrap: "wrap",
  },
  topTagsSingle: {
    backgroundColor: "#fff",
    fontSize: 13,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 3,
    marginVertical: 5,
  },

  // editors favorite
  editorFavCards: {},
  editorFavCard: {
    flexDirection: "row",
    flexBasis: "100%",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    // borderColor: "red",
    // borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
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
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  editorFavCardRightDesc: {
    color: "#888",
    fontSize: 12,
    flexWrap: "wrap",
  },
  editorFavCardRightRating: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  editorFavCardRightRatingTitle: {
    color: "#777",
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
  //   Banner
  imageWrapper: {
    flex: 1,
    padding: 20,
    borderRadius: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 100,
    borderRadius: 10,
  },
});
