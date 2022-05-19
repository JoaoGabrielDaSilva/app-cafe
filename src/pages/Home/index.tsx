import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Option, ToggleSwitch } from "../../components/ToggleSwitch";
import { theme } from "../../styles/theme";

const optionsBase = [
  {
    text: "Today",
  },
  {
    text: "Tomorrow",
  },
];

export const Home = () => {
  const [selectedOption, setSelectedOptions] = useState<Option>(optionsBase[0]);

  const selectOption = (option: Option) => {
    setSelectedOptions(option);
  };

  console.log(selectedOption);

  return (
    <View style={styles.container}>
      <ToggleSwitch
        options={optionsBase}
        onPress={selectOption}
        selected={selectedOption}
      />
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
