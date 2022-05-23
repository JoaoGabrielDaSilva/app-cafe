import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Option, ToggleSwitch } from "../../components/ToggleSwitch";
import { theme } from "../../styles/theme";
import * as Location from "expo-location";

import { MainInfo } from "./MainInfo";
import { AdditionalInfo } from "./AdditionalInfo";
import { HourlyForecast } from "./HourlyForecast";

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
  const [selectedHour, setSelectedHour] = useState(0);

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

      console.log(selectedHour);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleChangeHour = (index: number) => {
    setSelectedHour(index);
  };

  useEffect(() => {
    getLocation();
  }, [selectedHour]);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: theme.spacing.xlg }}
        overScrollMode="never"
      >
        <ToggleSwitch
          options={optionsBase}
          onPress={selectOption}
          defaultValue="right"
        />
        <MainInfo />
        <AdditionalInfo />
        <HourlyForecast
          onSelectHour={handleChangeHour}
          selectedHour={selectedHour}
        />
      </ScrollView>
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
