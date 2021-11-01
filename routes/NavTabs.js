import * as React from "react";

import { Fontisto, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Main Tabs
import Library from "../screens/Library/index";
import FeaturedHeader from "../components/FeaturedHeader";
import Mine from "../screens/Mine";

// Top Tabs
import TopTabs from "./FeaturedTopTabs";
import ShowPost from "../screens/Mine/ShowPost";

const Tab = createBottomTabNavigator();

export default function NavTabs({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Featured"
      screenOptions={({ route }) => ({
        headerShown: false,
        height: 50,
        tabBarActiveTintColor: "#413ACA",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Posts"
        component={ShowPost}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Featured"
        component={TopTabs}
        options={({ route, navigation }) => ({
          headerTitle: () => <FeaturedHeader />,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="file-text" size={24} color={color} />
          ),
          headerShown: true,
          headerShadowVisible: false,
        })}
      />

      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
