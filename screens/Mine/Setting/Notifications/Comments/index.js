import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
  StatusBar,
  Feather,
} from "react-native";
import {
  Entypo,
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
  FontAwesome,
  EvilIcons,
} from "@expo/vector-icons";

export default function Comments() {
  return (
    <ScrollView style={{backgroundColor: "white" }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.mainBody}>
        <MaterialCommunityIcons
          name="clipboard-text-outline"
          size={100}
          color="lightgrey"
        />
        <Text>There is Nothing.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  mainBody: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
