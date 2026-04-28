import Header from "@/components/Header";
import { COLOR } from "@/constants/color";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
const HomeScreen = () => {
  return (
    <LinearGradient
      colors={[COLOR.background, COLOR.backgroundLight]}
      style={{ flex: 1 }}
    >
      <Header />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Hello World.</Text>
        <Link style={{ fontSize: 20, color: "blue" }} href={"/recipe"}>
          Recipe
        </Link>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>List Recipe</Text>
        <Link style={{ fontSize: 20, color: "blue" }} href={"/recipe/1"}>
          Recipe 1
        </Link>
        <Link style={{ fontSize: 20, color: "blue" }} href={"/recipe/22"}>
          Recipe 22
        </Link>
        <Link style={{ fontSize: 20, color: "blue" }} href={"/recipe/155"}>
          Recipe 155
        </Link>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
