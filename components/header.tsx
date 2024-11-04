import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        resizeMode="cover"
        source={require('@/assets/images/profile_bg.png')}
        style={styles.headerBackground}
      >
        <Image
          resizeMode="contain"
          source={require('@/assets/images/settings.png')}
          style={styles.settingsIcon}
        />
      </Image>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
  },
  headerBackground: {
    aspectRatio: 2.79,
    width: '100%',
    paddingLeft: 78,
    paddingRight: 78,
    paddingTop: 40,
    paddingBottom: 68,
  },
  settingsIcon: {
    width: 32,
    aspectRatio: 1,
  },
});

export default Header;