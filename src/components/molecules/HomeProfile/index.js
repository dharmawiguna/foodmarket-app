import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {profileDummy} from '../../../assets';

const HomeProfile = () => {
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>Maxim Food</Text>
        <Text style={styles.desc}>Let's get some foods</Text>
      </View>
      <Image source={profileDummy} style={styles.profile} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 62,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  appName: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202'},
  desc: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#8d92a3'},
  profile: {width: 50, height: 50, borderRadius: 8},
});
