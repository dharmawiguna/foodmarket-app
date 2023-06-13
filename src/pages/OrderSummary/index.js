import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Gap,
  Header,
  ItemListFood,
  ItemValue,
  Loading,
} from '../../components';
import {getData} from '../../utils';
import {API_HOST} from '../../config';
import {WebView} from 'react-native-webview';
import Axios from 'axios';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [token, setToken] = useState('');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentUrl, SetPaymentUrl] = useState('https://google.com');

  useEffect(() => {
    getData('token').then(res => {
      // setUserProfile(res);
      setToken(res.value);
    });
    console.log(item);
    console.log(token);
    console.log(userProfile.id);
  }, []);

  const onCheckout = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };

    Axios.post(`${API_HOST.url}/checkout`, data, {
      headers: {
        Authorization: token,
      },
    })
      .then(res => {
        setIsPaymentOpen(true);
        SetPaymentUrl(res.data.data.payment_url);
      })
      .catch(err => {
        console.log('checkout proses: ', err);
      });
    // navigation.replace('SuccessOrder')
  };

  const onNavChange = state => {
    console.log(state);
    // const urlSuccess =
    //   'https://app.sandbox.midtrans.com/snap/v3/redirection/484f0edd-40f5-4875-9cce-24ca85880fcd#/406';
    const urlSuccess = state.url;
    const urlCheck = urlSuccess.slice(91);

    // const titleWeb = '';
    if (urlCheck === '406') {
      navigation.replace('SuccessOrder');
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          onBack={() => setIsPaymentOpen(false)}
        />
        <WebView
          source={{uri: paymentUrl}}
          style={{flex: 1}}
          onNavigationStateChange={onNavChange}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
        />
      </>
    );
  }

  return (
    <ScrollView>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          name={item.name}
          price={item.price}
          type="order-summary"
          image={{uri: item.picturePath}}
          items={transaction.totalItem}
        />
        <Text>Detail Transaction</Text>
        <ItemValue
          label={item.name}
          value={transaction.totalPrice}
          type="currency"
        />
        <ItemValue label="Driver" value={transaction.driver} type="currency" />
        <ItemValue label="Tax" value={transaction.tax} type="currency" />
        <ItemValue
          label="Total Price"
          value={transaction.total}
          valueColor="#1abc9c"
          type="currency"
        />
      </View>

      <View style={styles.content}>
        <Text>Deliver To:</Text>
        <ItemValue label="Name" value={userProfile.name} />
        <ItemValue label="Phone No" value={userProfile.phoneNumber} />
        <ItemValue label="Address" value={userProfile.address} />
        <ItemValue label="House No" value={userProfile.houseNumber} />
        <ItemValue label="City" value={userProfile.city} />
      </View>
      <Gap height={40} />
      <View style={styles.button}>
        <Button text="Checkout Now" onPress={onCheckout} />
      </View>
    </ScrollView>
  );
};

export default OrderSummary;

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
