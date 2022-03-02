import { StyleSheet, View,  TextInput } from 'react-native';
import { useState } from 'react';
import Button from '../components/button'

const getBodyString = (name, comment, imageUrl = "") => {
    return `
    mutation 
    {
             insert_check_in_one(object: {name: "${name}", comment: "${comment}", image_url: "${imageUrl}", created_at: "2022-03-02 10:10:10-05:00"}){
                 name,
                 comment,
                 image_url
             }
         }
    `;
}

export default Submit = () => {
    const [name, onChangeName] = useState(null);
    const [comment, onChangeComment] = useState(null);
    const [imageUrl, onChangeImageUrl] = useState(null);
    
    const addCheckin = () => {
        fetch('https://profound-marmot-29.hasura.app/v1/graphql', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({query: getBodyString(name, comment, imageUrl)})
        })
        .then((response) => response.json())
        .then((json) => {
           console.log("json: ", json)
        })
        .catch((error) => {
          console.error(error);
        });
    }

    return (
        <View styles={styles.container}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Name"
      />
        <TextInput
        style={styles.input}
        onChangeText={onChangeComment}
        value={comment}
        placeholder="Comment"
      />
        <TextInput
        style={styles.input}
        onChangeText={onChangeImageUrl}
        value={imageUrl}
        placeholder="Image Url"
      />
        <Button 
            onPress={addCheckin}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  input: {
    height: 45,
    marginHorizontal: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#D2D2D2',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8
  },
});
