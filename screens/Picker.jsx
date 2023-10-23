import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="dark-content"
        hidden={false}
      />
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

export default App;
