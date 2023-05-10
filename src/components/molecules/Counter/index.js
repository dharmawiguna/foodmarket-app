import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcButtonAdd, IcButtonMin} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7}>
        <IcButtonMin />
      </TouchableOpacity>
      <Text style={styles.value}>10</Text>
      <TouchableOpacity activeOpacity={0.7}>
        <IcButtonAdd />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  value: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginHorizontal: 10,
  },
});
