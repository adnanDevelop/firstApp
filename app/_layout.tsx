import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { Colors } from "@/constants/Colors";

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="/login" options={{ headerShown: false }} />
        <Stack.Screen name="/signup" options={{ headerShown: false }} />
        {/* <Stack.Screen name="about" /> */}
      </Stack>
    </>
  );
}
