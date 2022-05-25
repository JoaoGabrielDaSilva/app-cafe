import { addDays } from "date-fns/esm";
import React, { useState } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import {
  DayForecastCard,
  DayForecastProps,
} from "../../components/ListItems/DayForecastCard";
import { Option, ToggleSwitch } from "../../components/ToggleSwitch";
import { theme } from "../../styles/theme";
import { randomNumberInRange } from "../../utils/randomNumberInRange";

const optionsBase = [
  {
    text: "This Week",
  },
  {
    text: "Next Week",
  },
];

const today = new Date();

const { thisWeek, nextWeek } = Array.from({ length: 7 }).reduce(
  (acc, _, index) => {
    return {
      thisWeek: [
        ...acc.thisWeek,
        {
          date: addDays(today, index),
          temperature: randomNumberInRange(12, 32),
        },
      ],
      nextWeek: [
        ...acc.nextWeek,
        {
          date: addDays(today, index + 7),
          temperature: randomNumberInRange(12, 32),
        },
      ],
    };
  },
  {
    thisWeek: [],
    nextWeek: [],
  }
);

console.log(thisWeek);

export const Schedule = () => {
  const [selectedOption, setSelectedOptions] = useState<Option>(optionsBase[0]);

  const selectOption = (option: Option) => {
    setSelectedOptions(option);
  };

  return (
    <View style={styles.container}>
      <ToggleSwitch options={optionsBase} onPress={selectOption} />

      <FlatList
        data={selectedOption.text === "This Week" ? thisWeek : nextWeek}
        keyExtractor={(_, index) => String(index)}
        overScrollMode="never"
        contentContainerStyle={{
          paddingBottom: theme.spacing.lg,
          paddingTop: theme.spacing.sm,
        }}
        renderItem={({ item }: ListRenderItemInfo<DayForecastProps>) => (
          <DayForecastCard {...item} style={styles.card} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginTop: theme.spacing.lg,
    marginHorizontal: theme.spacing.lg,
  },
});
