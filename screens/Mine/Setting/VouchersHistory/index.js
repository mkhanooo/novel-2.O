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

export default function VouchersHistory() {
  const data = [
    {
      title: "Exclusive Reward",
      time: "2021-09-16 12:14:25",
      count: "+300",
      expire: "Expire on 2021-10-01 20:59:59",
      gems: "Gems",
      discription: "Exclusive for <Be You Wife>",
      read: "Read now",
    },
    {
      title: "Exclusive Reward",
      time: "2021-09-16 12:14:25",
      count: "+300",
      expire: "Expire on 2021-10-01 20:59:59",
      gems: "Gems",
      discription: "Exclusive for <My Lover Is a Vampire>",
      read: "Read now",
    },
    {
      title: "Exclusive Reward",
      time: "2021-09-16 12:14:25",
      count: "+300",
      expire: "Expire on 2021-10-01 20:59:59",
      gems: "Gems",
      discription: "Exclusive for <Finally found you>",
      read: "Read now",
    },
  ];
  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.mainBody}>
        <View style={styles.mainContainer}>
          <View style={styles.colorBox}></View>
          <View style={styles.upperBox}>
            <View style={styles.num}>
              <Text style={styles.numTxt}>0</Text>
              <Text style={styles.numTxt}>900</Text>
            </View>
            <View style={styles.numTextBox}>
              <Text style={styles.numText}>Vouchers</Text>
              <Text style={styles.numText}>Gems</Text>
            </View>
            <View style={styles.tipsTextBox}>
              <View style={styles.tipsText}>
                <Text style={styles.tips}>Tips</Text>
              </View>
              <View style={styles.tipsList}>
                <Text style={styles.tipsInnerText}>
                  1.Gems have the same value with coins. All Vouchers and Gems
                  will expire overtime. Please use before deadline.
                </Text>
                <Text style={styles.tipsInnerText}>
                  2.Gems are exclusivly for a designated book.
                </Text>
                <Text style={styles.tipsInnerText}>
                  3.When you unlock VIP chapters, if you have gems for this
                  book, they are prior to use.
                </Text>
              </View>
            </View>
          </View>
          <View>
            {data.map((item, i) => {
              return (
                <View style={styles.lowerMainBox} key={i}>
                  <View style={styles.lowerBox}>
                    <View style={styles.titleTextBox}>
                      <Text style={styles.titleText}>{item.title}</Text>
                    </View>
                    <View style={styles.timeCountBox}>
                      <Text style={styles.timeText}>{item.time}</Text>
                      <Text style={styles.countText}>{item.count}</Text>
                    </View>
                    <View style={styles.expireGemsBox}>
                      <Text style={styles.expireText}>{item.expire}</Text>
                      <Text style={styles.gemsText}>{item.gems}</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.discReadBox}>
                      <Text style={styles.discriptionText}>
                        {item.discription}
                      </Text>
                      <TouchableOpacity>
                        <Text style={styles.readText}>{item.read}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={styles.endTextBox}>
            <TouchableOpacity>
              <Text style={styles.endText}>
                Check your earlier claimed history here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainBody: {},
  mainContainer: {},
  colorBox: {
    backgroundColor: "#6E7388",
    height: 130,
  },
  upperBox: {
    backgroundColor: "#FFFFFF",
    height: 220,
    borderWidth: 1,
    marginTop: -100,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 8,
    borderColor: "white",
  },
  num: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  numTxt: {
    marginTop: 5,
    fontSize: 20,
    color: "#1B54B2",
  },
  numTextBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingRight: 15,
  },
  numText: {
    fontSize: 20,
    color: "black",
  },
  tipsTextBox: { marginTop: 5, marginLeft: 15 },
  tips: {
    fontSize: 17,
    marginBottom: 3,
  },
  tipsList: {
    paddingRight: 10,
  },
  tipsInnerText: {
    lineHeight: 20,
  },
  tipsHelpCenter: {
    flexDirection: "row",
  },
  lowerMainBox: {
    height: 140,
    backgroundColor: "white",
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  lowerBox: {},
  titleTextBox: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  titleText: {
    color: "#1B54B2",
    fontSize: 18,
    fontWeight: "bold",
  },
  timeCountBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeText: {
    paddingTop: 5,
    paddingLeft: 10,
  },
  countText: {
    paddingRight: 20,
    fontSize: 22,
    color: "grey",
  },
  expireGemsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  expireText: {
    paddingLeft: 10,
    color: "lightgrey",
  },
  gemsText: {
    paddingRight: 20,
    fontSize: 15,
  },
  line: {
    borderTopWidth: 1,
    marginLeft: 10,
    marginRight: 20,
    marginTop: 10,
    // borderColor: "#FCFCFC",
    borderColor: "lightgrey",
  },
  discReadBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  discriptionText: {
    marginLeft: 10,
    marginTop: 10,
    color: "grey",
  },
  readText: {
    color: "#1B54B2",
    paddingTop: 10,
    paddingRight: 20,
  },
  endTextBox: {
    marginTop: 8,
    alignItems: "center",
  },
  endText: {
    color: "#1B54B2",
  },
});
