import { StyleSheet, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import Card from '../components/card'
const GET_CHECKINS = `
{ 
check_in {
        id
        name
        comment 
        image_url
    }
}
`;

export default Checkins = () => {
    
    const [checkins, setCheckins] = useState([])
    useEffect(() => {
        fetch('https://profound-marmot-29.hasura.app/v1/graphql', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({query: GET_CHECKINS})
        })
        .then((response) => response.json())
        .then((json) => {
           setCheckins(json.data.check_in)
        })
        .catch((error) => {
          console.error(error);
        });
    }, [])
    
    return (
        <View styles={styles.container}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={checkins}
            renderItem={({ item }) => (
            <Card
                item={item}
            />
            )}
            keyExtractor={(x) => x.id.toString()}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
});
