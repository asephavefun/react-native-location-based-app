import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      nama: ''
    };
  }
  goToResults(dataTextInput) {
    this.props.data(dataTextInput)
  }

  render() {
    return (
      <View>
        <TextInput 
          onChangeText={(text) => {this.setState({nama: text})}}
          value={this.state.nama}
        />
        <Button 
          onPress={this.goToResults.bind(this, this.state.nama)}
          title='Kirim ke HomeJS'
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
