import React from "react";
import { Text, View, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import styles from "./styles";

export default function CoinDetailHeader(props) {
  const { image, symbol, marketCapRank } = props;
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="chevron-back" size={24} color="white" />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.symbol}>{symbol.toUpperCase()}</Text>
        <Text style={styles.rank}>#{marketCapRank}</Text>
      </View>
      <EvilIcons name="user" size={30} color="white" />
    </View>
  );
}
