import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView, Button, StatusBar, Feather } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import mime from "mime";

export default function AddPost({ navigation }) {
  const [title, setTitle] = useState("waseem");
  const [desc, setDesc] = useState("usman");
  const [image, setImage] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== "android") {
  //       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== "granted") {
  //         Alert.alert("Sorry, we need camera roll permissions to make this work!");
  //       }
  //     }
  //   })();
  // }, []);

  // useEffect(() => {
  //   axios.get("https://quora-server.herokuapp.com/api/public/getPost").then((res) => {
  //     console.log("res==", res.data);
  //   });
  // }, []);

  const createPost = () => {
    if (image && title && desc) {
      let newImageUri = "file:///" + image.split("file:/").join("");
      let formData = new FormData();
      formData.append("title", title);
      formData.append("desc", desc);
      formData.append("postImage", {
        uri: newImageUri,
        type: mime.getType(newImageUri),
        name: newImageUri.split("/").pop(),
      });
      // http://192.168.18.22:3001/
      // https://quora-server.herokuapp.com/
      try {
        axios
          .post("https://quora-server.herokuapp.com/api/public/createPost", formData, {
            headers: {
              Accept: "multipart/form-data",
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log("Form Submitted===", res.data);
          })
          .catch((err) => console.log("err===", err));
      } catch (error) {
        console.log("error===", error);
      }
    } else {
      alert("All Fields are required");
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.mainbody}>
        <View style={styles.InputBox}>
          <TextInput multiline={true} value={title} onChangeText={setTitle} style={styles.posttitleinput} placeholder="Post Title" />
        </View>
        <View style={styles.InputBox}>
          <TextInput multiline={true} value={desc} onChangeText={setDesc} style={styles.input} placeholder="Post Discription" />
        </View>
        <View style={styles.chooseimagebox}>
          <View>
            <TouchableOpacity title="Choose Image" onPress={pickImage}>
              <Text style={{ color: "grey" }}> Choose Image </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 13 }}>{image && <Image source={{ uri: image }} style={{ width: 370, height: 400 }} />}</View>
        </View>
        <View style={styles.inputButton}>
          <TouchableOpacity style={styles.roundButton1} onPress={createPost}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainbody: {},
  InputBox: {},
  posttitleinput: {
    backgroundColor: "white",
    height: 50,
    marginTop: 10,
    paddingLeft: 10,
  },
  input: {
    backgroundColor: "white",
    height: 90,
    marginTop: 10,
    paddingLeft: 10,
  },
  chooseimagebox: {
    backgroundColor: "white",
    height: "auto",
    marginTop: 10,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  inputButton: {
    alignItems: "center",
    justifyContent: "center",
    // position: 'absolute',
    // right: 50,
    // bottom:0,

    marginTop: 10,
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
