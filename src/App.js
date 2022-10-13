import React from 'react';
import Navbar from './Navbar';
import Data from './Data';
import './App.css';
import MenuCard from './MenuCard';

const uniqueList = [
 ...new Set(Data.map(curElem =>curElem.category)),"All",
]

function App() {
  const [menuItems, setMenuItems] = React.useState(Data)
    
  function filterItem(category){
    if ( category==="All"){
      return setMenuItems(Data)
    }
    const updatedList = Data.filter(curElem =>{
      return (curElem.category === category)
    })
    setMenuItems(updatedList)
  
  }
 
  return (
    <div className="App">
      <h1>MENU</h1>
      <div class="slidebox">
        <div class="slider"></div>
    </div>
      <Navbar uniqueList={uniqueList} filterItem={filterItem}/>
      <MenuCard menuItems={menuItems} />
      </div>
  );
}

export default App;
