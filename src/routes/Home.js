import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards'
const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Cards/>
    </div>
  )
}

export default Home