import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GooglePlaceData } from "react-native-google-places-autocomplete";
import { theme } from "../../../../styles/theme";

type Props = {
  data: GooglePlaceData;
  index: number;
};

export const SearchInputItem = ({ data, index }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background.secondary,
  },
  text: {
    color: theme.text.primary,
  },
});
