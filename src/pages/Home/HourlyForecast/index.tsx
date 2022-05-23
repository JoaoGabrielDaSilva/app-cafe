import React from "react";
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  ForecastCard,
  ForecastCardProps,
} from "../../../components/ListItems/ForecastCard";
import { theme } from "../../../styles/theme";

const data: ForecastCardProps[] = [
  {
    temperature: 25,
    hour: new Date(),
    weather: "sunny",
  },
  {
    temperature: 25,
    hour: new Date(),
    weather: "sunny",
  },
  {
    temperature: 25,
    hour: new Date(),
    weather: "sunny",
  },
  {
    temperature: 25,
    hour: new Date(),
    weather: "sunny",
  },
  {
    temperature: 25,
    hour: new Date(),
    weather: "sunny",
  },
];

type Props = {
  onSelectHour: (index: number) => void;
  selectedHour?: number;
};

export const HourlyForecast = ({ selectedHour = 0, onSelectHour }: Props) => {
  return (
    <View>
      <Text style={styles.title}>Hourly Forecast</Text>
      <FlatList
        data={data}
        renderItem={({
          item,
          index,
        }: ListRenderItemInfo<ForecastCardProps>) => (
          <ForecastCard
            {...item}
            selected={index === selectedHour}
            style={styles.card}
            onPress={() => onSelectHour(index)}
          />
        )}
        keyExtractor={(_, index) => String(index)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: theme.spacing.xlg,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.lg),
    fontWeight: "bold",
    marginVertical: theme.spacing.xlg,
    marginLeft: theme.spacing.xlg,
  },
  card: {
    marginRight: theme.spacing.lg,
  },
});
