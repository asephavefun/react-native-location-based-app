import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import GetMyLocation from './GetMyLocation.js'
import AddLocation from './AddLocation.js'

export default class Home extends React.Component {
  goToResults() {
    this.props.page()
  }

  handleTextInput(dataTextInputYangTadi) {
    console.log(dataTextInputYangTadi)
  }

  saveToAppState(location) {
    this.props.myLocation(location)
  }

  render() {
    return (
      <View>
        <GetMyLocation myLocation={this.saveToAppState.bind(this)} />
        <AddLocation data={this.handleTextInput.bind(this)} />
        <Button 
          onPress={this.goToResults.bind(this)}
          title='Go to Results'
        />
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
  text: {
    marginTop: 24,
  }
});
