import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, updateData } from './TodoSlice';

export default function CrudRedux() {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('');
  const [editIndex,setEditIndex] = useState(null);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.TodoKey.data);

  const handleSubmit = () => {
    if(editIndex == null){
      const obj = { id: Date.now(), task, priority };
      dispatch(addData(obj));
    }else{
      let editObj = {id : editIndex,task,priority};
      dispatch(updateData(editObj))
    }
    setTask('');
    setPriority('');
    setEditIndex(null)
  };

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  const handleEdit = (e) => {
    setTask(e.task)
    setEditIndex(e.id)
    setPriority(e.priority)

  };

  return (
    <div>
      <h1>CrudRedux</h1>

      <input
        type="text"
        placeholder="Enter Your Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Your Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <button onClick={handleSubmit}>{editIndex ? "Update" : "Add"}</button>

      {data &&
        data.map((e, i) => (
          <ul key={e.id}>
            <li>{i + 1}</li>
            <li>{e.task}</li>
            <li>{e.priority}</li>
            <button onClick={() => handleDelete(e.id)}>Delete</button>
            <button onClick={() => handleEdit(e)}>Edit</button>
          </ul>
        ))}
    </div>
  );
}
