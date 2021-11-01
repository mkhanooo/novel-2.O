import * as React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Recharge Top Tabs
import TopMissions from "../screens/Mine/Rewards/Missions";
import TopActivity from "../screens/Mine/Rewards/ActivityCenter";

const TopTab = createMaterialTopTabNavigator();

export default function RechargeTopTabs({ navigation }) {
  return (
    <TopTab.Navigator
      initialRouteName="Activity"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "rgba(65, 58, 202,1)",
          height: 50,
          width: "100%",
          shadowOpacity: 0,
          elevation: 0,
          borderBottomWidth: 0,
        },
        // tabBarItemStyle: { widthx: "100%" },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "bold",
          textTransform: "capitalize",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
        tabBarPressColor: "transparent",
        tabBarIndicatorStyle: {
          backgroundColor: "#fff",
        },
        tabBarIndicatorContainerStyle: {
          flex: 1,
          justifyContent: "center",
        },
      })}
    >
      <TopTab.Screen name="Missions" component={TopMissions} />
      <TopTab.Screen
        name="Activity"
        options={{ title: "Activity Center" }}
        component={TopActivity}
      />
    </TopTab.Navigator>
  );
}
