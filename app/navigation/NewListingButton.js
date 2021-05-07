import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import { TouchableOpacity } from 'react-native'

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name='plus-circle'
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height: 80,
    width: 80,
    bottom: 20,
    borderColor: colors.white,
    borderWidth: 10,
    borderRadius: 40,
  },
})

export default NewListingButton
