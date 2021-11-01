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

export default function Privacy() {
  return (
    <ScrollView>
      <View style={styles.pageWrapper}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Feather
              name="arrow-left"
              style={styles.headerIcon}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.headerTitle}>Service Agreement</Text>
          </View>
          <View style={styles.headerRight}>
            <FontAwesome style={styles.headerIcon} name="refresh" />
          </View>
        </View>
        <View style={styles.bodyWrapper}>
          <Text style={styles.textPara}>
            This Privacy Policy ("Policy") describes the manner in which
            NovelCat, operating the NovelCat service ("NovelCat", "we", or "us")
            as well as alll related websites networks, applications,and other
            services provided by us and on which a link to this Policy is
            displayed (collectively, together with the Site, our "Service")
            collect, use, disclose and otherwise process Personal Information.
            "Personal Information" means any inforamtion relating to an
            identified or identifiable individual.
          </Text>
          <Text style={styles.textPara}>
            In NovelCat, we pay great attention to yourr private information, We
            hope you will understand how NovelCat uses your information while
            using NovelCat services. Therefore, I hope you will take the time to
            read the following policy carefully.
          </Text>
          <Text style={styles.textPara}>
            Information collected or received from you
          </Text>
          <Text style={styles.textPara}>
            We collect and process basic information for running our business
            and provide our service to you. You can usually choose what
            information you want to provide, but in some cases we need to
            require some certain information which help not only you but also us
            provide service.
          </Text>
          <Text style={styles.textPara}>
            This Privacy Policy ("Policy") describes the manner in which
            NovelCat, operating the NovelCat service ("NovelCat", "we", or "us")
            as well as alll related websites networks, applications,and other
            services provided by us and on which a link to this Policy is
            displayed (collectively, together with the Site, our "Service")
            collect, use, disclose and otherwise process Personal Information.
            "Personal Information" means any inforamtion relating to an
            identified or identifiable individual.
          </Text>
          <Text style={styles.textPara}>
            In NovelCat, we pay great attention to yourr private information, We
            hope you will understand how NovelCat uses your information while
            using NovelCat services. Therefore, I hope you will take the time to
            read the following policy carefully.
          </Text>
          <Text style={styles.textPara}>
            Information collected or received from you
          </Text>
          <Text style={styles.textPara}>
            We collect and process basic information for running our business
            and provide our service to you. You can usually choose what
            information you want to provide, but in some cases we need to
            require some certain information which help not only you but also us
            provide service.
          </Text>
          <Text style={styles.textPara}>
            This Privacy Policy ("Policy") describes the manner in which
            NovelCat, operating the NovelCat service ("NovelCat", "we", or "us")
            as well as alll related websites networks, applications,and other
            services provided by us and on which a link to this Policy is
            displayed (collectively, together with the Site, our "Service")
            collect, use, disclose and otherwise process Personal Information.
            "Personal Information" means any inforamtion relating to an
            identified or identifiable individual.
          </Text>
          <Text style={styles.textPara}>
            In NovelCat, we pay great attention to yourr private information, We
            hope you will understand how NovelCat uses your information while
            using NovelCat services. Therefore, I hope you will take the time to
            read the following policy carefully.
          </Text>
          <Text style={styles.textPara}>
            Information collected or received from you
          </Text>
          <Text style={styles.textPara}>
            We collect and process basic information for running our business
            and provide our service to you. You can usually choose what
            information you want to provide, but in some cases we need to
            require some certain information which help not only you but also us
            provide service.
          </Text>
          <Text style={styles.textPara}>
            This Privacy Policy ("Policy") describes the manner in which
            NovelCat, operating the NovelCat service ("NovelCat", "we", or "us")
            as well as alll related websites networks, applications,and other
            services provided by us and on which a link to this Policy is
            displayed (collectively, together with the Site, our "Service")
            collect, use, disclose and otherwise process Personal Information.
            "Personal Information" means any inforamtion relating to an
            identified or identifiable individual.
          </Text>
          <Text style={styles.textPara}>
            In NovelCat, we pay great attention to yourr private information, We
            hope you will understand how NovelCat uses your information while
            using NovelCat services. Therefore, I hope you will take the time to
            read the following policy carefully.
          </Text>
          <Text style={styles.textPara}>
            Information collected or received from you
          </Text>
          <Text style={styles.textPara}>
            We collect and process basic information for running our business
            and provide our service to you. You can usually choose what
            information you want to provide, but in some cases we need to
            require some certain information which help not only you but also us
            provide service.
          </Text>
          <Text style={styles.textPara}>
            This Privacy Policy ("Policy") describes the manner in which
            NovelCat, operating the NovelCat service ("NovelCat", "we", or "us")
            as well as alll related websites networks, applications,and other
            services provided by us and on which a link to this Policy is
            displayed (collectively, together with the Site, our "Service")
            collect, use, disclose and otherwise process Personal Information.
            "Personal Information" means any inforamtion relating to an
            identified or identifiable individual.
          </Text>
          <Text style={styles.textPara}>
            In NovelCat, we pay great attention to yourr private information, We
            hope you will understand how NovelCat uses your information while
            using NovelCat services. Therefore, I hope you will take the time to
            read the following policy carefully.
          </Text>
          <Text style={styles.textPara}>
            Information collected or received from you
          </Text>
          <Text style={styles.textPara}>
            We collect and process basic information for running our business
            and provide our service to you. You can usually choose what
            information you want to provide, but in some cases we need to
            require some certain information which help not only you but also us
            provide service.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    alignItems: "center",
    minHeight: 50,
    paddingHorizontal: "5%",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },
  headerIcon: {
    fontSize: 22,
    color: "#777",
  },
  bodyWrapper: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  textPara: {
    alignSelf: 'flex-start',
    color: "#777",
    paddingVertical: "5%",
  },
});
