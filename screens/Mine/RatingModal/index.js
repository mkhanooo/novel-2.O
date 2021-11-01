import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  StatusBar,
  Image,
  View,
  Linking,
  TouchableOpacity,
} from "react-native";

const novel4 = require(`../../../assets/images/novel4.jpg`);

export default function RatingModal({
  navigation,
  childSetModal,
  ratingModal,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(ratingModal);
  }, [ratingModal]);

  return (
    <View style={styles.centeredView}>
      {/* <StatusBar backgroundColor="rgba(0,0,0,0.2)" barStyle="dark-content" /> */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>
              Please Rate us and your feedback can help us do better~
            </Text>
            <View style={styles.buttonBorder}>
              <TouchableOpacity onPress={() => Linking.openURL("market://details?id=com.whatsapp")} style={styles.button} activeOpacity={0.7}>
                <Text style={styles.ratingButton}>Rate for NovelCat</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonBorder}>
              <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}  activeOpacity={0.7} style={styles.button}>
                <Text style={styles.ratingButton}>Leave us suggestions</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonBorder}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                  childSetModal(!modalVisible);
                }}
                style={styles.button}
                activeOpacity={0.7}
              >
                <Text style={styles.ratingButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    // paddingHorizontal: 10,
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
  modalTitle: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 14,
  },
  ratingButton: {
    paddingVertical: 10,
    fontSize: 15,
    textAlign: 'center',
    color: '#333'
  },

buttonBorder: {
    paddingVertical: 5,
    width: '100%',
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
  },

  
});
