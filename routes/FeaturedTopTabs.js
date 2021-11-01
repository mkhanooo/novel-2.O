import * as React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Featured Top Tabs
import TopHome from "../screens/Featured/FeaturedScreens/Home";
import TopGenres from "../screens/Featured/FeaturedScreens/Genres";
import TopRanking from "../screens/Featured/FeaturedScreens/Ranking";

const TopTab = createMaterialTopTabNavigator();

export default function TopTabs({ navigation }) {
  return (
    <TopTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#413ACA",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 50,
          width: "100%",
          shadowOpacity: 0,
          elevation: 0,
          borderBottomWidth: 0,
        },
        // tabBarItemStyle: { width: "100%" },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "bold",
          textTransform: "capitalize",
        },
        tabBarActiveTintColor: "#413ACA",
        tabBarInactiveTintColor: "#777",
        tabBarPressColor: "transparent",
        tabBarIndicatorStyle: {
          backgroundColor: "#413ACA",
          // width: "10%",
        },
        tabBarIndicatorContainerStyle: {
          flex: 1,
          justifyContent: "center",
        },
      })}
    >
      <TopTab.Screen name="Home" component={TopHome} />
      <TopTab.Screen name="Genres" component={TopGenres} />
      <TopTab.Screen name="Ranking" component={TopRanking} />
    </TopTab.Navigator>
  );
}
