import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';

const TaskInput = (props) => {
  const [enteredTask, setEnteredTask] = useState('');
  const taskInputHandler = (enteredText) => {
    setEnteredTask(enteredText);
  };
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredTask}
          style={styles.input}
          placeholder="add task"
          onChangeText={taskInputHandler}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => props.onAddTask(enteredTask)}>
            <Text style={styles.text}>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={() => props.onCancel()}>
            <Text style={styles.text}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer:{
    width:'50%',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  buttonAdd: {
    width: 80,
    height: 50,
    marginBottom: 20,
    backgroundColor: '#5fc9f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCancel: {
    width: 80,
    height: 50,
    marginBottom: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default TaskInput;
