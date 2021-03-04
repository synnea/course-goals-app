import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  // the following syntax gives the guaranteed latest snapshot

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal"
         value={enteredGoal}
         onChangeText={goalInputHandler}
         style={styles.input}/>
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent:'space-between', 
    alignItems: 'center'
  },
  input: {
    width: 200, 
    borderBottomColor: 'black', 
    paddingTop: 10, 
    borderBottomWidth: 1
  }
});

