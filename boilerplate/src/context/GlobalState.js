import React, { useReducer, createContext } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  companies: [
    {
      _id: '5d725a4a7b292f5f8ceff789',
      name: 'Bincom ICT Solutions',
      description:
        'We are a solid team with meaningful startup experience including scaling up and acquisitions, realistic expectations, and good vibes',
    },
    {
      _id: '5d725c84c4ded7bcb480eaa0',
      name: 'Softcom',
      description:
        'We are a company full of love and building enterprise applications and deploying our apps on various clous platforms',
    },
    {
      _id: '5d725cd2c4ded7bcb480eaa2',
      name: 'Interswitch',
      description:
        'In this course you will learn to create beautiful interfaces',
    },
  ],
  loading: true,
};

// Create context
export const CompanyContext = createContext(initialState);

// Component provider
export const CompanyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <CompanyContext.Provider
      value={{
        companies: state.companies,
        loading: state.loading,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
