import React, { useState } from 'react';
import { StyleSheet, 
          Text, 
          View, 
          TextInput, 
          Button, 
          ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    //anonymous function
    setGoals(currentGoals => [...currentGoals, enteredGoal]);
  };
  
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Goal" 
                   style={styles.inputArea} 
                   //don't add paranthesis because don't want to execute immediately
                   onChangeText={goalInputHandler}
                   value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <ScrollView>
        {goals.map((goal, index) => 
          <View key={index}>
            <Text style={styles.listItem}>
              {goal}
            </Text>
        </View>)}
      </ScrollView>
    </View>
  );
}

//nested javascript object for styling
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  inputArea: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10, 
    width: 200
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
