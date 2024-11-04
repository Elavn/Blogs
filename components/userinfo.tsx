import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const UserInfo: React.FC = () => {
  return (
    <View style={styles.userInfoContainer}>
      <View style={styles.userDetails}>
        <Image
          resizeMode="contain"
          source={require('@/assets/images/ramroy_dp.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.userName}>Ram Roy</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Image
          resizeMode="contain"
          source={require('@/assets/images/camera_icon.png')}
          style={styles.editIcon}
        />
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>
      <View style={styles.userStats}>
        <Text style={styles.userRole}>UI/UX Designer</Text>
        <View style={styles.followingContainer}>
          <Text style={styles.followingText}>25 following</Text>
        </View>
      </View>
      <View style={styles.navContainer}>
        <View style={styles.navItem}>
          <Text style={styles.navTextActive}>Home</Text>
          <View style={styles.activeIndicator} />
        </View>
        <Text style={styles.navText}>Saved</Text>
      </View>
      <Text style={styles.aboutText}>About</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    paddingHorizontal: 25,
    marginTop: -41,
  },
  userDetails: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    aspectRatio: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 7,
    paddingVertical: 7,
    paddingHorizontal: 23,
    marginTop: 10,
  },
  editIcon: {
    width: 12,
    aspectRatio: 1,
    marginRight: 5,
  },
  editText: {
    fontSize: 12,
    color: 'rgba(242, 231, 231, 1)',
    fontWeight: '500',
  },
  userStats: {
    alignItems: 'center',
    marginTop: 20,
  },
  userRole: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(167, 167, 167, 1)',
  },
  followingContainer: {
    borderColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 2,
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  followingText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(20, 19, 24, 1)',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  navTextActive: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(20, 19, 24, 1)',
  },
  navText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(167, 167, 167, 1)',
  },
  activeIndicator: {
    borderColor: 'rgba(20, 19, 24, 1)',
    borderWidth: 1,
    width: 20,
    marginTop: 4,
  },
  aboutText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(167, 167, 167, 1)',
    marginTop: 20,
  },
});

export default UserInfo;