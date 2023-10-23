import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ContactUsForm = () => {
   
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Contact Us</Text>
      <Text style={styles.label}>First Name</Text>
      <TextInput style={styles.input}   />
      <Text style={styles.label}>Last Name</Text>
      <TextInput style={styles.input}   />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input}   />
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Area Code</Text>
          <TextInput style={styles.input}   />
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput style={styles.input}    />
        </View>
      </View>
      <Text style={styles.label}>Message</Text>
      <TextInput multiline style={[styles.input, styles.textArea]}  />
      <View style={styles.buttonContainer}>
        <Button title="Submit" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ContactUsForm;
