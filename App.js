import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home.js'
import Results from './components/Results.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      page: 'home',
      title: 'App Malam Ini',
      myLocation: {}
    };
  }

  pindahHalaman() {
    if (this.state.page == 'results') {
      this.setState({page: 'home'})
      //this.state = {page: 'home'}
    } else if (this.state.page == 'home') {
      this.setState({page: 'results'}) 
    }
  }

  saveLocationToState(data) {
    this.setState({myLocation: data})
    console.log('lokasi saya', this.state.myLocation)
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.state.myLocation)}</Text>
        {this.state.page == 'home' && <Home 
                                          myLocation={this.saveLocationToState.bind(this)} 
                                          textnya='Dari induk' 
                                          page={this.pindahHalaman.bind(this)}/>}
        {this.state.page == 'results' && <Results myLocation={this.state.myLocation} page={this.pindahHalaman.bind(this)}/>}
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
