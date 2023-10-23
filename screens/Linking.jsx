import React from 'react';
import { Button, Linking } from 'react-native';

const App = () => {
   

  const handleButtonPress = async () => {
    const url = 'https://www.youtube.com';
    const canOpenURL = await Linking.canOpenURL(url);

    if (canOpenURL) {
      await Linking.openURL(url);
    } else {
      console.error(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
     
  <Button title="Open Web Page" onPress={handleButtonPress} />
   
   
  )
  
};

export default App;

 
