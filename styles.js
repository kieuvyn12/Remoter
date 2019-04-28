import { useScreens } from 'react-native-screens';
import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
useScreens();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    margin: 3,
    fontSize: 12,
    width: 300,
  },
});

export default styles;
