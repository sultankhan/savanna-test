import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default Button = (props) => {
  const { onPress, title = 'Add' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#4027DF',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },
});