import {StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';
import React, {useEffect} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {productDummy2, productDummy3} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getInProgress, getPastOrder} from '../../../redux/action';

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
  const dispatch = useDispatch();
  const {inProgress} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getInProgress());
    // console.log('inProgress', inProgress);
  }, []);

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {inProgress.map(order => {
        return (
          <ItemListFood
            key={order.id}
            image={{uri: order.food.picturePath}}
            onPress={() => navigation.navigate('OrderDetail', order)}
            type="in-progress"
            items={order.quantity}
            price={order.total}
            name={order.food.name}
          />
        );
      })}
    </View>
  );
};
<View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const PastOrder = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pastOrder} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getPastOrder());
    // console.log('inProgress', inProgress);
  }, []);

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {pastOrder.map(order => {
        return (
          <ItemListFood
            key={order.id}
            image={{uri: order.food.picturePath}}
            onPress={() => navigation.navigate('OrderDetail', order)}
            type="past-orders"
            items={order.quantity}
            price={order.total}
            name={order.food.name}
            date={order.created_at}
            status={order.status}
          />
        );
      })}
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
