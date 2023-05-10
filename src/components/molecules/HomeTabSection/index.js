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

const NewTaste = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        name="Nasi Goreng"
        price="20.000"
        rating={3}
        image={productDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ItemListFood
        name="Nasi Goreng"
        price="20.000"
        rating={3}
        image={productDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ItemListFood
        name="Nasi Goreng"
        price="20.000"
        rating={3}
        image={productDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ItemListFood
        name="Nasi Goreng"
        price="20.000"
        rating={3}
        image={productDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
    </View>
  );
};
<View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const Popular = () => {
  const navigation = useNavigation();

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        name="Nasi Goreng"
        price="20.000"
        rating={3}
        image={productDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ItemListFood
        name="Nasi Goreng"
        price="20.000"
        rating={3}
        image={productDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ItemListFood
        name="Nasi Goreng"
        price="20.000"
        rating={3}
        image={productDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        name="Nasi Goreng"
        price="20.000"
        rating={3}
        image={productDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
      <ItemListFood
        name="Nasi Goreng"
        price="20.000"
        rating={3}
        image={productDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        type="product"
      />
    </View>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
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

export default HomeTabSection;

const styles = StyleSheet.create({});
