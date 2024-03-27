// In App.js in a new project
import React, { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Navigation/StackNavigator';

const App = () => {

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;