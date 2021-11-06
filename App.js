import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainIndex from "./Al-Alhadi-Resturent/MainIndex";

const Home = () => {
  return (
    <View>
      <Text style={tw`text-red-300 text-center font-bold uppercase`}>
        Home page
      </Text>
      <TouchableOpacity
        style={tw`flex items-center justify-center border-2 border-blue-700 bg-purple-400 py-3 rounded-2xl mx-2`}
      >
        <Text style={tw`uppercase font-bold text-pink-300`}>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};
const Login = () => {
  return (
    <Text style={tw`text-red-300 uppercase font-bold text-center`}>
      wellcome to the login page
    </Text>
  );
};
export default function App() {
  const Tab = createBottomTabNavigator();
  const Navigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarActiveBackgroundColor: "lightgray",
        }}
      >
        <Tab.Screen
          name="HOME"
          component={Home}
          options={{
            title: "Home Page",
            // headerTitleAlign: "center",
            headerTintColor: "tomato",
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="home"
                style={styles.icon}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="login"
                style={styles.icon}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    // <NavigationContainer>
    //   <Navigator />
    // </NavigationContainer>
    <MainIndex />
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  icon: {
    backgroundColor: "lightgray",
    padding: 5,
    borderRadius: 20,
  },
});
