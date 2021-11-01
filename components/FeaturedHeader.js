import React, { useState, useEffect } from "react";
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
import { Feather, AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";

export default function FeaturedHeader() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Featured</Text>
        <View style={styles.headerIcons}>
          <AntDesign
            style={[styles.headerIcon, styles.headerDownloadIcon]}
            name="message1"
          />
          <Feather style={styles.headerIcon} name="search" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Header CSS
  container: {
    flex: 1,
  },
  // Navbar css
  header: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: "auto",
  },
  headerIcons: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  headerIcon: {
    color: "#413ACA",
    fontSize: 22,
  },
  headerDownloadIcon: {
    paddingRight: 15,
  },
});

// -------------------------------------------------------------------
// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   StatusBar,
//   Image,
//   ScrollView,
//   ImageBackground,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";
// import { Feather, AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";

// export default function FeaturedHeader() {
//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#fff" barStyle="dark-content" />
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Featured</Text>
//         <View style={styles.headerIcons}>
//           <AntDesign
//             style={[styles.headerIcon, styles.headerDownloadIcon]}
//             name="message1"
//             size={50}
//           />
//           <Feather style={styles.headerIcon} name="search" />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   // Header CSS
//   container: {
//     flex: 1,
//   },
//   // Navbar css
//   header: {
//     flex: 1,
//     width: "100%",
//     backgroundColor: "#fff",
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     justifyContent: "space-between",
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   headerIcons: {
//     flexDirection: "row",

//   },
//   headerIcon: {
//     color: "#413ACA",
//     fontSize: 22,
//   },
//   headerDownloadIcon: {
//     paddingRight: 15,
//   },
// });
