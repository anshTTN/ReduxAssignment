import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Button = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width: '95%',
    backgroundColor: '#F24A58',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Button;
