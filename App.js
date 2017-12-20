import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home.js'
import Results from './components/Results.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      page: 'home',
      title: 'App Malam Ini'
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

  render() {
    return (
      <View>
        <Text>{this.state.title}</Text>
        {this.state.page == 'home' && <Home textnya='Dari induk' page={this.pindahHalaman.bind(this)}/>}
        {this.state.page == 'results' && <Results page={this.pindahHalaman.bind(this)}/>}
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
