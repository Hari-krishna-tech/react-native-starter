import React from 'react'
import {View,FlatList, Text, StyleSheet} from 'react-native'

const ListScreen = () => {
  const friends = [
    {name: 'John', age: 30},
    {name: "john doe", age: 30},
    {name: "john do", age: 30},
    {name: 'hari', age: 30},
    {name: 'krishna', age: 30},
    
  ]

  
  return (
    <View>
        <FlatList 
        
        keyExtractor={(item, index) => index.toString()}  // unique id for each item in the list
        data={friends}
        renderItem={({item}) => {
            return <Text style={styles.textStyle}>{item.name} - age {item.age}</Text>
        }}
        />

    </View>
  )
}

const styles = StyleSheet.create({
    textStyle : {
        marginVertical:10,
       
    }
});

export default ListScreen;