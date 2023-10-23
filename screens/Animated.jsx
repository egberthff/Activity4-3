import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

const InfiniteRotation = () => {
  const rotation = useRef(new Animated.Value(0)).current;

  const startRotation = () => {
    rotation.setValue(0);
    Animated.timing(rotation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(startRotation);
  };

  useEffect(() => {
    startRotation();
  }, []);

  const rotationInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { transform: [{ rotate: rotationInterpolate }] }]} />
    </View>
  );
};

const styles = {
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  box: { width: 100, height: 100, backgroundColor: 'red' },
};

export default InfiniteRotation;
