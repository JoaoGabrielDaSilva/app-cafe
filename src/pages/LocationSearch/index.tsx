import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { SearchInput } from "../../components/Inputs/SearchInput";
import { theme } from "../../styles/theme";

export const LocationSearch = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: theme.spacing.lg,
    backgroundColor: theme.background.primary,
  },
});
