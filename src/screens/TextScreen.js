import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
const TextScreen = () => {
  const [text, setText] = useState("")
  const [isCorrect, setIsCorrect] = useState(false);
  return (

    
    <View>
        <Text>Enter Password: </Text>
        <TextInput style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={text}
            onChangeText={(newText) => {
                if(newText.length > 5) {
                    setIsCorrect(true)
                } else if(newText.length <= 5){
                    setIsCorrect(false)
                }
                setText(newText)}}
        />
        <Text>{isCorrect? text: "Value must be greater than 5 character"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        padding:10,
        borderWidth: 1,
    }

})
export default TextScreen