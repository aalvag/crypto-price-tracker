import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CoinDetail from "../screens/CoinDetailScreen";
import BottomTabNavigator from "./bottomTabNavigator";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CoinDetail" component={CoinDetail} />
    </Stack.Navigator>
  );
}
