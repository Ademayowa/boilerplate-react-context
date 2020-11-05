import React from 'react';

const CompanyList = ({ name, desc }) => {
  return (
    <row>
      <div className='col-sm-12'>
        <h4>{name}</h4>
        <p>{desc}</p>
      </div>
    </row>
  );
};

export default CompanyList;
