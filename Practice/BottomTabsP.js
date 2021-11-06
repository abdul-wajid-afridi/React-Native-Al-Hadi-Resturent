import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Home = () => {
  return (
    <View>
      <Text>Home Page</Text>
    </View>
  );
};
const Login = () => {
  return (
    <View>
      <Text>Login Page</Text>
    </View>
  );
};
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "lightgrey",
        tabBarInactiveTintColor: "dodgerblue",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="login" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const BottomTabsP = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default BottomTabsP;

const styles = StyleSheet.create({});
