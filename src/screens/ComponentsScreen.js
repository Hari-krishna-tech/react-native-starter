import react from "react";
import {View,Text, StyleSheet} from "react-native";



const ComponentsScreen = () => {
    const name = "John Doe";
  return <View>
    <Text style={styles.textStyle}>Getting Started with React Native</Text>
    <Text style={styles.nameStyle}>My name is {name}</Text>
  </View>;
};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  nameStyle: {
    fontSize: 20,
    marginTop: 20,
  },
 
});

export default ComponentsScreen;