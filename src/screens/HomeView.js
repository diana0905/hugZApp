import React, { useState }  from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import {StoryCardView} from './StoryCardView';
import data from '../../data/stories.json';

export const HomeView = () => {
  const storiesData = data.data;
  const threads = Array.from(new Set(storiesData.map(story => story.category))); 
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const screenWidth = Dimensions.get('window').width;

  const handleItemPress = (index) => {
    setSelectedItemIndex(index);
  };

  const filteredStories = selectedItemIndex !== null ? storiesData.filter(story => story.category === threads[selectedItemIndex]) : storiesData;

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={styles.swipe_content} pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>
        {filteredStories.map((story, index) => (
          <StoryCardView key={index} story={story} style={{ width: screenWidth}}/>
        ))}
      </ScrollView>

      <View style={styles.scrollbar_threads}>
        <ScrollView horizontal={true}>
          {threads.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleItemPress(index)}>
              <View style={[styles.item, selectedItemIndex === index && styles.selectedItem]}>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  swipe_content : {
    flex: 1,
  },
  image: {
    padding:  10
  },
  scrollbar_threads: {
    flex: 1,
    bottom: 10,
    padding: 10,
    maxHeight: 48
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  selectedItem: {
    backgroundColor: '#292929',
  },
  itemText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Inria Sans',
  },
});