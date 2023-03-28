import React, { useState } from 'react';

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
  
  const [displayCount, seDisplayCount] = useState(3);
  const [sort, setSort] = useState('difficulty');
  const [showComplete, setShowComplete] = useState(false);

  const contextValue = { 
    showComplete, 
    setShowComplete,
    displayCount,
    seDisplayCount,
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
  };


  return (
    <SettingContext.Provider value={contextValue}>
      {children}
    </SettingContext.Provider>
  )

}
export default SettingProvider;