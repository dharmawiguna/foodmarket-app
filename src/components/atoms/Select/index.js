import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';

const Select = ({label, value, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          itemStyle={{height: 40}}
          selectedValue={value}
          onValueChange={itemValue => onSelectChange(itemValue)}>
          <Picker.Item label="Denpasar" value="denpasar" />
          <Picker.Item label="Badung" value="badung" />
          <Picker.Item label="Tabanan" value="tabanan" />
          <Picker.Item label="Klungkung" value="klungkung" />
          <Picker.Item label="Karangasem" value="karangasem" />
          <Picker.Item label="Gianyar" value="gianyar" />
          <Picker.Item label="Buleleng" value="buleleng" />
          <Picker.Item label="Jembrana" value="jembrana" />
          <Picker.Item label="Bangli" value="bangli" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
  },
});
