import React, { useState } from 'react';
import { Button, Text, ToastAndroid, View } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const showToast = () => {
    setCount(count + 1);
    ToastAndroid.show(`The button has been clicked ${count + 1} times`, ToastAndroid.SHORT);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Click Me" onPress={showToast} />
      </View>
  );
};

export default App;
