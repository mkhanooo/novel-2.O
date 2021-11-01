import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
  Button,
  StatusBar,
  Feather,
  Modal,
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
import axios from "axios";

export default function ShowPost() {
  const initialState = [
    {
      idname: "Md khan",
      achievementtitle: "new user. ",
      posttime: "Oct 27",
      title: "What's the most expensive mistake a film studio has done?",
      desc: "There is probably no way to determine the “most expensive” mistake, but there have been some pretty hefty ones. “Cleopatra” (1963) cost about $58 million in 1963, which would be about $500 million in 2021 dollars. That makes it the most expensive movie ever made. The film grossed about $40 million ($350 million in 2021) so it lost about $150 million in today’s money. The studios way overpaid Elizabeth Taylor who received $1 million and 10% of gross, a record at the time totaling about $200 million in today’s money. About 16 weeks into production and costing $7 million, the studio had only 10 minutes of usable footage to show for it. The entire project almost bankrupted the studio.",
      postImage: "https://i.ibb.co/tpQtTTZ/1.png",
    },
    {
      idname: "Md khan",
      achievementtitle: "",
      posttime: "Oct 26",
      title: "How cruel can life be for someone?",
      desc: "When he was 26 years old, his wife died due to heart problems leaving his 2 kids and himself behind.After that, he got remarried at the age of 29. It took him 3 years to get married again as it is very difficult in India to get married again no matter what was the reason behind the end of your first marriage.His second wife was a divorcee and she was extremely cunning and one day(8 months into the marriage), she took off with majority of his money with her boyfriend! After that, he got into depression and was started on medications by the doctors. One day, we found out that he committed suicide and his body was found in his room.",
      postImage: "https://i.ibb.co/ynVzKc7/Screenshot-10.png",
    },
  ];
  const moreoption = [
    {
      option: "Edit",
    },
    {
      option: "Delete",
    },
    {
      option: "Answer Later",
    },
    {
      option: "Share",
    },
  ];
  const [posts, setPosts] = useState(initialState);
  const [like, setLike] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [defaultLink, setDefaultLink] = useState(
    "https://quora-server.herokuapp.com/"
  );
  const addlike = () => {
    setLike(like + 1);
  };

  // if(like >= 1){
  //   return(
  //     <View>
  //       <TouchableOpacity>

  //       </TouchableOpacity>
  //     </View>
  //   )
  // }
  // else{
  //   return(
  //     <View>
  //       <TouchableOpacity>

  //       </TouchableOpacity>
  //     </View>
  //   )
  // }

  useEffect(() => {
    axios
      .get("https://quora-server.herokuapp.com/api/public/getPost")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      });
  }, [posts]);
  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.mainbody}>
        <View style={styles.postmainbody}>
          {posts.map((items, i) => {
            return (
              <View style={styles.postbody} key={i}>
                <View style={styles.profileimgbox}>
                  <Image
                    style={styles.profileimg}
                    source={require("../../../assets/images/novel4.jpg")}
                  />
                  <View style={styles.achievementtitlebox}>
                    <Text style={styles.idnametxt}>{items.idname}</Text>
                    <Text style={styles.achievementtitletxt}>
                      {items.achievementtitle}
                      {items.posttime}
                    </Text>
                  </View>
                </View>
                <View style={styles.posttitlebox}>
                  <Text style={styles.posttitletxt}>{items.title}</Text>
                  <Text style={styles.postdesctxt}>{items.desc}</Text>
                  {items.postImage && (
                    <Image
                      source={{ uri: defaultLink + items.postImage }}
                      style={{ width: 370, height: 400 }}
                    />
                  )}
                  {!items.postImage && (
                    <Image
                      source={{ uri: items.postImage }}
                      style={styles.postimg}
                    />
                  )}
                </View>
                <View style={styles.likebuttonbox}>
                  <View style={styles.likebutton}>
                    <TouchableOpacity onPress={addlike} style={styles.like}>
                      <AntDesign name="like2" size={25} color="grey" />
                      <Text
                        style={{
                          paddingTop: 5,
                          paddingLeft: 5,
                          fontSize: 15,
                          color: "grey",
                        }}
                      >
                        {like}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.commentbutton}>
                    <TouchableOpacity style={styles.comment}>
                      <FontAwesome5 name="comment" size={25} color="grey" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.sharebutton}>
                    <TouchableOpacity style={styles.share}>
                      <Entypo name="cycle" size={25} color="grey" />
                    </TouchableOpacity>
                  </View>
                  {/* <View style={styles.sharetoappsbutton}>
                    <TouchableOpacity style={styles.sharetoapp}>
                      <AntDesign name="sharealt" size={25} color="grey" />
                    </TouchableOpacity>
                  </View> */}
                  <View style={styles.threedotsbox}>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisible}
                      onRequestClose={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <TouchableWithoutFeedback
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <View style={styles.modalOverlay} />
                      </TouchableWithoutFeedback>
                      <View style={styles.modalmainbox}>
                        {moreoption.map((items, i) => {
                          return (
                            <View style={{ backgroundColor: "white" }} key={i}>
                              <TouchableOpacity style={styles.deletebutton}>
                                <Text>{items.option}</Text>
                              </TouchableOpacity>
                            </View>
                          );
                        })}
                      </View>
                    </Modal>
                    <TouchableOpacity
                      onPress={() => setModalVisible(true)}
                      style={styles.threedots}
                    >
                      <Entypo
                        name="dots-three-vertical"
                        size={22}
                        color="grey"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainbody: {
    backgroundColor: "lightgrey",
    height: "auto",
    marginTop: -4,
  },
  postmainbody: { marginBottom: 10 },
  postbody: {
    backgroundColor: "#F7F8FC",
    marginTop: 5,
    marginLeft: 0,
    marginRight: 0,
    borderWidth: 2,
    paddingBottom: 5,
    borderColor: "#F7F8FC",
    borderRadius: 5,
    height: "auto",
  },
  profileimgbox: {
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 5,
  },
  profileimg: {
    borderRadius: 100,
    height: 40,
    width: 40,
  },
  achievementtitlebox: {
    flexDirection: "column",
  },
  idnametxt: {
    fontWeight: "600",
    fontSize: 15,
    paddingLeft: 10,
  },
  achievementtitletxt: {
    color: "grey",
    paddingLeft: 10,
  },
  posttitlebox: {},
  posttitletxt: {
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 5,
    paddingTop: 5,
  },
  postdesctxt: {
    paddingLeft: 5,
    paddingTop: 5,
  },
  postimg: {
    alignSelf: "center",
    alignContent: "center",
    width: 370,
    height: 400,
    marginTop: 8,
  },
  likebuttonbox: {
    paddingLeft: 12,
    paddingTop: 3,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likebutton: {},
  like: {
    flexDirection: "row",
  },
  commentbutton: {},
  comment: {
    paddingTop: 1,
    paddingLeft: 12,
  },
  sharebutton: {},
  share: {
    paddingTop: 1,
    paddingLeft: 12,
  },
  sharetoappsbutton: {
    alignItems: "flex-end",
  },
  sharetoapp: {
    paddingTop: 3,
    paddingLeft: 12,
  },
  threedotsbox: {},
  threedots: {
    paddingRight: 8,
    paddingTop: 4,
  },
  modalmainbox: {
    height: "auto",
    marginTop: "auto",
    marginBottom: 3,
    backgroundColor: "white",
  },
  deletebutton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderWidth: 0.3,
    borderColor: "lightgrey",
    // borderRadius: 4,
    // elevation: 3,
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0)",
  },
});
