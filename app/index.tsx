import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";

const index = () => {
  return (
    <View style={styles.main}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </Text>
      <View style={styles.linkSection}>
        <Link style={styles.button} href="/login">
          Log In
        </Link>
        <Link style={styles.button} href="/signup">
          Sign Up
        </Link>
        <Link href="/forget-password">Forget Password</Link>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  logo: {
    width: 200,
    objectFit: "cover",
  },
  text: {
    fontSize: 14,
    color: Colors.gray,
    textAlign: "center",
    width: 300,
  },
  linkSection: {
    marginTop: 42,
  },
});
