import { StatusBar } from 'react-native';
import {Text, View } from 'react-native';
import {styles} from './themes/theme'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar barStyle="light-content" backgroundColor="#47B5FF" />
    </View>
  );
}


