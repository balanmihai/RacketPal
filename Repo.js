
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
import React from 'react'
import {styles} from './Styles'

export default function Repo({repo}) {
  return (
    <View >
      <Text>{JSON.stringify(repo.full_name)}</Text>
    </View>
  )
}
