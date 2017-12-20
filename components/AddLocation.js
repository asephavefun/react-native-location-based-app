import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      name: '',
      lat: '',
      long: ''
    };
  }
  saveLocation(locationData) {
    this.props.data(locationData)
  }

  render() {
    return (
      <View>
        <TextInput 
          onChangeText={(name) => {this.setState({name: name})}}
          value={this.state.name}
        />
        <View>
          <TextInput 
            onChangeText={(lat) => {this.setState({lat: lat})}}
            value={this.state.lat}
          />
          <TextInput 
            onChangeText={(long) => {this.setState({name: long})}}
            value={this.state.long}
          />
        </View>
        <Button 
          onPress={this.saveLocation.bind(this, this.state)}
          title='Save Location'
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
