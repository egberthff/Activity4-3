import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';


const CircleSlider = () => {
  const [value, setValue] = useState(0);

  const getBackgroundColor = (value) => {
    if (value <= 100) return 'orange';
    if (value <= 500) return 'pink';
    return 'yellow';
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.circle,
          backgroundColor: getBackgroundColor(value),
          width: value,
          height: value,
          borderRadius: value / 2,
        }}
      />
      <Slider
        style={styles.slider}
        step={1}
        minimumValue={0}
        maximumValue={1000}
        value={value}
        onValueChange={(sliderValue) => setValue(sliderValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    marginBottom: 20,
  },
  slider: {
    width: '80%',
  },
});

export default CircleSlider;
