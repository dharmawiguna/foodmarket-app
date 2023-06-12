import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {profileDummy} from '../../../assets';
import {getData} from '../../../utils';

const HomeProfile = () => {
  const [photo, setPhoto] = useState(profileDummy);
  useEffect(() => {
    getData('userProfile').then(res => {
      console.log('user profile:', res);
      setPhoto({uri: res?.profile_photo_url});
    });
  }, []);
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>Maxim Food</Text>
        <Text style={styles.desc}>Let's get some foods</Text>
      </View>
      <Image source={photo} style={styles?.profile} />
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
