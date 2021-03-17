import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function Button({ children, onPress, style, ...props }) {
  return (
    <View {...props}>
      <TouchableOpacity
        onPress={onPress}
        style={{ ...styles.button, ...style }}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 12,
    borderColor: '#F03030',
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 5
  }
});
