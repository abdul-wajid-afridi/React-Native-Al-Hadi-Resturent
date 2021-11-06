import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
});

const Home = () => {
  return (
    <LinearGradient
      colors={["aqua", "purple"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.Gradient}
    >
      <Text style={styles.Header}>Contact us</Text>
      <View style={styles.container}>
        <Formik
          initialValues={{
            name: "name",
            email: "email",
          }}
          onSubmit={(value) => console.log(value)}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors }) => {
            return (
              <>
                <TextInput
                  style={styles.inputs}
                  placeholder="Name"
                  onChangeText={handleChange("name")}
                />
                <Text style={{ color: "red" }}>{errors.name}</Text>
                <TextInput
                  style={styles.inputs}
                  placeholder="email"
                  onChangeText={handleChange("email")}
                />
                <Text style={{ color: "red" }}>{errors.email}</Text>
                <LinearGradient
                  title="Submit"
                  onPress={handleSubmit}
                  start={{ x: 0.1, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.btn}
                  colors={["purple", "aqua"]}
                >
                  <TouchableOpacity style={styles.Touch}>
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      Submit
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </>
            );
          }}
        </Formik>
      </View>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  Gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Header: {
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 20,
  },
  btn: {
    // width: "80%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    borderRadius: 20,
  },
  Touch: {
    width: 200,
    // paddingHorizontal: "35%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
  },
  inputs: {
    width: 300,
    borderWidth: 1,
    borderColor: "white",
    marginVertical: 20,
    paddingVertical: 8,
    borderRadius: 30,
    overflow: "hidden",
  },
});
