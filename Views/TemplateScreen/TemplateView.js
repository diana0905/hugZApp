import React, { useState }  from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const TemplateView = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const onChangeText = (text, field) => {
        if (field === 'title') {
          setTitle(text);
        } else if (field === 'description') {
          setDescription(text);
        }
    };

    const handleAddStory = () => {
        const newStory = {
          title: title,
          description: description,
        };

        setStories([...stories, newStory]);
        setTitle('');
        setDescription('');
      };

    return (
        <View style={styles.container}>
            <Text style={styles.label} >  Title </Text>
            <TextInput
                placeholder="Title"
                onChangeText={(text) => onChangeText(text, 'title')}
                defaultValue={title}
                style={styles.inputfield} />

            <Text style={styles.label}>  Description </Text>
            <TextInput
                placeholder="Description"
                onChangeText={(text) => onChangeText(text, 'description')}
                defaultValue={description}
                style={styles.inputfield} />
            <Button title="Add" onPress={handleAddStory}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputfield: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        height: "auto",
        marginBottom: 20,
        width: '80%',
        alignSelf: 'center',
        maxHeight: '10px',
        flex: 1
    },
    label: {
        alignSelf: 'center',
    }
});

export default TemplateView;