import React from 'react'
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

export default class GetMyLocation extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      name: 'My Location',
      lat: '-6.10',
      long: '140.00',
      errorMessage: ''
    };
  }

  componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
          this.setState({
            errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
          });
        }
    }

  getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }

        let location = await Location.getCurrentPositionAsync({});
        console.dir(location)
        this.setState({
            lat: location.coords.latitude,
            long: location.coords.longitude
        }, () => this.passMyLocationToParent());
        
    };

  passMyLocationToParent() {
    console.log('halo from pass')
    this.props.myLocation(this.state)
  }

  render() {
    return (
      <View>
        <Button 
          onPress={this.getLocationAsync.bind(this)}
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
