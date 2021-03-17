import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Phrase({ currentPhrase, phrases, style, ...props }) {
  return (
    <Text style={{ ...styles.text, ...style }} {...props}>
      {phrases[currentPhrase] && `“${phrases[currentPhrase]}”`}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: '#F03030',
    fontSize: 30,
    minHeight: 100,
    paddingHorizontal: 10,
    textAlign: 'center'
  }
});
