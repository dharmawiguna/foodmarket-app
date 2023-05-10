import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  foodDummy,
  productDummy1,
  productDummy2,
  productDummy3,
  productDummy4,
} from '../../assets';
import {FoodCard, Gap, HomeTabSection} from '../../components';
import HomeProfile from '../../components/molecules/HomeProfile';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <Gap width={24} />
              <FoodCard image={foodDummy} />
              <FoodCard image={productDummy1} />
              <FoodCard image={productDummy2} />
              <FoodCard image={productDummy3} />
              <FoodCard image={productDummy4} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  foodCardContainer: {flexDirection: 'row', marginVertical: 24},
  tabContainer: {flex: 1},
});
