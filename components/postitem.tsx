import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export interface PostItemProps {
  image: any;
  date: string;
  title: string;
  likes: string;
  comments: string;
}

const PostItem: React.FC<PostItemProps> = ({ image, date, title, likes, comments }) => {
  return (
    <View style={styles.postItemContainer}>
      <Image
        resizeMode="cover"
        source={require('@/assets/images/news_art.png')}
        style={styles.postImage}
      >
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </Image>
      <View style={styles.postContent}>
        <Text style={styles.postTitle}>{title}</Text>
        <View style={styles.postStats}>
          <View style={styles.statItem}>
            <Text style={styles.statText}>{likes}</Text>
            <Image
              resizeMode="contain"
              source={require('@/assets/images/comments.png')}
              style={styles.statIcon}
            />
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statText}>{comments}</Text>
            <Image
              resizeMode="contain"
              source={require('@/assets/images/reactions.png')}
              style={styles.statIcon}
            />
          </View>
          <Image
            resizeMode="contain"
            source={require('@/assets/images/option_logo.png')}
            style={styles.moreIcon}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postItemContainer: {
    marginBottom: 15,
  },
  postImage: {
    borderRadius: 9,
    aspectRatio: 1.6,
    width: '100%',
    justifyContent: 'flex-end',
    padding: 5,
  },
  dateContainer: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 3,
    padding: 3,
  },
  dateText: {
    fontSize: 5,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
  },
  postContent: {
    marginTop: 10,
  },
  postTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(66, 66, 66, 1)',
  },
  postStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 9,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 12,
    color: 'rgba(82, 82, 82, 1)',
    marginRight: 3,
  },
  statIcon: {
    width: 10,
    aspectRatio: 1,
  },
  moreIcon: {
    width: 16,
    aspectRatio: 1,
  },
});

export default PostItem;