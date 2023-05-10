import {StyleSheet, Text, View, TextInput as TextInputRn} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, ...resProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRn
        style={styles.input}
        placeholder={placeholder}
        {...resProps}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 5,
  },
  input: {borderWidth: 1, borderColor: '#020202', borderRadius: 8, padding: 10},
});
