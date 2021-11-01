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
} from "react-native";
import {
  Entypo,
  MaterialIcons,
  FontAwesome5,
  AntDesign,
  Ionicons,
  FontAwesome,
  EvilIcons,
} from "@expo/vector-icons";

export default function Setting({ navigation }) {
  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.buttonWidth}>
            <TouchableOpacity
              activeOpacity={0.7}
            >
              <Text style={styles.settingButton}>Check for Update</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.buttonBorder, styles.buttonWidth]}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.cacheButton}
            >
              <Text style={styles.settingButton}>Clear Cache</Text>
              <Text style={styles.cacheValue}>0KB</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.buttonBorder, styles.buttonWidth]}>
            <TouchableOpacity
              onPress={() => navigation.navigate("AboutNovelCat")}
              activeOpacity={0.7}
            >
              <Text style={styles.settingButton}>About NovelCat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    //   backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },
  cacheButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cacheValue: {
    color: "#413ACA",
    fontWeight: "bold",
  },
  buttonWidth: {
    width: "100%",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  buttonBorder: {
    borderTopColor: "rgba(0,0,0,0.1)",
    borderTopWidth: 1,
  },
  settingButton: {
    paddingVertical: 15,
    fontSize: 15,
    textAlign: "left",
    color: "#333",
  },
});
