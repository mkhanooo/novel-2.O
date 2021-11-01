//------------------------------------------------------------------------------
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   StatusBar,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import { Feather } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";

// export default function Featured({ navigation }) {
//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//       <StatusBar backgroundColor="#fff" barStyle="dark-content" />

//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Featured</Text>
//           <View style={styles.headerIcons}>
//             <AntDesign
//               style={[styles.headerIcon, styles.headerDownloadIcon]}
//               name="message1"
//               size={24}
//             />
//             <Feather style={styles.headerIcon} name="search" size={24} />
//           </View>
//         </View>
//         <View style={styles.body}></View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // marginTop: StatusBar.currentHeight,
//     paddingTop: 10,
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   scene: {
//     flex: 1,
//   },

//   //   Header Css
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingRight: 10,
//     paddingLeft: 10,
//   },
//   headerTitle: {
//     fontSize: 18,
//     justifyContent: "center",
//     fontWeight: "bold",
//   },
//   headerIcons: {
//     flexDirection: "row",
//   },
//   headerIcon: {
//     color: "#413ACA",
//   },
//   headerDownloadIcon: {
//     paddingRight: 15,
//   },

//   //   Popular Card Css
//   popular: {
//     flex: 1,
//   },
//   popularText: {
//     fontSize: 18,
//     color: "#444",
//     marginTop: 10,
//     marginLeft: 5,
//   },
// });
