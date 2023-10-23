import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const MyScrollViewComponent = () => {
  const items = Array.from({length: 50}, (_, i) => `Item ${i+1}`);

  return (
    <ScrollView style={styles.container}>
      {items.map((item, index) => (
        <Text key={index} style={styles.item}>
          {item}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default MyScrollViewComponent;
