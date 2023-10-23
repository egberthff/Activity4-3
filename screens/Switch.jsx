import React, { useState } from 'react';
import { View, Switch, Image } from 'react-native';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={{alignSelf: 'center', marginTop: 50}}>
         <Image
        style={{width: 200, height: 200}}
        source={{uri: isEnabled ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6s3IHWp1unzkOJus7yzw5CrUxsKMAwEBUv7kD7yk&s' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYz_5kutqgE8z_qcToPJB_5Hie2Hc-LrcF6uJoYL4ViO9EAAbBlTpFUVDVkru-vb3zuTM&usqp=CAU'}}
      /> 
      <Switch style = {{alignSelf: 'center'}}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}

      />
      
    </View>
  );
};

export default App;
