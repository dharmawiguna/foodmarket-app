import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap} from '../../atoms';
import Number from '../Number';

const ItemValue = ({label, value, valueColor = '#020202', type}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === 'currency' ? (
        <Number number={value} style={styles.value(valueColor)} />
      ) : (
        <Text style={styles.value(valueColor)}>{value}</Text>
      )}
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  label: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#8d92a3'},
  value: color => ({fontSize: 14, fontFamily: 'Poppins-Regular', color: color}),
});
