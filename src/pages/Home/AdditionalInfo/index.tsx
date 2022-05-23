import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../../styles/theme";
import LottieView from "lottie-react-native";

import icon from "../../../animations/lottie/raining.json";

export const AdditionalInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <Text style={styles.label}>Wind</Text>
        <Text style={styles.text}>6km/h</Text>
      </View>
      <View style={styles.statusWithBorder}>
        <View style={styles.divisor} />
        <View>
          <Text style={styles.label}>Humidity</Text>
          <Text style={styles.text}>36%</Text>
        </View>
        <View style={styles.divisor} />
      </View>
      <View style={styles.status}>
        <Text style={styles.label}>Low</Text>
        <Text style={styles.text}>12º</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderColor: "transparent",
    borderBottomColor: theme.text.secondary,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.xxlg,
    marginHorizontal: theme.spacing.xlg,
  },
  status: {
    alignItems: "center",
  },
  statusWithBorder: {
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  divisor: {
    width: 0.5,
    height: "70%",
    backgroundColor: theme.text.secondary,
    marginHorizontal: theme.spacing.lg,
  },
  label: {
    color: theme.text.primary,
    fontSize: RFValue(theme.fontSize.md),
    fontWeight: "600",
  },
  text: {
    marginTop: theme.spacing.sm,
    color: theme.text.secondary,
    fontSize: RFValue(theme.fontSize.md),
    fontWeight: "400",
    textAlign: "center",
  },
});
