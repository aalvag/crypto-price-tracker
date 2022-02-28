import axios from "axios";
axios.defaults.baseURL = "https://api.coingecko.com/api/v3/coins";

export const getCoinDetails = async (coinId) => {
  try {
    const { data } = await axios.get(`/${coinId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCoinMarketChart = async (coinId, selectedRange) => {
  try {
    const { data } = await axios.get(
      `/${coinId}/market_chart?vs_currency=usd&days=1&interval=hourly`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMarketData = async (pageNumber = 1) => {
  try {
    const { data } = await axios.get(
      `/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
