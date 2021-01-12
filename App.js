import React from 'react';
import AppNavigator from './src/routes/main';
console.disableYellowBox = true;

class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}
export default App;