import React, { useContext } from 'react';
import { CompanyContext } from '../context/GlobalState';
import CompanyList from './CompanyList';

const Company = () => {
  const { companies } = useContext(CompanyContext);

  return (
    <div className='container pt-5'>
      <h2 className='text-center'>List Of Companies</h2>
      {companies.map((company) => (
        <CompanyList
          key={company._id}
          name={company.name}
          desc={company.description}
        />
      ))}
    </div>
  );
};

export default Company;
