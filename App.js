import React, { useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import Button from "./src/components/Button";
import Task from "./src/components/Task";
import styles from "./Global";

export default function App() {
  const[tasks, setTesks] = useState([]);
  const[newTask, setNewTask]  = useState("");

  function addNewTask() {
    setTesks ([...tasks, { text: newTask, completed: false}]);
  }
  
  function toggleTask(index) {
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed;
    setTesks(newTasks); 
  }

  useEffect(() => {
    const initialTasks = [
      {text: "Atividade 1", completed: false},
      {text:"Atividade 2", completed: true},
      {text: "Atividade 3", completed: true},
    ];
    setTesks(initialTasks);
  },[])

  return(
    <View style={styles.container}>
    <TextInput  style={styles.input}
    value={newTask}
    onChangeText={(text) => setNewTask(text)}/>
   <Button title="Adicionar" onPress={() =>addNewTask()}/>
     <View style={styles.listContainer}>
      {tasks.map ((task,index ) => (
        <Task isChecked={task.completed} key={task.text} label={task.text}onPress={() =>toggleTask(index)} />
      ))}
     </View>
    
   </View>
  )
}
