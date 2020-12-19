import React, { createContext, useCallback, useState, useContext } from 'react';

// import api from '../services/api';

interface User {
    // id: string;
    name: string;
    email: string;
}

interface AuthState {
    user: User;
    token: string;
}

interface POContextData {
    po: string[];
    addPo(number: string): void;
    removePo(number: string): void;
}

const POContext = createContext<POContextData>({} as POContextData);

const POProvider: React.FC = ({ children }) => {
   
  const [data, setData] = useState<string[]>([]);

  const addPo = useCallback((number) => {
    let allSelectedPOs = data;

    if(!allSelectedPOs.includes(number)){
      allSelectedPOs.push(number);
    }else{
      const index = allSelectedPOs.indexOf(number);
      console.log(index);
      allSelectedPOs.splice(index, 1)
    }
    
    setData(allSelectedPOs);
  }, []);

  const removePo = useCallback((number) => {

  }, []);

  return (
    <POContext.Provider value={{ po: data, addPo, removePo }}>
      {children}
    </POContext.Provider>
  );
};

function usePO(): POContextData {
  const context = useContext(POContext);

  if (!context) {
    throw new Error('usePO must be used within an POProvider');
  }

  return context;
}

export { POProvider, usePO };
