import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const Home = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  const decrease = () => setCount(count - 1);

  return (
    <View>
      <Text testID="count">{count}</Text>

      <TouchableOpacity testID="increase-button" onPress={increase}>
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="decrease-button" onPress={decrease}>
        <Text>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
};
