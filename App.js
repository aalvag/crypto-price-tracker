import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import CoinDetail from "./src/screens/CoinDetailScreen";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <CoinDetail />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    marginTop: 50,
  },
});
