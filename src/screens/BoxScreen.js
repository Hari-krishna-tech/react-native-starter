import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
       <View style={styles.boxOne} />
       <View style={styles.boxTwo} />
       <View style={styles.boxThree} /> 
    </View>
  )
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    boxOne: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        
    },
    boxTwo: {
        height: 100,
        width: 100,
        top: 100,
        backgroundColor: 'blue',
    }, 
    boxThree: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
    }  // Add more boxes as needed to create a pattern or design.  Remember to adjust the dimensions and colors accordingly.  For example, you could use a loop to create multiple boxes of different sizes and colors.  Also, consider using Flexbox or Grid layout to create a more complex design.  For example, you could create a 3x3
    
});

export default BoxScreen