import React from 'react'
import './main.css';
import Search from './Search';
import ResultCount from './ResultCount';


const MainSection = () => {
  return (
    <section className='main col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12'>
      <Search />
      <ResultCount />
    </section>
  )
}

export default MainSection