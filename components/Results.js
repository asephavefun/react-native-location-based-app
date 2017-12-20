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
        ]
    }
  }

  goToHome() {
    this.props.page()
  }

  render() {
    return (
      <View>
        <FlatList 
          data={this.state.locations}
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
