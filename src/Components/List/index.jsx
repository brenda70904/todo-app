import { useContext } from 'react';
import { SettingContext } from '../../Context/Settings';
import { Button } from '@mantine/core';
import { Pagination } from '@mantine/core';


const List = ({toggleComplete}) => {
  const {activePage, setPage, list, showComplete, displayCount} = useContext(SettingContext);

  const listToRender = showComplete ? list: list.filter(item=> !item.complete)
  const listStart = displayCount * (activePage -1) 
  const listEnd = listStart + displayCount;
  const pageCount = Math.ceil(listToRender.length / displayCount);

  // console.log('pageCount', pageCount);

  const displayList = listToRender.slice(listStart, listEnd);

  return (
    <>
      {/* <header data-testid="todo-header">
        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </header> */}

      {displayList.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <Button onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button>
          <hr />
        </div>
      ))}

      <Pagination value={activePage} onChange={setPage} total={pageCount} position="center" color="gray" radius="xl" withEdges/>

    </>
  )
}

export default List; 