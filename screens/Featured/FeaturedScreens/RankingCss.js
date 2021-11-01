import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Header CSS
  container: {
    // marginTop: StatusBar.currentHeight,
    paddingTop: 10,
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

  //   Ranking CSS
  rankingBack: {
    backgroundColor: "#f7f7f7",
  },
  bestNovel: {
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  bestNovelTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  bestNovelTitle: {
    color: "#413ACA",
    fontSize: 20,
    flexWrap: "wrap",
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
    padding: 10,
  },
  bestNovelCard: {
    width: 90,
    marginVertical: 7,
    marginHorizontal: 7,
  },
  bestNovelCardImage: {},
  bestNovelCardTitle: {
    fontSize: 12,
    fontWeight: "700",
  },
});
