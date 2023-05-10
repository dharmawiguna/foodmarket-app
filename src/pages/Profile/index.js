import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {profileDummy} from '../../assets';
import {ProfileTabSection} from '../../components';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={profileDummy} style={styles.photoContainer} />
          </View>
        </View>
        <Text style={styles.name}>Dharma Wiguna</Text>
        <Text style={styles.email}>dharmawiguna982@gmail.com</Text>
      </View>
      <View style={styles.content}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1},
  profileDetail: {backgroundColor: 'white', paddingBottom: 26, paddingTop: 50},
  photo: {alignItems: 'center', marginTop: 24, marginBottom: 16},
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#9d92a3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#f0f0f0',
    padding: 24,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
  email: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: '#8d92a3',
    textAlign: 'center',
  },
  content: {flex: 1, marginTop: 24},
});
