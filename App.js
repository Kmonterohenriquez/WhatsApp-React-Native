import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0)
  return (
    <View style={styles.container}>
      <Text>Kevin Montero</Text>
      <Text>{count}</Text>
      <Button
        title="Start"
        onPress={()=> setCount(count + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
