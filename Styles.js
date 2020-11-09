
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    height: 45,
    marginTop: 150,
  },
  scroll: {
    fontSize: 10,
    alignSelf: 'center',

  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    width: screenWidth - 20,
    height: 38,
    padding: 4,
    fontSize: 16,
    borderColor: '#3a3a3a',
    borderWidth: 1,
    borderRadius: 8,
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'#263238',
    borderColor: '#263238',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    alignSelf: 'center',
  }
})