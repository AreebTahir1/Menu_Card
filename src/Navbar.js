import React from 'react'
import './App.css'

const Navbar = ({uniqueList, filterItem}) => {
     return (
      
        <div className="btn-container">
          {uniqueList.map((curElem) => {
            return (
              
              <button
                className="btn-group"
                onClick={() => filterItem(curElem)}
                >
                {curElem}
              </button>
            );
          })}
          </div>
      

              
    
  )
}

export default Navbar
