import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
const Login = () => {
  return (
    <LinearGradient colors={["purple", "aqua"]} style={styles.container}>
      <Text
        style={{ textAlign: "center", marginVertical: 20, fontWeight: "bold" }}
      >
        Login Info
      </Text>
      {/* Formik */}
      <Formik
        initialValues={{
          name: "name",
          password: "password",
        }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange, errors }) => {
          return (
            <>
              <View style={styles.form}>

              
                <TouchableOpacity style={styles.input}>
                  <MaterialCommunityIcons name="email" style={styles.email} />
                  <TextInput
                    placeholder="user name"
                    style={{ flex: 1 }}
                    onChangeText={handleChange("name")}
                  />
                  <Text style={{ color: "red" }}>{errors.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.input}>
                  <MaterialCommunityIcons name="lock" style={styles.password} />
                  <TextInput
                    placeholder="user Password"
                    style={{ flex: 1 }}
                    onChangeText={handleChange("email")}
                  />
                </TouchableOpacity>
                <Text style={{ color: "red" }}>{errors.password}</Text>

                {/* BUTTON */}
                <LinearGradient
                  start={{ y: 0, x: 0 }}
                  end={{ x: 1, y: 0.3 }}
                  colors={["purple", "aqua"]}
                  style={styles.button}
                >
                  <TouchableOpacity onPress={handleSubmit}>
                    <Text
                      style={{
                        textAlign: "center",

                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Click me
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
                {/* signIn button */}
                <LinearGradient
                  start={{ x: 0.0, y: 0.25 }}
                  end={{ x: 0.5, y: 1.0 }}
                  // colors={["aqua", "#ff298d"]}
                  colors={["purple", "pink"]}
                  style={styles.button}
                >
                  <Text style={styles.buttonText} onPress={handleSubmit}>
                    Sign in with Facebook
                  </Text>
                </LinearGradient>
              </View>
            </>
          );
        }}
      </Formik>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    paddingHorizontal: 20,
  },
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "gray",
    paddingVertical: 10,
    width: "100%",
    flexDirection: "row",
    borderRadius: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  email: {
    fontSize: 30,
    marginHorizontal: 10,
    color: "rgb(500,140,140)",
  },
  password: {
    fontSize: 30,
    marginHorizontal: 10,
    color: "gold",
  },
  button: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    // margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});
