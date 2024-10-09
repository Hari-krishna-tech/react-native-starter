import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const ImageDetails = ({title, src, score}) => {
  return (
    <View>
        <Text>{title} - {score}</Text>
       <Image source={src} /> 
        </View>
  )
}

export default ImageDetails