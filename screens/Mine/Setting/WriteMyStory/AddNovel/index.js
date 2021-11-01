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
  AntDesign,
  Ionicons,
  FontAwesome,
  EvilIcons,
} from "@expo/vector-icons";

export default function AddNovel({ navigation }) {
  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.mainBody}>
        <View style={styles.novelNameBox}>
          <View style={styles.startTextBox}>
            <Text style={styles.star}>* </Text>
            <Text style={styles.pen}>Novel Name</Text>
          </View>
          <View style={styles.novelInputBox}>
            <TextInput
              style={styles.novelinput}
              placeholder="Give Novel Name for your Work"
            />
          </View>
        </View>
        <View style={styles.genreBox}>
          <View style={styles.startTextBox}>
            <Text style={styles.star}>* </Text>
            <Text style={styles.pen}>Genres</Text>
          </View>
          <View style={styles.InputBox}>
            <TextInput style={styles.input} placeholder="A popular genre " />
          </View>
        </View>
        <View style={styles.protagonistBox}>
          <View style={styles.startTextBox}>
            <Text style={styles.star}>* </Text>
            <Text style={styles.pen}>Protagonist</Text>
          </View>
          <View style={styles.InputBox}>
            <TextInput
              style={styles.protaginput}
              placeholder="Unique Protagonist name "
            />
          </View>
        </View>
        <View style={styles.tagBox}>
          <View style={styles.startTextBox}>
            <Text style={styles.star}>* </Text>
            <Text style={styles.pen}>Tag</Text>
          </View>
          <View style={styles.InputBox}>
            <TextInput
              style={styles.taginput}
              placeholder="Various tag help your novel "
            />
          </View>
        </View>
        <View style={styles.contentBox}>
          <View style={styles.startTextBox}>
            <Text style={styles.star}>* </Text>
            <Text style={styles.pen}>Content</Text>
          </View>

          <View style={styles.ratingBox}>
            <Text style={[styles.ratingText, styles.pen]}>Rating</Text>
            <View style={styles.InputBox}>
              <TextInput
                style={styles.ratinginput}
                placeholder="A proper content rating "
              />
            </View>
          </View>
        </View>
        <View style={styles.blurbBox}>
          <View style={styles.startTextBox}>
            <Text style={styles.star}>* </Text>
            <Text style={styles.pen}>Blurb</Text>
          </View>
          <View style={styles.InputBox}>
            <TextInput
              style={styles.blurbinput}
              placeholder="An intriguing blurb draw"
            />
          </View>
        </View>
        <View style={styles.inputButton}>
          <TouchableOpacity
            style={styles.roundButton1}
            onPress={() => navigation.navigate("tabNav")}
          >
            <Text style={styles.buttonText}>Create Novel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainBody: {},
  novelNameBox: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
  },
  startTextBox: {
    flexDirection: "row",
    padding: 10,
  },
  star: {
    fontWeight: "bold",

    color: "red",
  },
  pen: {
    fontWeight: "bold",
  },
  novelInputBox: {},
  novelinput: {
    padding: 15,
  },
  genreBox: {
    width: "100%",
    height: 80,
    backgroundColor: "white",
    marginTop: 10,
    flexDirection: "row",
  },
  InputBox: {},
  input: {
    marginTop: 10,
    marginLeft: 47,
  },
  protagonistBox: {
    width: "100%",
    height: 80,
    backgroundColor: "white",
    marginTop: 1,
    flexDirection: "row",
  },
  protaginput: {
    marginTop: 10,
    marginLeft: 17,
  },
  tagBox: {
    width: "100%",
    height: 80,
    backgroundColor: "white",
    marginTop: 10,
    flexDirection: "row",
  },
  taginput: { marginTop: 10, marginLeft: 67 },
  contentBox: {
    width: "100%",
    height: 80,
    backgroundColor: "white",
    marginTop: 1,
  },
  ratingBox: {
    flexDirection: "row",
  },
  ratingText: {
    marginLeft: 20,
    marginTop: -10,
  },
  ratinginput: {
    marginTop: -20,
    marginLeft: 58,
  },
  blurbBox: {
    width: "100%",
    height: 80,
    backgroundColor: "white",
    marginTop: 10,
    flexDirection: "row",
  },
  blurbinput: {
    marginTop: 10,
    marginLeft: 53,
  },
  inputButton: {
    marginTop: 40,
    margin: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  roundButton1: {
    width: 290,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 60,
    backgroundColor: "#3154A5",
  },
});

{
  /* <View style={styles.line}></View> */
}
//line: {
//     borderTopWidth: 1,
//     marginLeft: 10,
//     marginRight: 20,
//     marginTop: 10,
//     // borderColor: "#FCFCFC",
//     borderColor: "lightgrey",
//   },
