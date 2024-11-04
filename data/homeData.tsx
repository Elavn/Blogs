import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import PostItem, {PostItemProps} from '@/components/postitem';

const postData: PostItemProps[] = [
  {
    image: require('@/assets/images/news_art.png'),
    date: "19 Dec",
    title: "Make design system people want to use.",
    likes: "25.5k",
    comments: "5k"
  },
  {
    image: require('@/assets/images/news_art.png'),
    date: "19 Dec",
    title: "Make design system people want to use.",
    likes: "25.5k",
    comments: "5k"
  },
  {
    image: require('@/assets/images/news_art.png'),
    date: "19 Dec",
    title: "Make design system people want to use.",
    likes: "25.5k",
    comments: "5k"
  },
  {
    image: require('@/assets/images/news_art.png'),
    date: "19 Dec",
    title: "Make design system people want to use.",
    likes: "25.5k",
    comments: "5k"
  },
  {
    image: require('@/assets/images/news_art.png'),
    date: "19 Dec",
    title: "Make design system people want to use.",
    likes: "25.5k",
    comments: "5k"
  },
  {
    image: require('@/assets/images/news_art.png'),
    date: "19 Dec",
    title: "Make design system people want to use.",
    likes: "25.5k",
    comments: "5k"
  },
  {
    image: require('@/assets/images/news_art.png'),
    date: "19 Dec",
    title: "Make design system people want to use.",
    likes: "25.5k",
    comments: "5k"
  },
  {
    image: require('@/assets/images/news_art.png'),
    date: "19 Dec",
    title: "Make design system people want to use.",
    likes: "25.5k",
    comments: "5k"
  },
  {
    image: require('@/assets/images/news_art.png'),
    date: "19 Dec",
    title: "Make design system people want to use.",
    likes: "25.5k",
    comments: "5k"
  },
  {
    image: require('@/assets/images/news_art.png'),
    date: "19 Dec",
    title: "Make design system people want to use.",
    likes: "25.5k",
    comments: "5k"
  },
  {
    image: require('@/assets/images/news_art.png'),
    date: "19 Dec",
    title: "Make design system people want to use.",
    likes: "25.5k",
    comments: "5k"
  },
  {
    image: require('@/assets/images/news_art.png'),
    date: "19 Dec",
    title: "Make design system people want to use.",
    likes: "25.5k",
    comments: "5k"
  },
];

const PostList: React.FC = () => {
  return (
    <View style={styles.postListContainer}>
      <ScrollView>
        {postData.map((post, index) => (
          <PostItem key={index} {...post} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  postListContainer: {
    paddingHorizontal: 25,
    marginTop: 15,
  },
});

export default PostList;