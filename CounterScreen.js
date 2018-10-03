import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Sentry from 'sentry-expo';

export default class CounterScreen extends React.Component {
  state = {
      count : 0
  }

  
  _add10 = () => {
    Sentry.captureBreadcrumb({
        message: 'Add 10',
        category: 'count',
        level: 'info',
        data: {
            count: this.state.count
        }
    })
    this._add(10);
  }

  _add1 = () => {
    Sentry.captureBreadcrumb({
        message: 'Add 1',
        category: 'count',
        level: 'info',
        data: {
            count: this.state.count
        }
    })
    this._add(1);
  }

  _add = (num) => {
    const count = this.state.count + num 

    if (count > 33)
        throw new Error('count > 33')
    this.setState({
        count: count
    })
  }
  render() {
    return (
      <View>
            <Text style={styles.title}>Counter</Text>
            <Text style={styles.my_count}>{this.state.count}</Text>
            <Button title="+10" onPress={this._add10}></Button>
            <Button title="+1" onPress={this._add1}></Button>
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