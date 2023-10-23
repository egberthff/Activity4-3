import React from 'react';
import { Alert, Button, View } from 'react-native';

const App = () => {
  const showAlert = () => {
    Alert.alert(
      "Alert",
      "This is Alert!",
      [
        { text: "OK" }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};

export default App;
