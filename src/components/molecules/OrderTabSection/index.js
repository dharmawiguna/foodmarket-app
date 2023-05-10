import {StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {
  productDummy1,
  productDummy2,
  productDummy3,
  productDummy4,
} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#f2f2f2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8d92a3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgress = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating={3}
        image={productDummy1}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="300.000"
        name="Nasi Goreng"
      />
      <ItemListFood
        rating={3}
        image={productDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="300.000"
        name="Nasi Goreng"
      />
      <ItemListFood
        rating={3}
        image={productDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="300.000"
        name="Nasi Goreng"
      />
      <ItemListFood
        rating={3}
        image={productDummy4}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="300.000"
        name="Nasi Goreng"
      />
    </View>
  );
};
<View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const PastOrder = () => {
  const navigation = useNavigation();

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        image={productDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={3}
        price="300.000"
        name="Nasi Goreng"
        date="21 Februari 2023"
        status="Cancel"
      />
      <ItemListFood
        image={productDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={3}
        price="300.000"
        name="Nasi Goreng2"
        date="21 Februari 2023"
      />
      <ItemListFood
        image={productDummy4}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={3}
        price="300.000"
        name="Nasi Goreng"
        date="21 Februari 2023"
      />
    </View>
  );
};

const renderScene = SceneMap({
  1: InProgress,
  2: PastOrder,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({});
