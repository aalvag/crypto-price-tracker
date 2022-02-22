import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  name: {
    color: "white",
    fontSize: 15,
  },
  currentPrice: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 1,
  },
  priceContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceChange: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    padding: 10,
    fontSize: 15,
    color: "white",
  },
});

export default styles;
