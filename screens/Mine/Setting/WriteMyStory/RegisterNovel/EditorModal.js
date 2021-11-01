import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  FlatList,
} from "react-native";

const EditorModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const data = [
    {
      name: "Wind",
    },
    {
      name: "Lisa",
    },
    {
      name: "Frances",
    },
    {
      name: "Anna",
    },
    {
      name: "Vivian",
    },
    {
      name: "Summer",
    },
    {
      name: "Zoe",
    },
    {
      name: "Shirly",
    },
    {
      name: "Shirly",
    },
    {
      name: "Shirly",
    },
    {
      name: "Shirly",
    },
    {
      name: "Shirly",
    },
    {
      name: "Shirly",
    },
    {
      name: "Shirly",
    },
    {
      name: "Shirly",
    },
    {
      name: "Shirly",
    },
    {
      name: "Shirly",
    },
  ];
  return (
    <View>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Choose Editor</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                {data.map((item, li) => {
                  return (
                    <View style={styles.editorList} key={li}>
                      <View
                        style={{
                          width: 400,
                          borderBottomWidth: 1,
                          borderColor: "lightgrey",
                        }}
                      >
                        <Text style={styles.listText}>{item.name}</Text>
                      </View>
                    </View>
                  );
                })}
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 580,
  },
  modalView: {
    margin: 20,
    width: "100%",
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    height: 260,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    fontSize: 16,
    marginTop: 8,
    marginLeft: 12,
    color: "grey",
  },
  editorList: {
    alignItems: "center",
  },
  listText: {
    fontSize: 15,
    marginLeft: 140,
    padding: 8,
  },
});

export default EditorModal;
