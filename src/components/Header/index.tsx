import { Ionicons } from "@expo/vector-icons";
import { StackHeaderProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../styles/theme";

type Props = StackHeaderProps & {};

export const Header = ({ options }: Props) => {
  const { title } = options;

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={() => console.log("123")}>
        <View style={styles.iconContainer}>
          <Ionicons name="chevron-back" style={styles.icon} />
        </View>
      </BorderlessButton>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <BorderlessButton onPress={() => console.log("123")}>
        <View style={styles.iconContainer}>
          <Ionicons name="search" style={styles.icon} />
        </View>
      </BorderlessButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.lg,
    padding: theme.spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    padding: theme.spacing.md,
    backgroundColor: theme.background.secondary,
    borderRadius: theme.radii.sm,
  },
  icon: {
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.md),
  },
  title: {
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.lg),
    fontWeight: "bold",
  },
});
