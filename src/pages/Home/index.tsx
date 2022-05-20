import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Option, ToggleSwitch } from "../../components/ToggleSwitch";
import { theme } from "../../styles/theme";
import * as Location from "expo-location";
import weatherServices from "../../services/weatherServices";
import { epochToDate } from "../../utils/epochToDate";
import { MainInfo } from "./MainInfo";

const optionsBase = [
  {
    text: "Today",
  },
  {
    text: "Tomorrow",
  },
];

export const Home = () => {
  const [location, setLocation] = useState(null);
  const [selectedOption, setSelectedOptions] = useState<Option>(optionsBase[0]);

  const selectOption = (option: Option) => {
    setSelectedOptions(option);
  };

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      const location = await Location.geocodeAsync("São Leopoldo");

      // const response = await weatherServices.getWeatherInfo({
      //   lat: location[0].latitude,
      //   lon: location[0].longitude,
      // });

      // console.log(response);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <ToggleSwitch
        options={optionsBase}
        onPress={selectOption}
        selected={selectedOption}
      />
      <MainInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: theme.background.primary,
  },
});
