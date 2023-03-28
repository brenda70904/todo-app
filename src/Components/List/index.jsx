import { useContext } from 'react';
import { SettingContext } from '../../Context/Settings';
import { Button } from '@mantine/core';



const List = (props) => {
  const {list, incomplete} = useContext(SettingContext);

  return (
    <>
      <header data-testid="todo-header">
        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </header>

      {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <Button onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button>
          <hr />
        </div>
      ))}

    </>
  )
}

export default List; 