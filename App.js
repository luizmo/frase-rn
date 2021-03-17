import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Text
} from 'react-native';
import Phrase from './components/Phrases';

import BookClosed from './assets/closed-book.jpg';
import BookOpen from './assets/open-book.jpg';
import Button from './components/Button';

function generateRandomNumber(number) {
  return Math.floor(Math.random() * number);
}

const phrases = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel semper nibh. Fusce dictum sapien a velit blandit sollicitudin.",
  "Praesent imperdiet neque eget tempus blandit. In venenatis euismod nibh eu auctor. Nullam aliquam eu erat vel vehicula.",
  "Aliquam elementum iaculis turpis, in elementum elit rutrum vel. Duis dignissim lacus sed maximus tempor. ",
  "Suspendisse ornare a velit elementum dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  "Donec dui tellus, mollis eget eros at, gravida fringilla arcu."
];

function App() {
  const [currentPhrase, setCurrentPhrase] = useState();

  const changePhrase = useCallback(() => {
    setCurrentPhrase(state => {
      let newPhrase = generateRandomNumber(phrases.length);
      while (newPhrase === state) {
        newPhrase = generateRandomNumber(phrases.length);
      }
      return newPhrase;
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <Image
          resizeMode="contain"
          source={currentPhrase !== undefined ? BookOpen : BookClosed}
          style={styles.image}
        />
        <Phrase currentPhrase={currentPhrase} phrases={phrases} />
        <Button onPress={changePhrase}>
          <Text style={styles.buttonText}>Abrir</Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  scrollView: {
    backgroundColor: 'white',
    flex: 1
  },
  scrollViewContainer: {
    justifyContent: 'center',
    minHeight: '100%'
  },
  image: {
    alignSelf: 'center',
    height: 80,
    width: 120
  },
  buttonText: {
    color: '#F03030'
  }
});

export default App;
