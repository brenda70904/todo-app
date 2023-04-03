import React, { useEffect, useState } from 'react';

export const SettingContext = React.createContext();

const SettingProvider = ({ children }) => {
  // pass to form
  const [values, setValues] = useState({});

  // pass to Todo
  const [activePage, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [displayCount, setDisplayCount] = useState(3);
  const [sort, setSort] = useState('difficulty');
  const [showComplete, setShowComplete] = useState(true);

  const saveLocally = () => {
    localStorage.setItem('todo', JSON.stringify({ displayCount, showComplete, sort }));
    // localStorage.setItem('todoList', JSON.stringify(list));
  }


  useEffect(() => {
    // let storagelist = JSON.parse(localStorage.getItem('todoList'));
    let storage = JSON.parse(localStorage.getItem('todo'));
    if (storage) {
      console.log('storage',storage.list);
      setShowComplete(storage.showComplete);
      setDisplayCount(storage.displayCount);
      setSort(storage.sort);
      
    }
  }, []);


  const contextValue = {
    showComplete,
    setShowComplete,
    displayCount,
    setDisplayCount,
    sort,
    setSort,
    activePage,
    setPage,
    list,
    setList,
    incomplete,
    setIncomplete,
    defaultValues,
    values,
    setValues,
    saveLocally,
  };

  // useEffect(()=>{
  //   let items = JSON.parse(localStorage.getItem())
  // })

  return (
    <SettingContext.Provider value={contextValue}>
      {children}
    </SettingContext.Provider>
  )

}
export default SettingProvider;