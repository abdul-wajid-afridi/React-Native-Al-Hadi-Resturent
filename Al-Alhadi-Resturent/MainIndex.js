import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import GitHub from "./Pages/GitHub";

const MainIndex = () => {
  const Tab = createBottomTabNavigator();
  const Navigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: "lightgray",
          tabBarActiveTintColor: "white",
          tabBarInactiveBackgroundColor: "black",
          tabBarActiveBackgroundColor: "dodgerblue",
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
          component={Home}
          name="Home"
        />
        <Tab.Screen
          name="Products"
          component={Products}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="package"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Contact us"
          component={Contact}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="contacts"
                color={color}
                size={size}
              />
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
        <Tab.Screen
          name="GitHub Users"
          component={GitHub}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name={"github"}
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default MainIndex;

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    color: "red",
  },
  head: tw`
  text-2xl flex justify-center items-center
  `,
  txt: tw`
    text-3xl font-bold text-red-600`,
});
