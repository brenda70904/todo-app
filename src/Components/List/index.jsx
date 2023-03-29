import { useContext } from 'react';
import { SettingContext } from '../../Context/Settings';
import { Pagination, Card, Text, Group, CloseButton, Badge } from '@mantine/core';



const List = ({ toggleComplete, deleteItem }) => {
  const { activePage, setPage, list, showComplete, displayCount } = useContext(SettingContext);
  const listToRender = showComplete ? list : list.filter(item => !item.complete)
  const listStart = displayCount * (activePage - 1)
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
        <Card m="sm" withBorder shadow="sm" padding="lg" key={item.id} >
          <Card.Section withBorder>
            <Group position='apart'>
              <Group>
                <Badge
                  m="10px"
                  color={item.complete ? 'red' : 'green'}
                  radius="md"
                  variant="filled"
                  onClick={() => toggleComplete(item.id)}
                >
                  {item.complete ? 'Complete' : 'pending'}
                </Badge>
                <Text>Assigned to:{item.assignee}</Text>

              </Group>
              <CloseButton onClick={() => { deleteItem(item.id) }} title="Close popover" size="xl" iconSize={20} />
            </Group>
          </Card.Section>
          <Text mt="sm" align=''>{item.text}</Text>
          <Text align="right">Difficulty: {item.difficulty}</Text>
        </Card>
        // <div key={item.id}>
        //   <p>{item.text}</p>
        //   <p><small>Assigned to: {item.assignee}</small></p>
        //   <p><small>Difficulty: {item.difficulty}</small></p>
        //   <Button onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button>
        //   <hr />
        // </div>
      ))}

      <Pagination value={activePage} onChange={setPage} total={pageCount} position="center" color="gray" radius="xl" withEdges />

    </>
  )
}

export default List; 