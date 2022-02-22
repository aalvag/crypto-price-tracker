import React from "react";
import { Image, Text, View, Dimensions, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LineChart } from "react-native-wagmi-charts";
import CoinDetailHeader from "./components/CoinDetailHeader";
import coin from "../../../assets/data/crypto.json";
import styles from "./styles";

export default function CoinDetail() {
  const {
    image: { small },
    symbol,
    name,
    prices,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = coin;
  const [coinValue, setCoinValue] = React.useState("1");
  const [usdValue, setUsdValue] = React.useState(
    current_price.usd.toFixed(2).toString()
  );

  const percentageColor =
    price_change_percentage_24h < 0 ? "red" : "green" || "white";

  const chartColor = current_price.usd > prices[0][1] ? "green" : "red";

  const screenWidth = Dimensions.get("window").width;

  const formatCurrency = ({ value }) => {
    "worklet";
    if (value === "") {
      if (current_price.usd < 1) {
        return `$${current_price.usd}`;
      }
      return `$${current_price.usd.toFixed(2)}`;
    }
    if (current_price.usd < 1) {
      return `$${parseFloat(value)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };

  const changeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setUsdValue((floatValue * current_price.usd).toString());
  };

  const changeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setCoinValue((floatValue / current_price.usd).toString());
  };
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <LineChart.Provider
        data={prices.map((price) => ({
          timestamp: price[0],
          value: price[1],
        }))}
      >
        <CoinDetailHeader
          image={small}
          symbol={symbol}
          marketCapRank={market_cap_rank}
        />
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <LineChart.PriceText
              style={styles.currentPrice}
              format={formatCurrency}
            />
          </View>
          <View
            style={{
              backgroundColor: percentageColor,
              paddingHorizontal: 5,
              paddingVertical: 7,
              borderRadius: 8,
              flexDirection: "row",
            }}
          >
            <FontAwesome
              name={price_change_percentage_24h < 0 ? "caret-down" : "caret-up"}
              size={20}
              color="white"
              style={{ alignSelf: "center", marginRight: 5 }}
            />
            <Text style={styles.priceChange}>
              {price_change_percentage_24h?.toFixed(2)} %
            </Text>
          </View>
        </View>
        <LineChart height={screenWidth / 2} width={screenWidth}>
          <LineChart.Path color={chartColor} />
          <LineChart.CursorCrosshair color={chartColor} />
        </LineChart>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ color: "white", alignSelf: "center" }}>
              {symbol.toUpperCase()}
            </Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={changeCoinValue}
              value={coinValue}
              placeholder="0.00"
              style={styles.input}
              maxLength={14}
            />
          </View>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ color: "white", alignSelf: "center" }}>USD</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={changeUsdValue}
              value={usdValue}
              placeholder="0.00"
              style={styles.input}
              maxLength={15}
            />
          </View>
        </View>
      </LineChart.Provider>
    </View>
  );
}
