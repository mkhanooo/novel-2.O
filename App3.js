import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import Library from "./screens/Library";
import Mine from "./screens/Mine";
import Featured from "./screens/Featured";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function Routes() {
  function tabNav({ navigation }) {
    return (
      <Tab.Navigator
        initialRouteName="Library"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        activeTintColor="red"
        height="50"
        shifting={true}
        screenOptions={{
          height: 50,
          labelStyle: {
            fontSize: 14,
          },
          activeTintColor: "#F89800",
          style: {
            backgroundColor: "#2E2E2E",
            height: 50,
            borderWidth: 0,
          },
        }}
      >
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="Featured" component={Featured} />
        <Stack.Screen name="Mine" component={Mine} />
      </Tab.Navigator>
    );
  }

  const DrawerNavigator = ({ navigation }) => {
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#F89800",
          activeBackgroundColor: "#3F3F3F",
          inactiveTintColor: "#787878",
          tintColor: "red",
          labelStyle: {
            marginLeft: 5,
          },
        }}
        drawerContent={(props) => {
          return (
            <DrawerContentScrollView
              style={{ backgroundColor: "#303030", color: "white" }}
              {...props}
            >
              <View
                style={{
                  height: 140,
                  justifyContent: "center",
                  marginLeft: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => props.navigation.closeDrawer()}
                >
                  <Text>Close</Text>
                </TouchableOpacity>
              </View>
              <DrawerItemList {...props} />
            </DrawerContentScrollView>
          );
        }}
      >
        <Drawer.Screen name="Mine" component={tabNav} />
        <Drawer.Screen name="Featured" component={tabNav} />
        <Drawer.Screen name="Library" component={tabNav} />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="tabNav"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Mine" component={Mine} />
        <Stack.Screen name="Featured" component={Featured} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="tabNav" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
