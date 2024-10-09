import React from "react";
import { Text, StyleSheet ,View, Button, TouchableOpacity} from "react-native";


const HomeScreen = ({navigation}) => {
  return (<View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button 
    onPress={() => navigation.navigate("Components")}
    title="Go to Component pages" />
    
    <Button 
      onPress={() => navigation.navigate("List")}
      title='Go to the List Page'
    />

    <Button 
      onPress={() => navigation.navigate("ImageDetails")}
      title='Go to the Image Screen'
      />
    <Button 
      onPress={() => navigation.navigate("Counter")}
      title='Go to the Counter Screen'
      />
<Button 
      onPress={() => navigation.navigate("Color")}
      title='Go to the Color Screen'
      />
<Button 
      onPress={() => navigation.navigate("Text")}
      title='Go to the Text Screen'
      />



  </View>);
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;