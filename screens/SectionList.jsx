import React from 'react';
import { SectionList, Text, View } from 'react-native';

const DATA = [
  {
    title: 'Section 1',
    data: ['Item 1', 'Item 2'],
  },
  {
    title: 'Section 2',
    data: ['Item 3', 'Item 4'],
  },
];

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const App = () => (
  <View style={{ flex: 1, paddingTop: 22 }}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ fontWeight: 'bold' }}>{title}</Text>
      )}
    />
  </View>
);

export default App;
