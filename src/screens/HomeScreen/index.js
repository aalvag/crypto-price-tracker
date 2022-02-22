import React from "react";
import { StyleSheet, FlatList } from "react-native";
import CoinItem from "../../components/coinItem";
import cryptocurrencies from "../../../assets/data/cryptocurrencies.json";

export default function HomeScreen() {
  return (
    <FlatList
      data={cryptocurrencies}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
    />
  );
}

const styles = StyleSheet.create({});
