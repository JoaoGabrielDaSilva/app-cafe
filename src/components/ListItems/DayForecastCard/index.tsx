import React from "react";
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import LottieView from "lottie-react-native";

import icon from "../../../animations/lottie/raining.json";
import { theme } from "../../../styles/theme";
import { format } from "date-fns";
import { RFValue } from "react-native-responsive-fontsize";

export type DayForecastProps = {
  date: Date;
  temperature: number;
};

export type Props = {
  date: Date;
  temperature: number;
  style?: StyleProp<ViewStyle>;
};

const { width } = Dimensions.get("screen");

export const DayForecastCard = ({ temperature, date, style }: Props) => {
  const weekDay = format(date, "EEE");
  const formattedDate = format(date, "MMM d");

  return (
    <View style={[styles.container, style]}>
      <View style={styles.dateContainer}>
        <Text style={styles.weekDay}>{weekDay}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <Text style={styles.temperature}>{temperature}º</Text>
      <View>
        <LottieView style={styles.image} source={icon} autoPlay loop />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.background.secondary,
    borderRadius: theme.radii.sm,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateContainer: {},
  weekDay: {
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.sm),
  },
  date: {
    color: theme.text.secondary,
    fontSize: RFValue(theme.fontSize.sm),
  },
  temperature: {
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.md),
    fontWeight: "bold",
  },
  image: {
    height: width * 0.15,
  },
});
