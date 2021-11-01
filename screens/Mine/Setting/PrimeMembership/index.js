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

export default function PrimeMembership() {
  const carddata = [
    {
      icon1: "gift",
      text1: "Daily Claim Extra Vouchers",
      icon2: "diamond",
      text2: "Additional 900 Gems Monthly",
      icon3: "folder-o",
      text3: "Unlimited Reading Tickets",
    },
    {
      icon1: "gift",
      text1: "Daily Claim Extra Vouchers",
      icon2: "diamond",
      text2: "Additional 900 Gems Monthly",
      icon3: "folder-o",
      text3: "Unlimited Reading Tickets",
    },
  ];
  return (
    <ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.mainBody}>
        <View style={styles.uppertextBox}>
          <View style={styles.uppertext1}>
            <Text style={styles.uppertext}>{`Explore Prime Offer`}</Text>
            <Text style={styles.uppertext}> Claim Extraordinary Rewards</Text>
          </View>
        </View>

        <View style={styles.middleBody}>
          <View style={styles.primebenifitBox}>
            <Text style={styles.primetext}>Prime Benefits</Text>
            <Text style={styles.primetext}>{`View all >`}</Text>
          </View>
          <View style={{ height: 350, height: 170 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {carddata.map((item, i) => {
                return (
                  <View style={styles.cardmainbody} key={i}>
                    <View style={styles.cardtextbox1}>
                      <View style={styles.iconbox1}>
                        <FontAwesome
                          style={styles.cardicon}
                          name={item.icon1}
                          size={24}
                        />
                      </View>
                      <Text style={styles.cardtext}>{item.text1}</Text>
                    </View>
                    <View style={styles.cardtextbox2}>
                      <View style={styles.iconbox2}>
                        <FontAwesome
                          style={styles.cardicon}
                          name={item.icon2}
                          size={24}
                        />
                      </View>
                      <Text style={styles.cardtext}>{item.text2}</Text>
                    </View>
                    <View style={styles.cardtextbox3}>
                      <View style={styles.iconbox3}>
                        <FontAwesome
                          style={styles.cardicon}
                          name={item.icon3}
                          size={24}
                        />
                      </View>
                      <Text style={styles.cardtext}>{item.text3}</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.upgrademainBox}>
            <View style={styles.upgradebox}>
              <View style={styles.leftupgradebox}>
                <Text style={{ fontWeight: "bold" }}>Rs 11,200.00/year</Text>
                <Text style={{ fontSize: 12 }}>{"(save US$15)"}</Text>
              </View>
              <View style={styles.rightupgradebox}>
                <Text style={{ fontWeight: "bold", color: "#E7B175" }}>
                  Upgrade
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.upgrademainBox}>
            <View style={styles.upgradebox}>
              <View style={styles.leftupgradebox}>
                <Text style={{ fontWeight: "bold" }}>Rs 1,100.00/month</Text>
                <Text style={{ fontSize: 12 }}>{"(save US$15)"}</Text>
              </View>
              <View style={styles.rightupgradebox}>
                <Text style={{ fontWeight: "bold", color: "#E7B175" }}>
                  Upgrade
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.lowerupgradetextbox}>
            <Text style={styles.lowerupgradetext}>
              Renew automatically. Cancel anytime through GooglePlay.
            </Text>
          </View>
          <View style={styles.exclusivetextbox}>
            <Text style={styles.exclusivetext}>Exlusive for Newcomer</Text>
          </View>
          <View style={styles.exclusiveBox}>
            <View style={styles.leftexclusivetextbox}>
              <FontAwesome5 name="box-open" size={35} color="#FDD001" />
              <Text style={styles.leftexclusivetext}>
                Obtain 1000 Coins at Once
              </Text>
            </View>
            <View style={styles.rightexclusiveicon}>
              <FontAwesome name="lock" size={24} color="lightgrey" />
            </View>
          </View>
          <View style={styles.primebenifitBox}>
            <Text style={styles.primetext}>Prime Exclusive Zone</Text>
            <Text style={styles.primetext}>{`View all >`}</Text>
          </View>
          <View style={styles.exclusivezoneBox}>
            <View style={styles.exclusivezonepicture}>
              <Image
                style={styles.exzonepicture}
                source={require("../../../../assets/images/novel2.jpg")}
              />
            </View>
            <View style={styles.exzonetextbox}>
              <View style={styles.excluzonetextbox}>
                <Text style={styles.excluzonetxt1}>Excellent Collection</Text>
              </View>
              <Text>Exclusive for Prime</Text>
            </View>
          </View>
          <View style={styles.tipsTextBox}>
            <View style={styles.tipsText}>
              <Text style={styles.tips}>About Prime</Text>
            </View>
            <View style={styles.tipsList}>
              <Text>
                1.As prime is purchased, it will be effective in 24 hours and
                you can the corresponding benefits.
              </Text>
              <Text>2.Prime benefits can be availabe for one account.</Text>
              <Text>
                3.Praise Tickets are only valid for current month. Please pay
                attention.
              </Text>

              <Text>
                4.Prime expenses will be deducted by Google automatically. If
                the deduction is successful, prime will be extended. If you want
                to cancel automatic deduction, please go to GooglePlay Store.
              </Text>
              <TouchableOpacity>
                <Text style={styles.helpCenterText}>
                  Terms and Conditon and Privacy Policy.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainBody: {},
  uppertextBox: {
    backgroundColor: "#B6B7BF",
    height: 120,
  },
  uppertext1: { paddingTop: 15, alignItems: "center" },
  uppertext: {
    fontWeight: "600",
    fontSize: 22,
  },
  middleBody: {
    backgroundColor: "white",
    marginTop: -20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  primebenifitBox: {
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 15,
    marginRight: 15,
  },
  primetext: {
    fontWeight: "bold",
    fontSize: 15,
  },
  cardmainbody: {
    backgroundColor: "#373A43",
    height: 150,
    width: 330,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 18,
  },
  cardtextbox1: {
    flexDirection: "row",
    paddingTop: 10,
  },
  cardtextbox2: {
    flexDirection: "row",
    paddingTop: 10,
  },
  cardtextbox3: {
    flexDirection: "row",
    paddingTop: 10,
  },
  iconbox1: {
    width: 33,
    height: 33,
    backgroundColor: "#FCDB40",
    borderRadius: 100,
    marginLeft: 15,
    paddingTop: 4,
    alignItems: "center",
  },
  iconbox2: {
    width: 33,
    height: 33,
    backgroundColor: "#FF5D7F",
    borderRadius: 100,
    marginLeft: 15,
    paddingTop: 4,
    alignItems: "center",
  },
  iconbox3: {
    width: 33,
    height: 33,
    backgroundColor: "#25AE84",
    borderRadius: 100,
    marginLeft: 15,
    paddingTop: 4,
    alignItems: "center",
  },
  cardicon: {
    color: "white",
  },
  cardtext: {
    color: "white",
    paddingTop: 7,
    paddingLeft: 20,
  },
  upgrademainBox: {
    marginTop: 10,
  },
  upgradebox: {
    height: 50,
    width: 280,
    backgroundColor: "#E7B175",
    alignSelf: "center",
    borderRadius: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftupgradebox: {
    width: 180,
    justifyContent: "center",
    alignItems: "center",
  },

  rightupgradebox: {
    height: 50,
    width: 100,
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80,
    backgroundColor: "#7c7979",
    justifyContent: "center",
    alignItems: "center",
  },
  lowerupgradetextbox: {
    marginLeft: 15,
    marginTop: 5,
  },
  lowerupgradetext: {
    fontSize: 12,
    color: "grey",
  },
  exclusivetextbox: {
    marginTop: 10,
    marginLeft: 15,
  },
  exclusivetext: {
    fontWeight: "bold",
    fontSize: 15,
  },
  exclusiveBox: {
    height: 75,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "white",
  },
  leftexclusivetextbox: {
    flexDirection: "row",
    paddingTop: 15,
    paddingLeft: 10,
  },
  leftexclusivetext: {
    paddingTop: 5,
    paddingLeft: 10,
    fontWeight: "600",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  rightexclusiveicon: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 15,
    paddingBottom: 12,
  },
  exclusivezoneBox: {
    height: 150,
    backgroundColor: "white",
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    flexDirection: "row",
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  exclusivezonepicture: {
    paddingTop: 10,
    paddingLeft: 8,
  },
  exzonepicture: {
    height: 130,
    width: 100,
    borderRadius: 5,
  },
  exzonetextbox: {
    justifyContent: "center",
    paddingLeft: 15,
  },
  excluzonetextbox: {
    backgroundColor: "white",
  
  },
  excluzonetxt1: {
    fontSize: 18,
    fontWeight: "600",
  },
  excluzonetxt2: {
    color: "grey",
  },
  tipsTextBox: {
    marginTop: 10,
    marginLeft: 15,
    paddingBottom: 20,
    marginRight: 10,
  },
  tips: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 3,
  },
  tipsList: {},
  tipsHelpCenter: {},
  helpCenterText: {
    textDecorationLine: "underline",
    color: "#67A2EE",
    fontSize: 15,
  },
});
