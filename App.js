import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native'
import CounterScreen from './components/CounterScreen';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      startPressed: false
    }
  }

  handleOnPress = () => {
    this.setState(prevState => {
      return {startPressed: !prevState.startPressed}
    })
    console.log("handleOnPressed called")
  }

  render() {
    console.log(this.state.startPressed);

    if(this.state.startPressed) {
      return <CounterScreen/>
    }
    return (
      <View style={styles.container}>
        <Button title="Get Jiggly Buff" onPress={this.handleOnPress}></Button>
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
});
