import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import ImageDetails from '../components/ImageDetails';
import Forest from "../../assets/forest.jpg";
import Beach from "../../assets/mountain.jpg";
import Mountain from "../../assets/beach.jpg";


const ImageScreen = () => {
  return (
    <View>
        <ImageDetails title="Forest" src={Forest} score={7}/>
        <ImageDetails title="Beach" src={Mountain} score={8}/>
        <ImageDetails title="Mountain" src={Beach} score={10}/>
    </View>
  )
}

export default ImageScreen