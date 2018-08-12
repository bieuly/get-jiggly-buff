import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'
import { Pedometer } from 'expo'
import TimerCountdown from 'react-native-timer-countdown'

export default class CounterScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }
    
    componentDidMount() {
        this.startCounting();
    }

    startCounting = () => {
        this._subscription = Pedometer.watchStepCount(result => {
          this.setState({
            count: result.steps
          });
        });
    };

    reset = () => {
        this.setState({count: 0})
    }

  render() {
    return (
      <View style={styles.container}>
        <TimerCountdown
            initialSecondsRemaining={1000*10}
            onTick={secondsRemaining => console.log('tick', secondsRemaining)}
            onTimeElapsed={()=> console.log('complete')}
            allowFontScaling={true}
            style={{fontSize:20}}/>
        <Text style={styles.counter}>{this.state.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
      fontSize: 200
  }
});
