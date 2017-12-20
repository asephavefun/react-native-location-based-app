import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default class GetMyLocation extends React.Component {
  getMyLocation() {
    console.log('my location')
  }

  render() {
    return (
      <View>
        <Button 
          onPress={this.getMyLocation.bind(this)}
          title='Get My Loc'
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
