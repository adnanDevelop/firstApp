import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Welcome to the home page
      </Text>
      <Link href="/about">Go to the about page</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
