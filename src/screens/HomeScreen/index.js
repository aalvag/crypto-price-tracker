import React from "react";
import { StyleSheet, FlatList, RefreshControl } from "react-native";
import CoinItem from "../../components/coinItem";
import { getMarketData } from "../../services/request";

export default function HomeScreen() {
  const [coins, setCoins] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchcoins = async (pageNumber) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinData = await getMarketData(pageNumber);
    setCoins((prevCoins) => {
      return [...prevCoins, ...coinData];
    });
    setLoading(false);
  };

  const onRefresh = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinData = await getMarketData();
    setCoins(coinData);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchcoins();
  }, []);

  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
      onEndReached={() => fetchcoins(coins.length / 50 + 1)}
      keyExtractor={(item) => {
        item.id;
      }}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor="#fff"
          onRefresh={onRefresh}
        />
      }
    />
  );
}

const styles = StyleSheet.create({});
