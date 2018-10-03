import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
          <Text style={styles.title}>Homescreen</Text>
          <Button title="next" onPress={()=>this.props.navigation.navigate('Counter')} ></Button>
      </View>
    );
  }
}
const styles= StyleSheet.create({
    title:{
        textAlign: 'center',
        fontSize: 50
    },
    my_count:{
        textAlign: 'center',
        fontSize: 50
    }
})