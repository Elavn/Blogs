import { Image, StyleSheet, Platform, View, SafeAreaView, Text, TextInput, ScrollView } from 'react-native';
import Button from "@/components/Button";
import { useNavigation } from '@react-navigation/native';

export type BlogCardProps = {
    displayPic: any,
    displayName: String,
    verification: any,
    title: String,
    textBody: String,
    time: String;
};

const BlogCards = ({title, displayName, displayPic, textBody, verification, time}: BlogCardProps,) => {
    return(
        <View style={styles.container}>
            <View style={styles.displayInfo}>
                <Image style={styles.displayPic} source={displayPic}/>
                <Text style={styles.userName}>{displayName}</Text>
                <Image style={styles.verificationBadge} source={verification}/>
                <Text style={styles.time}>{time}</Text>
            </View>
            <View>
                <Text style={styles.headingText}>{title}</Text>
                <Text style={styles.textBody}>{textBody}</Text>
                <Button 
                title='Read more'
                />
            </View>
        </View>
    )
};

export default BlogCards

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 283,
        paddingVertical: 17,
        paddingHorizontal: 25,
        marginVertical:10
    },
    displayInfo: {
        flexDirection: 'row',
        marginBottom: 18,
    },
    displayPic: {
        height:30,
        width:30,
        
    },
    headingText: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 18,
        color: '#424242',
        marginBottom: 14,
        width: 237
    },
    textBody: {
        fontFamily: 'Inter',
        fontSize: 12,
        lineHeight: 19.2,
        fontWeight: '500',
        color: '#888888',
        paddingBottom: 18,
        width: 290
    },
    userName: {
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: '500',
        paddingStart: 17,
        paddingEnd: 16,
        alignSelf: 'center'
    },
    verificationBadge: {
        height: 9,
        width: 9,
        marginEnd: 116,
        alignSelf: 'center'
    },
    time: {
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 10,
        alignSelf: 'center'
        
    }
})