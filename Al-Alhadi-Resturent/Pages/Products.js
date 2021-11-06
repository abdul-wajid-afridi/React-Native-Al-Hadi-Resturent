import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

const Users = [
  { id: 0, name: "david", image: require("../Images/burger.jpg") },
  { id: 1, name: "jamaika", image: require("../Images/cake.jpg") },
  { id: 2, name: "rose", image: require("../Images/Chart.jpg") },
];
const Contact = () => {
  const [Index, setIndex] = useState(0);
  let user = Users[Index];
  const Items = [
    { id: 1, name: "Karaye", image: require("../Images/karaye.jpg") },
    { id: 2, name: "omlet", image: require("../Images/omlet.jpg") },
    { id: 3, name: "pizza", image: require("../Images/pixa.jpg") },
    { id: 4, name: "stack", image: require("../Images/stack.jpg") },
    { id: 5, name: "Hand Burger", image: require("../Images/handburger.jpg") },
    { id: 6, name: "Ticka", image: require("../Images/ticka.jpg") },
  ];

  const UserHandler = () => {
    const Limit = Users.length;
    const Add = Index + 1;

    Add == Limit ? setIndex(Index - Limit + 1) : setIndex(Index + 1);
  };
  setTimeout(() => {
    UserHandler();
  }, 3000);
  return (
    <View>
      <Text
        style={{ textAlign: "center", paddingVertical: 20, fontWeight: "bold" }}
      >
        Our Products
      </Text>

      {/* images gallary */}
      <View style={styles.Gallary}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={styles.Card}>
                <Image source={user.image} style={styles.carasol} />
                <Text>{user.name}</Text>
                <Text style={styles.hr}></Text>
              </View>
            </>
          }
          data={Items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.Card}>
                  <Image style={styles.img} source={item.image} />
                  <Text>{item.name}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  Card: {
    // flex: 1,
    alignItems: "center",
    borderWidth: 0,
    borderColor: "gray",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    overflow: "hidden",
    marginHorizontal: 10,
    marginVertical: 10,
    marginBottom: 20,
  },
  carasol: {
    height: 300,
    width: "100%",
  },

  img: {
    width: "100%",
    height: 200,
  },
  hr: {
    borderWidth: 1,
    borderColor: "transparent",
    width: "100%",
    borderBottomColor: "gray",
  },
  Gallary: {
    // flex: 1,
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
