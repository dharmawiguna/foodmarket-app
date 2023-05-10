import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components';
import {IlOrder} from '../../assets';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlOrder />
      <Gap height={30} />
      <Text style={styles.title}>You've made to order!</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Just stay at home while we are</Text>
      <Text style={styles.subTitle}>preparing your best food</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text="Order Other Food"
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={10} />
        <Button
          text="View My Order"
          color="#8d92a3"
          textColor="#fff"
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white ',
  },
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: '#020202'},
  subTitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8d92a3'},
  buttonContainer: {paddingHorizontal: 80, width: '100%'},
});
