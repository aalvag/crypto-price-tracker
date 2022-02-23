import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import millify from "millify";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const CoinItem = ({ marketCoin }) => {
  const {
    id,
    name,
    image,
    symbol,
    market_cap_rank,
    market_cap,
    price_change_percentage_24h,
    current_price,
  } = marketCoin;

  const navigation = useNavigation();

  const percentageColor =
    price_change_percentage_24h < 0 ? "red" : "green" || "white";

  return (
    <Pressable
      style={styles.coinContainer}
      onPress={() => {
        navigation.navigate("CoinDetail");
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          width: 30,
          height: 30,
          marginRight: 10,
          alignSelf: "center",
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.rank}>{market_cap_rank}</Text>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <FontAwesome
            name={price_change_percentage_24h < 0 ? "caret-down" : "caret-up"}
            size={20}
            color={percentageColor}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={{ color: percentageColor }}>
            {price_change_percentage_24h?.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>$ {current_price.toFixed(2)}</Text>
        <Text style={{ color: "white" }}>MCap {millify(market_cap)}</Text>
      </View>
    </Pressable>
  );
};

export default CoinItem;
