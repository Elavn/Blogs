import { Image, StyleSheet, View, SafeAreaView, Text, TextInput, ScrollView, FlatList } from 'react-native';
import BlogCards from '@/components/BlogCards';
import blogCardData from '@/data/BlogCardData';
import { BlogCardProps } from '@/components/BlogCards';
import { useNavigation } from '@react-navigation/native';


export default function home() {
    const homeScreen = ({ item }: { item: BlogCardProps }) => <BlogCards {...item} />;
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.appbar}>
                <Image style={[styles.setImage, {height: 16, width:21}]}
                    source={require('@/assets/images/Vector.png')}/>
                <Image style={[styles.setImage, {height: 28, width:24}]}
                    source={require('@/assets/images/notif.png')}/>
            </View>

            <Text style={styles.headerText}>Blogs</Text>


            <View style={styles.searchbar}>
                <TextInput 
                    style={styles.input}
                    placeholder='Search'
                    inlineImageLeft='Search_icon'
            />
                <View style={styles.filter}>
                <Image style={styles.filtericon}
                    source={require('@/assets/images/filter.png')}/>
                </View>

            </View>

        <View style= {styles.scrollRow}>
            <ScrollView style={{height: 45}}
                horizontal={true}
                alwaysBounceHorizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Text style={[styles.scrollText, {color: '#000000'}]}>Popular</Text>
                <Text style={styles.scrollText}>Creative</Text>
                <Text style={styles.scrollText}>UI/UX Design</Text>
                <Text style={styles.scrollText}>Productivity</Text>
                <Text style={styles.scrollText}>Illustration</Text>
            </ScrollView>
        </View>
        <FlatList style={{paddingHorizontal: 25}}
                showsVerticalScrollIndicator={false}
                data={blogCardData}
                renderItem={homeScreen}
                ListFooterComponent={<View style={{ height: 220 }} />}
                keyExtractor={(item, index) => index.toString()}

            />
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f2f1',
        
    },
    appbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingHorizontal: 25
    },
    searchbar:{
        flexDirection: 'row',
    },
    headerText: {
        fontWeight: '600',
        fontFamily: 'Inter',
        fontSize: 28,
        lineHeight: 33.89,
        color: '#424242',
        paddingTop: 20,
        paddingHorizontal: 25
    },
    setImage: {
        height: 32,
        width: 32,
        
    },
    input: {
        height: 41,
        width: 290,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 7,
        marginTop: 20,
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 16,
        marginStart: 25
    },
    scrollRow:{
        marginEnd: 25
    },
    scrollText: {
        paddingTop: 20,
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 19.36,
        color: '#a7a7a7',
        marginStart: 26
    },
    filtericon: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    filter: {
        backgroundColor:'white',
        height: 41,
        width: 50,
        marginTop: 20,
        borderRadius: 7,
        marginStart: 20,
        justifyContent: 'center',
        marginHorizontal: 25
    }
})