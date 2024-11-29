import React from "react";
import { StyleSheet, Text, View } from "react-native";

const About = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Login Screen
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
