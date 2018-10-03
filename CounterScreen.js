import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class CounterScreen extends React.Component {
  state = {
      count : 0
  }

  _add = (num) => {
    const count = this.state.count + num 

    if (count > 33)
        throw new Error('count > 33')
    else
        this.setState({
            count: count
        })
  }
  render() {
    return (
      <View>
            <Text style={styles.title}>Counter</Text>
            <Text style={styles.my_count}>{this.state.count}</Text>
            <Button title="+10" onPress={() => this._add(10)}></Button>
            <Button title="+1" onPress={() => this._add(1)}></Button>
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