import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigation/Navigator';
import { StyleSheet, View } from 'react-native'; 

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
