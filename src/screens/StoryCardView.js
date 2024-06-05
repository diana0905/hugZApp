import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export const StoryCardView = ({story, style}) => {
    
    return (
        <View style={[styles.container, style]}>
            <ImageBackground source={require('../assets/artworks/artwork_1.png')} style={styles.imageBackground}
            imageStyle={styles.imageStyle}>
                <View style={styles.content}>
                    <Text style={styles.artist}>Artist: {story.artistName}</Text>
                    <Text style={styles.title}>"{story.title}"</Text>
                    <ScrollView>
                        <Text style={styles.description}>{story.description}</Text>
                    </ScrollView>
                    <Text style={styles.translateText}>Translate</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        paddingVertical: 50,    
        paddingHorizontal: 10, 
        shadowColor: '#ffffff',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 7,
        elevation: 8,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    imageStyle: {
        borderRadius: 20, 
        backgroundColor: '#222129',
    },
    content: {
        flex: 1,
        justifyContent: 'space-between', // Distributes space between children
        alignItems: 'center',
        paddingVertical: 70,
    },
    artist: {
        fontSize: 12,  
        color: '#FFFFFF',
        fontFamily: 'Inria Sans',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 35,
        paddingVertical: 10,
        fontFamily: 'Iowan Old Style',
        textAlign: 'center',
        paddingHorizontal: 10
    },
    description: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'Iowan Old Style',
        textAlign: 'center',
        paddingHorizontal: 40,
        lineHeight: 23,
    },
    translateText: {
        color: '#FFFFFF',
        fontSize: 8,
        textAlign: 'center',
        textDecorationLine: 'underline',
        position: 'absolute', 
        bottom: 4, 
    }
  });
