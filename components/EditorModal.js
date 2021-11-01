import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  StatusBar,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";

const novel4 = require(`../assets/images/novel4.jpg`);
export default function EditorModal() {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <TouchableOpacity
      style={styles.centeredView}
      onPress={() => {
        setModalVisible(!modalVisible);
      }}
    >
      {/* <StatusBar backgroundColor="rgba(0,0,0,0.2)" barStyle="dark-content" /> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={styles.crossContainer}
              activeOpacity={1}
            >
              <Entypo name="cross" style={styles.cross} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Romance</Text>
            <Image style={styles.modalImage} source={novel4} />
            <Text style={styles.modalNovelName}>Doctor Vagina</Text>

            <LinearGradient
              colors={["#7474bf", "#348ac7"]}
              start={{ x: 1, y: 0.25 }}
              end={{ x: 0, y: 0.75 }}
              style={styles.modalButton}
            >
              <Text style={styles.footerButton}>Read Now</Text>
            </LinearGradient>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
    // alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    // width: "60%",
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  crossContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  cross: {
    fontSize: 20,
    color: "#999",
  },
  modalTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },
  modalImage: { width: "100%", height: 80 },
  modalNovelName: {
    paddingVertical: 10,
    fontSize: 15,
  },

  modalButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 100,
  },

  footerButton: {
    textTransform: "uppercase",
    alignItems: "center",
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "800",
  },
});
