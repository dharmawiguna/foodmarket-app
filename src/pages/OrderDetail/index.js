import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';
import {productDummy1} from '../../assets';

const OrderDetail = () => {
  return (
    <ScrollView>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          name="Nasi Goreng"
          price="20.000"
          type="order-summary"
          image={productDummy1}
          items={14}
        />
        <Text>Detail Transaction</Text>
        <ItemValue label="Nasi Goreng" value="Rp. 50.000" />
        <ItemValue label="Driver" value="Rp. 12.000" />
        <ItemValue label="Tax" value="Rp. 6.200" />
        <ItemValue
          label="Total Price"
          value="Rp. 68.200"
          valueColor="#1abc9c"
        />
      </View>

      <View style={styles.content}>
        <Text>Deliver To:</Text>
        <ItemValue label="Name" value="Dharma Wiguna" />
        <ItemValue label="Phone No" value="081246269301" />
        <ItemValue label="Address" value="Kesiman" />
        <ItemValue label="House No" value="555" />
        <ItemValue label="City" value="Denpasar" />
      </View>

      <View style={styles.content}>
        <Text>Order Status:</Text>
        <ItemValue label="#FM12345" value="Paid" valueColor="#1abc9c" />
      </View>
      <View style={styles.button}>
        <Button
          text="Cancel My Order"
          onPress={() => navigation.replace('SuccessOrder')}
          color="#d9435e"
          textColor="white"
        />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {paddingHorizontal: 24, marginTop: 24},
});
