import React, { useContext, useEffect } from 'react';
import useForm from '../../hooks/form';
import { SettingContext } from '../../Context/Settings';
import List from '../List'
import { v4 as uuid } from 'uuid';
import { Button, Input, Rating, Pagination } from '@mantine/core';

const Todo = () => {

  const { activePage, setPage, list, setList, incomplete, setIncomplete, defaultValues } = useContext(SettingContext);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  return (
    <>

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <Input onChange={handleChange} name="text" type="text" placeholder="Item Details" radius="md" />
        </label>

        <label>
          <span>Assigned To</span>
          <Input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" radius="md" />
        </label>

        <label>
          <span>Difficulty</span>
          <Rating onChange={handleChange} defaultValue={defaultValues.difficulty} name="difficulty" color="red" />
        </label>

        <label>
          <Button type="submit">Add Item</Button>
        </label>
      </form>

      <List toggleComplete={toggleComplete} />
      <Pagination value={activePage} onChange={setPage} total={1} position="center" color="gray" radius="xl" withEdges/>
    </>
  );
};

export default Todo;
