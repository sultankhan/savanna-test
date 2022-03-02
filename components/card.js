import { StyleSheet, Text, View, Image } from 'react-native';

export default Card = (props) => {
    const {image_url, name, comment, created_at} = props.item;
  return (
      
    <View style={styles.card}>
        { 
        image_url &&
        <Image source={{uri: image_url}} style={styles.image}/>
        }
        <View style={[styles.subContainer, styles.spacer]}>
        <Image source={{uri: 'https://via.placeholder.com/100'}} style={styles.icon}/>
        <View style={styles.name}>
            <Text style={styles.text}>{name}</Text>
            <Text style={[styles.text, {color: 'blue'}]}>9th of November 2020</Text>
        </View>
        </View>
        <View style={styles.subContainer}>
            <Text style={styles.text}>{comment}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  image: {
      borderRadius: 8,
      width: undefined,
      height: 200
  },
  icon: {
      borderRadius: 8,
      width: 43,
      height: 43
  },
  spacer: {
      marginVertical: 10
  },
  subContainer: {
      flexDirection: 'row'
  },
  name: {
    marginHorizontal: 10
  },    
  text: {fontSize: 13, lineHeight: 18},
  
});
