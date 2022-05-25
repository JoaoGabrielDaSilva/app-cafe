import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    backgroundColor: theme.background.secondary,
    borderRadius: theme.radii.sm,
  },
  icon: {
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.md),
  },
});
