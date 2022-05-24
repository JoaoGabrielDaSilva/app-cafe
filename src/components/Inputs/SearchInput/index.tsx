import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  BackHandler,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TextInputProps,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../../styles/theme";

type Props = TextInputProps & {
  focused: boolean;
  search?: boolean;
};

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const SearchInput = ({ focused, style, search, ...props }: Props) => {
  const inputRef = useRef<TextInput>();
  const { goBack } = useNavigation();

  const onBlur = () => {
    goBack();
  };

  useEffect(() => {
    const screenLister = Keyboard.addListener("keyboardDidHide", () => {
      console.log("chegou");

      inputRef?.current?.blur();
    });

    return () => screenLister.remove();
  }, []);

  return (
    <View style={[styles.container, style]}>
      <AnimatedTextInput
        ref={inputRef}
        style={styles.input}
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
    backgroundColor: theme.background.secondary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radii.sm,
    marginLeft: theme.spacing.lg,
  },
  input: {
    flex: 1,
    paddingHorizontal: theme.spacing.sm,
    color: theme.text.primary,
  },
  icon: {
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.md),
  },
});
