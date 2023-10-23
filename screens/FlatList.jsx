import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

const MyFlatList = () => {
  const items = Array.from({length: 50}, (_, i) => `Item ${i+1}`);

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default MyFlatList;
