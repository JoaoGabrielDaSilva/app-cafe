import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { dateToHour } from "../../../utils/dateToHour";

import icon from "../../../animations/lottie/raining.json";
import { theme } from "../../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  interpolateColors,
  interpolateNode,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  WithSpringConfig,
  withTiming,
} from "react-native-reanimated";

type Weather = "rainy" | "sunny";

export type ForecastCardProps = RectButtonProps & {
  temperature: number;
  weather: Weather;
  hour: Date;
  selected?: boolean;
};

const { width } = Dimensions.get("screen");

export const ForecastCard = ({
  temperature,
  weather,
  hour,
  selected,
  style,
  ...props
}: ForecastCardProps) => {
  const status = useDerivedValue(() => {
    const config: WithSpringConfig = {
      overshootClamping: true,
    };

    if (selected) {
      return withSpring(1, config);
    }
    return withSpring(0, config);
  }, [selected]);

  const selectedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: status.value,
        },
      ],
      borderRadius: interpolate(
        status.value,
        [0, 1],
        [100, theme.radii.md],
        Extrapolate.CLAMP
      ),
    };
  });
  const animatedHourStyles = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        status.value,
        [0, 1],
        [theme.text.secondary, theme.text.primary]
      ),
    };
  });

  return (
    <RectButton {...props} style={[style, styles.container]}>
      <Animated.View style={[selectedStyles, styles.selectedBackground]} />
      <View style={styles.content}>
        <Text style={styles.temperature}>{temperature}º</Text>
        <LottieView style={styles.image} source={icon} autoPlay loop />
        <Animated.Text style={[styles.hour, animatedHourStyles]}>
          {dateToHour(hour)}
        </Animated.Text>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.35,
    height: width * 0.5,
    borderRadius: theme.radii.md,
    backgroundColor: theme.background.secondary,
  },
  selectedBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.background.tertiary,
    position: "absolute",
  },
  content: {
    padding: theme.spacing.md,
    alignItems: "center",
  },
  temperature: {
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.md),
    fontWeight: "600",
  },
  image: { width: width * 0.4, height: width * 0.3 },
  hour: {
    fontSize: RFValue(theme.fontSize.sm),
  },
});
