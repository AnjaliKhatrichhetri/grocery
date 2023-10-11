import React, { useState } from "react";
import { StyleSheet, View, Text, Slider } from "react-native";
const RangeSlider = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={value}
        onValueChange={(value) => setValue(value)}
      />
            <Text style={styles.text}>Value: {value}</Text>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,

    textAlign: "center",
  },
  slider: {
    width: 300,
    height: 40,
  
  },
});
export default RangeSlider;