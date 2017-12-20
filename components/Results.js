import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default class Results extends React.Component {
  goToHome() {
    this.props.page()
  }

  render() {
    return (
      <View>
        <FlatList 
          data={[{nama: 'a'}, {nama: 'b'}]}
          renderItem={({item}) => <Text>{item.nama}</Text>}
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
