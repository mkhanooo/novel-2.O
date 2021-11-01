import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";

export default function FeaturedHeader({ navigation }) {
  return (
    <View style={styles.header}>
      <StatusBar
        backgroundColor="rgba(65, 58, 202, 1)"
        barStyle="light-content"
      />
      <Feather
        name="arrow-left"
        style={styles.headerIcon}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.headerTitle}>Earn Rewards</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Navbar css
  header: {
    flex: 1,
    backgroundColor: "rgba(65, 58, 202, 1)",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 30,
    paddingVertical: 10,
    // justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#fff',
    marginLeft: '5%'
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
