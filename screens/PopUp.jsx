import React, { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show Popup" onPress={() => setModalVisible(true)} />
      
      <Modal
        animationType="roll"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000aa' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 5 }}>
            <Text>This is a popup!</Text>
            <Button title="Ok" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;
