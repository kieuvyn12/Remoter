import { useScreens } from 'react-native-screens';
import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
useScreens();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
