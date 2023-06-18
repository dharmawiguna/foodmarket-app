import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {EmptyOrder, Header, OrderTabSection} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {getOrder} from '../../redux/action';

const Order = () => {
  const dispatch = useDispatch();
  const {order} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getOrder());
  }, []);

  // console.log(order);
  return (
    <View style={styles.page}>
      {order.length < 1 ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Your Order" subTitle="Wait for the best meal" />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
      <Text></Text>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1},
  tabContainer: {flex: 1, marginTop: 24},
});
