import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NumericFormat} from 'react-number-format';

const Number = ({number, type}) => {
  if (type === 'decimal') {
    return (
      <NumericFormat
        value={number}
        displayType="text"
        renderText={value => <Text>{value}</Text>}
        decimalSeparator="."
        decimalScale={1}
        fixedDecimalScale
      />
    );
  }
  return (
    <NumericFormat
      value={number}
      displayType="text"
      thousandSeparator="."
      renderText={value => <Text>{value}</Text>}
      decimalSeparator=","
      prefix="IDR "
    />
  );
};

export default Number;

const styles = StyleSheet.create({});
