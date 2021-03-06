import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TaskItem = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.listItem}>{props.title}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={props.onDelete.bind(this,props.id)}>
        <Text style={styles.text}>DEL</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    marginVertical: 10,
    borderWidth: 1,
    flex: 1,
    marginRight: 20,
    height: 50,
  },
  button: {
    width:60,
    height: 50, 
    marginVertical: 10,
    backgroundColor:'#5fc9f8',
    alignItems:'center',
    justifyContent:"center"
},
text: {
    fontSize: 18,
    fontWeight: 'bold',
}
});
export default TaskItem;
