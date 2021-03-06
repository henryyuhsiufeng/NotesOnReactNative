import React, { useState } from 'react';
import { StyleSheet, 
          Text, 
          View, 
          TextInput, 
          Button, 
          ScrollView,
          FlatList
        } from 'react-native';

//components
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  //list of objects
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    //anonymous function
    //each goal is an object with props key and value
    //concatenate currentGoals.length to string because flatlist expects key to be a string
    setGoals(currentGoals => [
      ...currentGoals, 
      { id: ''+currentGoals.length, value: goalTitle}]);
      setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalAdd = () => {
    setIsAddMode(false);
  }
  
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} 
          onAddHandler={addGoalHandler}
          onCancel={cancelGoalAdd} />
      <FlatList
        // keyExtractor={(item, index) => item.id} 
        data={goals}
        renderItem={itemData => 
          <GoalItem 
          title={itemData.item.value} 
          id={itemData.item.id}
          onDelete={removeGoalHandler}/>}
        />
        
    </View>
  );
}

//Flatlist key generator example
{/* <FlatList 
  data={[{name: 'a'}, {name: 'b'}]} 
  renderItem={
    ({item}) => <Text>{item.name}</Text>
  } 
  keyExtractor={(item, index) => index.toString()}
/> */}

//ScrollView example
// {goals.map((goal, index) => 
//   <View key={index}>
//     <Text style={styles.listItem}>
//       {goal}
//     </Text>
// </View>)}

//nested javascript object for styling
const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
