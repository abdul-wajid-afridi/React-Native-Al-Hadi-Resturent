import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const GitHub = () => {
  const url = "https://api.github.com/users";
  const [user, setuser] = useState([]);

  const GetUsers = async () => {
    const GetUrl = await fetch(url);
    const Data = await GetUrl.json();
    setuser(Data);
  };
  useEffect(() => {
    GetUsers();
  }, []);
  return (
    <ScrollView>
      <Text>GitHub Users</Text>
      {user.map((user) => {
        return (
          <View key={user.id}>
            <Text>{user.id}</Text>
            <Image
              source={{ uri: user.avatar_url }}
              style={{ height: 100, width: 100 }}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default GitHub;

const styles = StyleSheet.create({});
