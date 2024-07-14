import React, { useContext } from 'react'
import DataContext from '../context/DataContext';

const ResultCount = () => {
  const {data} = useContext(DataContext);
  return (
    <div className="count-container container">
      <div className='count'>
      <span><span style={{color:'green'}}> {data.length} </span> Results Found <span style={{color:'green'}}> ^_^</span></span>
      </div>
    </div>
  )
}

export default ResultCount