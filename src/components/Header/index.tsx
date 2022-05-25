import { Ionicons } from "@expo/vector-icons";
import { StackHeaderProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../styles/theme";
import { SearchInput } from "../Inputs/SearchInput";

type Props = StackHeaderProps & {};

export const Header = ({
  options,
  navigation: { navigate, goBack },
  route,
}: Props) => {
  const { headerTitle } = options;

  const searchInput = route.name === "LocationSearch";

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={goBack}>
        <View style={styles.iconContainer}>
          <Ionicons name="chevron-back" style={styles.icon} />
        </View>
      </BorderlessButton>
      {headerTitle ? (
        <View>
          <Text style={styles.title}>{headerTitle}</Text>
        </View>
      ) : null}
      {searchInput ? (
        <SearchInput />
      ) : (
        <BorderlessButton onPress={() => navigate("LocationSearch")}>
          <View style={styles.iconContainer}>
            <Ionicons name="search" style={styles.icon} />
          </View>
        </BorderlessButton>
      )}
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
