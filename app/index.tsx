import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background,
      }}
    >
      <Image
        source={require("../assets/images/logo.svg")}
        // style={styles.image}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Welcome to the home page
      </Text>
      <Link href="/about">Go to the about page</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
