import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
      // screenOptions={{
      //   tabBarActiveBackgroundColor: "tomato",
      //   tabBarInactiveBackgroundColor: "lightgrey",
      //   tabBarInactiveTintColor: "dodgerblue",
      // }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const BottamsTabs = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default BottamsTabs;

const styles = StyleSheet.create({});
