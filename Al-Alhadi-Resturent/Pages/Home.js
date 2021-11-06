import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const Home = () => {
  const Users = [
    { id: 1, name: "Karaye", image: require("../Images/karaye.jpg") },
    { id: 2, name: "omlet", image: require("../Images/omlet.jpg") },
    { id: 3, name: "pizza", image: require("../Images/pixa.jpg") },
    { id: 4, name: "stack", image: require("../Images/stack.jpg") },
    { id: 5, name: "Hand Burger", image: require("../Images/handburger.jpg") },
    { id: 6, name: "Ticka", image: require("../Images/ticka.jpg") },
  ];
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          paddingVertical: 20,
        }}
      >
        Home page
      </Text>
      {/* {Users.map((item) => { */}
      <View style={styles.Gallary}>
        <FlatList
          data={Users}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Image source={item.image} style={styles.img} />
                <Text>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
      {/* })} */}
      {/* <FlatList
          data={Users}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Image source={item.image} style={styles.img} />
                <Text>{item.name}</Text>
              </View>
            );
          }}
        /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  Gallary: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderWidth: 0,
    borderColor: "gray",
    marginHorizontal: 10,
    width: 150,
    marginVertical: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    overflow: "hidden",
  },
  img: {
    height: 200,
    width: "100%",
  },
});
