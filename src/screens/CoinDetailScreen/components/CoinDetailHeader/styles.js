import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 25,
    height: 25,
  },
  tickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  symbol: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 5,
    fontSize: 17,
  },
  rank: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
});

export default styles;
