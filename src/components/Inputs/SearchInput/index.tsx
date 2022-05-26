import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  BackHandler,
  Dimensions,
  Keyboard,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../../styles/theme";

type Props = TextInputProps & {
  style?: StyleProp<ViewStyle>;
};

const { width } = Dimensions.get("screen");

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const SearchInput = ({ style, ...props }: Props) => {
  const state = useSharedValue(0);

  const inputRef = useRef<TextInput>();

  const onBlur = () => {};

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(state.value, [0, 1], [width, 0]),
        },
      ],
    };
  });

  useEffect(() => {
    const screenLister = Keyboard.addListener("keyboardDidHide", () => {
      console.log("chegou");

      inputRef?.current?.blur();
    });

    state.value = withSpring(1, {
      damping: 10,
      overshootClamping: true,
    });

    return () => screenLister.remove();
  }, []);

  return (
    <View style={[styles.container, style]}>
      <AnimatedTextInput
        ref={inputRef}
        style={[animatedStyles, styles.input]}
        placeholder="Search for a location"
        placeholderTextColor={theme.text.secondary}
        autoComplete="off"
        autoFocus
        onBlur={onBlur}
        {...props}
      />

      <Ionicons style={styles.icon} name="search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: theme.radii.sm,
    marginLeft: theme.spacing.lg,
    overflow: "hidden",
  },
  input: {
    flex: 1,
    color: theme.text.primary,
    paddingLeft: theme.spacing.md,
    backgroundColor: theme.background.secondary,
    paddingVertical: theme.spacing.sm + 1,
    borderTopLeftRadius: theme.radii.sm,
    borderBottomLeftRadius: theme.radii.sm,
  },
  icon: {
    backgroundColor: theme.background.secondary,
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.md),
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderTopRightRadius: theme.radii.sm,
    borderBottomRightRadius: theme.radii.sm,
  },
});
