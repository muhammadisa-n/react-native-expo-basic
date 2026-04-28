import Header from "@/components/Header";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const DetailRecipe = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Header btnBack={true} />
      <Text>DetailRecipe id : {id}</Text>
    </View>
  );
};

export default DetailRecipe;
