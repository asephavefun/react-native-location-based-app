import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default class GetMyLocation extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      name: 'My Location',
      lat: '0',
      long: '0'
    };
  }

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
        <View>
          <Text>{this.state.name}</Text>
          <Text>Latitude: {this.state.lat}</Text>
          <Text>Longitude: {this.state.long}</Text>
        </View>
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
