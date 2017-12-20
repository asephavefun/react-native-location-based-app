import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      locations: [
          {name: "Borromeous", lat: "-6.8941599", long: "107.5436934"},
          {name: "ITB", lat: "-6.89148", long: "107.6084704"},
          {name: "Eduplex", lat: "-6.896556", long: "107.6108543"},
          {name: "McD Dago", lat: "-6.8849575", long: "107.6113341"},
          {name: "BIP", lat: "-6.9085805", long: "107.6089171"},
          {name: "Miko Mall", lat: "-6.9602589", long: "107.5787321"},
          {name: "Unpad Jatinangor", lat: "-6.9311893", long: "107.7698141"},
          {name: "Gedung Sate", lat: "-6.9025157", long: "107.6165933"},
          {name: "Masjid Raya Bandung", lat: "-6.9217568", long: "107.6043132"}
          ],
      filteredLocation: []
    }
  }

  componentWillMount() {
    this.compareDistance()
  }

  compareDistance() {
    var lat1 = this.props.myLocation.lat
    var lon1 = this.props.myLocation.long
    var filtered = []

    this.state.locations.map((location) => {
      var lat2 = location.lat
      var lon2 = location.long

      var R = 6371; // Radius of the earth in km
      var dLat = (lat2-lat1) * (Math.PI/180);  // deg2rad below
      var dLon = (lon2-lon1) * (Math.PI/180); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos((Math.PI/180) * (lat1)) * Math.cos((Math.PI/180) * (lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c * 1000;

      if (d < 10000) {
        filtered.push(location)
      }
    })

    this.setState({filteredLocation: filtered})
  }



  goToHome() {
    this.props.page()
  }

  render() {
    return (
      <View>
        <FlatList 
          data={this.state.filteredLocation}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
        <Text style={styles.text}>Aku di results nih</Text>
        <Button 
          onPress={this.goToHome.bind(this)}
          title='Go to Home'
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
