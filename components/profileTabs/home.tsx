import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import Header from '../header';
import UserInfo from '../userinfo';
import PostItem from '../postitem';

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.profileContainer}>
      <ScrollView>
        <Header />
        <UserInfo />
        <View style={styles.divider} />
        <PostItem />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
  },
  divider: {
    borderColor: 'rgba(214, 211, 211, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%',
    marginTop: 15,
  },
});

export default ProfileScreen;