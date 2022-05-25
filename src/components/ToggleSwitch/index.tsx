import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  interpolateColor,
  interpolateNode,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  WithSpringConfig,
  withTiming,
} from "react-native-reanimated";
import { theme } from "../../styles/theme";

const { width } = Dimensions.get("screen");

export type Option = {
  text: string;
};

type Side = "left" | "right";

type Props = {
  options: Option[];
  onPress: (option: Option) => void;
};

const INPUT_RANGE = [0, 1];

export const ToggleSwitch = ({
  options,
  onPress,
  defaultValue = "left",
}: Props) => {
  const position = defaultValue === "left" ? 0 : 1;

  const translateX = useSharedValue(position);
  const [value, setValue] = useState(options[position].text);

  const indicatorStyles = useAnimatedStyle(() => {
    return {
      left: interpolate(translateX.value, INPUT_RANGE, [0, width * 0.3]),
    };
  });

  const toggleAnimation = () => {
    const config: WithSpringConfig = {
      damping: 30,
      stiffness: 300,
    };

    translateX.value = translateX.value
      ? withSpring(0, config)
      : withSpring(1, config);
  };

  const handlePress = (item: Option) => {
    if (item.text === value) return;

    toggleAnimation();
    onPress(item);
    setValue(item.text);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.indicator, indicatorStyles]} />

      {options.map((item) => (
        <TouchableWithoutFeedback
          onPress={() => handlePress(item)}
          key={item.text}
        >
          <View style={[styles.optionContainer]}>
            <Animated.Text style={[styles.text]}>{item.text}</Animated.Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: theme.background.secondary,
    borderRadius: theme.radii.md,
    alignSelf: "center",
  },
  optionContainer: {
    width: width * 0.3,
    alignItems: "center",
    padding: theme.spacing.md,
    borderRadius: theme.radii.md,
  },
  text: {
    color: theme.text.primary,
    fontWeight: "bold",
    zIndex: 2,
  },
  indicator: {
    position: "absolute",
    width: width * 0.3,
    height: "100%",
    backgroundColor: theme.background.tertiary,
    borderRadius: theme.radii.md,
  },
});
