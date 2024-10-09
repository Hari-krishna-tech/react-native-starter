import React, {useState, useReducer} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const reducer = (state, action) => {
    switch(action.type) {
        case 'increase':
            return {...state, counter: state.counter + action.payload}
        case 'decrement':
            return {...state, counter: state.counter - action.payload}
        default:
            return state;   // Return the unchanged state if an unknown action is dispatched.
    }
}

const CounterScreen = () => {
//   const [counter, setCounter] = useState(0);
  const [counter, dispatch] = useReducer(reducer, {counter:1})
  return (
    <View>
        <Text style={styles.text}>{counter.counter}</Text>
        <Button onPress={()=> dispatch({type: "increase", payload: 1})} title="increase" />
        <Button onPress={()=> dispatch({type: 'decrement', payload: 1}) } title="decrease" />

    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center'
    }
})

export default CounterScreen