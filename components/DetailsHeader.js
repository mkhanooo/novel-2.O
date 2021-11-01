import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";

export default function FeaturedHeader({navigation}) {
  return (
    <View style={styles.header}>
      <StatusBar
        backgroundColor="rgba(52, 91, 99, 1)"
        barStyle="light-content"
      />
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
  );
}

const styles = StyleSheet.create({
  // Navbar css
  header: {
    flex: 1,
    backgroundColor: "rgba(52, 91, 99, 1)",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 30,
    paddingVertical: 10,
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
});
