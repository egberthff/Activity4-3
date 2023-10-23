import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [url, setUrl] = useState('https://www.google.com');

  const handleButtonPress = () => {
    setUrl(inputUrl);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <TextInput
          style={{ flex: 1, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setInputUrl(text)}
          value={inputUrl}
        />
        <Button title="Go" onPress={handleButtonPress} />
      </View>
      <WebView source={{ uri: url }} style={{ flex: 1 }} />
    </View>
  );
};

export default App;
