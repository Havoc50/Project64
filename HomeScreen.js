import * as React from 'react';
import * as Speech from 'expo-speech';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Button,
} from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from '../database';
//import db from './localdb';
//import PhonicSoundButton from './components/PhonicSoundButton';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      word: '',
      lexicalCategory: '',
      definition: '',
    };
  }

    // console.log(this.state.text);
    // console.log(this.state.word);
    // console.log(this.state.lexicalCategory);
    // console.log(this.state.definition);

    getWord = (wordd) => {
      var wordd = wordd.toLowerCase()
      try{
        var word = dictionary[wordd]["word"]
        var lexicalCategory = dictionary[wordd]["lexicalCategory"]
        var definition = dictionary[wordd]["definition"]
        this.setState({
          "word" : word,
          "lexicalCategory" : lexicalCategory,
          "definition" : definition
        })
      }
      catch(err){
        alert("Sorry but this word is not avaliable at the moment :(")
        this.setState({
          'text' : '',
          'isSearchPressed' : false
        })
      }
    };

  render() {
    return (
      <div>
        <View style={styles.container}>
          <Header
            backgroundColor={'#ee11ee'}
            centerComponent={{
              text: 'The Dictionary (PE)',
              style: { color: '#000', fontSize: 20, fontWeight: 'bold' },
            }}
          />

          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({
                text: text,
                isSearchPressed: false,
                word: 'Loading...',
                lexicalCategory: '',
                examples: [],
                definition: '',
              });
            }}
            value={this.state.text}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({ isSearchPressed: true });
              this.getWord(this.state.text);
            }}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Word : </Text>
          <Text style={{ fontSize: 18 }}>{this.state.word}</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Type : </Text>
          <Text style={{ fontSize: 18 }}>{this.state.lexicalCategory}</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Definition : </Text>
          <Text style={{ fontSize: 18 }}>{this.state.definition}</Text>
        </View>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
  },
  inputBox: {
    marginTop: 50,
    marginBottom: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 0,
    borderRadius: 10,
    borderColor: '#000000',
    backgroundColor: '#ee11ee',
    padding: 5,
    width: 150,
    height: 50,
    borderWidth: 3,
  },
});
