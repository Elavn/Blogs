import { Image, StyleSheet, Platform, View, SafeAreaView, Text, TextInput, ScrollView } from 'react-native';

export default function Homescreen() {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.appbar}>
                <Image style={styles.setImage}
                    source={require('@/assets/images/Vector.png')}/>
                <Image style={styles.setImage}
                    source={require('@/assets/images/notif.png')}/>
            </View>

            <Text style={styles.headerText}>Blogs</Text>

            <TextInput 
                style={styles.input}
                placeholder='Search'
                inlineImageLeft='Search_icon'
        />

        <ScrollView
          horizontal={true}
          alwaysBounceHorizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Text style={[styles.scrollText, {color: '#000000'}]}>Popular</Text>
          <Text style={styles.scrollText}>Creative</Text>
          <Text style={styles.scrollText}>UI/UX Design</Text>
          <Text style={styles.scrollText}>Productivity</Text>
          <Text style={styles.scrollText}>Illustration</Text>
        </ScrollView>
      
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        backgroundColor: '#f1f2f1'
    },
    appbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
    },
    headerText: {
        fontWeight: 'medium',
        fontSize: 28,
        lineHeight: 33.89,
        color: '#424242',
        paddingTop: 20
    },
    setImage: {
        height: 16,
        width: 21,
        
    },
    input: {
        height: 41,
        width: 280,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 7,
        marginTop: 20,
    },
    scrollText: {
        paddingTop: 20,
        marginEnd: 26,
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 19.36,
        alignSelf: 'flex-start',
        color: '#a7a7a7'
    }
})