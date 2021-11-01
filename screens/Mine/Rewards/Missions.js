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
  Feather,
  EvilIcons,
} from "@expo/vector-icons";

export default function Main() {
  return (
    <View>
      <StatusBar></StatusBar>
      <ScrollView>
        <View style={styles.curve}>
          <Text></Text>
        </View>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <View style={styles.topSectionHeader}>
              <Text style={styles.topSectionHeaderText}>
                Continuous check-in
              </Text>
              <AntDesign
                name="questioncircle"
                style={styles.topSectionHeaderIcon}
              />
            </View>
            <View style={styles.days}>
              <View style={styles.day1}>
                <Text style={styles.day1Text}>1 Day</Text>
                <Feather name="gift" style={styles.day1Icon} />
                <Text style={styles.day1Footer}>20</Text>
              </View>
              <View style={styles.day1}>
                <Text style={styles.day1Text}>2 Days</Text>
                <Feather name="gift" style={styles.day1Icon} />
                <Text style={styles.day1Footer}>20</Text>
              </View>
              <View style={styles.day1}>
                <Text style={styles.day1Text}>3 Days</Text>
                <Feather name="gift" style={styles.day1Icon} />
                <Text style={styles.day1Footer}>20</Text>
              </View>
              <View style={styles.day1}>
                <Text style={styles.day1Text}>4 Days</Text>
                <Feather name="gift" style={styles.day1Icon} />
                <Text style={styles.day1Footer}>20</Text>
              </View>
              <View style={styles.day1}>
                <Text style={styles.day1Text}>5 Days</Text>
                <Feather name="gift" style={styles.day1Icon} />
                <Text style={styles.day1Footer}>20</Text>
              </View>
              <View style={styles.day1}>
                <Text style={styles.day1Text}>6 Days</Text>
                <Feather name="gift" style={styles.day1Icon} />
                <Text style={styles.day1Footer}>20</Text>
              </View>
              <View style={styles.day2}>
                <Text style={styles.day1Text}>7 Days</Text>
                <Feather name="gift" style={styles.day1Icon} />
                <Text style={styles.day1Footer}>20</Text>
              </View>
            </View>
          </View>
          <View style={styles.dailyMission}>
            <Text style={styles.dailyMissionHeading}>Daily Missions</Text>

            {/* Compelete Item */}
            <View style={styles.missionItem}>
              <View style={styles.missionItemLeft}>
                <Text style={styles.missionItemLeftHeading}>
                  Ready for 30 mins
                </Text>
                <Text style={styles.missionItemLeftDesc}>
                  icon +15 Vouchers
                </Text>
              </View>
              <View style={styles.missionItemRight}>
                <Text style={styles.missionItemRightComplete}>COMPLETE</Text>
              </View>
            </View>

            {/* Compelete Item */}
            <View style={styles.missionItem}>
              <View style={styles.missionItemLeft}>
                <Text style={styles.missionItemLeftHeading}>
                  Ready for 30 mins
                </Text>
                <Text style={styles.missionItemLeftDesc}>
                  icon +15 Vouchers
                </Text>
              </View>
              <View style={styles.missionItemRight}>
                <Text style={styles.missionItemRightComplete}>COMPLETE</Text>
              </View>
            </View>
            {/* Compelete Item */}
            <View style={styles.missionItem}>
              <View style={styles.missionItemLeft}>
                <Text style={styles.missionItemLeftHeading}>
                  Ready for 30 mins
                </Text>
                <Text style={styles.missionItemLeftDesc}>
                  icon +15 Vouchers
                </Text>
              </View>
              <View style={styles.missionItemRight}>
                <Text style={styles.missionItemRightComplete}>COMPLETE</Text>
              </View>
            </View>

            {/* Progress Item */}
            <View style={styles.missionItem}>
              <View style={styles.missionItemLeft}>
                <Text style={styles.missionItemLeftHeading}>
                  Ready for 30 mins
                </Text>
                <Text style={styles.missionItemLeftDesc}>
                  icon +15 Vouchers
                </Text>
              </View>
              <View style={styles.missionItemRight}>
                <Text style={styles.missionItemRightProgress}>0/30 mins</Text>

                <View style={styles.missionItemRightProgressBar}>
                  <View style={{ width: "50%", justifyContent: "center" }}>
                    <View
                      style={{
                        width: "100%",
                        backgroundColor: "#4F4F4F",
                        height: 5,
                        borderRadius: 10,
                      }}
                    >
                      <View
                        style={{
                          width: "80%",
                          backgroundColor: "#F89800",
                          height: 5,
                          borderRadius: 10,
                        }}
                      ></View>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* Compelete Item */}
            <View style={styles.missionItem}>
              <View style={styles.missionItemLeft}>
                <Text style={styles.missionItemLeftHeading}>
                  Ready for 30 mins
                </Text>
                <Text style={styles.missionItemLeftDesc}>
                  icon +15 Vouchers
                </Text>
              </View>
              <View style={styles.missionItemRight}>
                <Text style={styles.missionItemRightComplete}>COMPLETE</Text>
              </View>
            </View>
            {/* Compelete Item */}
            <View style={styles.missionItem}>
              <View style={styles.missionItemLeft}>
                <Text style={styles.missionItemLeftHeading}>
                  Ready for 30 mins
                </Text>
                <Text style={styles.missionItemLeftDesc}>
                  icon +15 Vouchers
                </Text>
              </View>
              <View style={styles.missionItemRight}>
                <Text style={styles.missionItemRightComplete}>COMPLETE</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  curve: {
    backgroundColor: "rgba(65, 58, 202, 1)",
    paddingBottom: 70,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: -70,
  },
  topSection: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 5,
  },
  topSectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  topSectionHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  topSectionHeaderIcon: {
    fontSize: 18,
    color: "#999",
  },
  days: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  day1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffe2c6",
    borderRadius: 5,
    width: "22%",
    padding: 5,
    marginVertical: 10,
  },
  day1Text: {
    color: "#444",
  },
  day1Icon: {
    color: "#fff",
    fontSize: 18,
    backgroundColor: "orange",
    padding: 5,
    borderRadius: 50,
    marginVertical: 10,
  },
  day1Footer: {
    color: "orange",
    fontSize: 15,
    fontWeight: "bold",
  },
  day2: {
    backgroundColor: "#ffe2c6",
    width: "45%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
  },
  dailyMission: {
    marginVertical: 10,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 5,
  },
  dailyMissionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  missionItem: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  missionItemLeft: {},
  missionItemLeftHeading: {
    fontSize: 15,
    fontWeight: "bold",
  },
  missionItemLeftDesc: {},

  missionItemRight: {},
  missionItemRightComplete: {
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "red",
    fontWeight: "bold",
  },
  missionItemRightProgress: {
    color: "#555",
    fontSize: 12,
    alignSelf: "flex-end",
  },
  missionItemRightProgressBar: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "flex-end",
  },
});
