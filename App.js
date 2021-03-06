import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Button} from 'react-native';
import TaskItem from './src/components/TaskItem';
import TaskInput from './src/components/TaskInput';

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [modalVisibility,setModalVisibility] = useState(false)

  const addTaskHandler = (taskTitle) => {
    setTaskList([
      ...taskList,
      {key: Math.random().toString(), value: taskTitle},
    ]);
    setModalVisibility(false)
  };
  const removeTaskHandler = (taskId) =>{
      setTaskList(currentTasks=>{  
        return currentTasks.filter((task)=> task.key !== taskId)
      })
  }
  const closeTaskHandler = () =>{
      setModalVisibility(false)
  }
  return (
    <View style={styles.screen}>
      <Button title="Add New Task" onPress={() => setModalVisibility(true)}/>
      <TaskInput visible={modalVisibility} onCancel={closeTaskHandler} onAddTask={addTaskHandler} />
      <FlatList
        data={taskList}
        keyExtractor={(task) => task.key}
        renderItem={(task) => <TaskItem id={task.item.key} onDelete={removeTaskHandler} title={task.item.value} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

export default App;
