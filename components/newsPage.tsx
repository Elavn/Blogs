import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const BlogDetailScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={require('@/assets/images/back_icon.png')} />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content}>
                {/* Image */}
                <Image
                    source={require('@/assets/images/news_art.png')}
                    style={styles.image}
                />

                {/* Author Info */}
                <View style={styles.authorContainer}>
                    <Text style={styles.authorText}>By Ram Roy</Text>
                    <View style={styles.iconContainer}>
                    <Image
                    source={require('@/assets/images/instagram_logo.png')}
                    style={styles.image}
                />
                        <Image
                    source={require('@/assets/images/facebook_logo.png')}
                    style={styles.image}
                />
                        <Image
                    source={require('@/assets/images/linkedin.png')}
                    style={styles.image}
                />
                        <Image
                    source={require('@/assets/images/link_logo.png')}
                    style={styles.image}
                />
                <Image
                    source={require('@/assets/images/option_logo.png')}
                    style={styles.image}
                />
                    </View>
                </View>

                {/* Title and Content */}
                <Text style={styles.title}>Make design system people want to use.</Text>
                <Text style={styles.subtitle}>
                    Build a system that provides a unified set of UX, design rules and patterns.
                </Text>
                <Text style={styles.bodyText}>
                    For the last years I have continued to build and design applications web and mobile, and I have
                    learned how to deal with different departments and utilize their knowledge in order to make better
                    products and build better design systems that scale better and are more efficient.
                    {'\n\n'}
                    There are obviously a whole lot more elements you can establish to create a core foundation for your
                     design identity. I will share some of my insights on design systems that scaled and keep all the 
                     language consistent across departments and platforms.
                </Text>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    content: {
        paddingHorizontal: 16,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginVertical: 16,
    },
    authorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    authorText: {
        fontSize: 14,
        color: 'gray',
    },
    iconContainer: {
        flexDirection: 'row',
    },
    iconSpacing: {
        marginLeft: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 16,
    },
    bodyText: {
        fontSize: 16,
        lineHeight: 24,
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        color: 'black',
        marginTop: 4,
    },
    navTextInactive: {
        fontSize: 12,
        color: 'gray',
        marginTop: 4,
    },
});

export default BlogDetailScreen;
